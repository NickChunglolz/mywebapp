import OpenAI from "openai";
import { buildSystemPrompt } from "@/lib/persona";

export const runtime = "nodejs";

const useGroq = !!process.env.GROQ_API_KEY;

const client = useGroq
  ? new OpenAI({
      apiKey: process.env.GROQ_API_KEY,
      baseURL: "https://api.groq.com/openai/v1",
    })
  : new OpenAI({
      apiKey: "ollama",
      baseURL: process.env.OLLAMA_URL ?? "http://localhost:11434/v1",
    });

const MODEL = useGroq
  ? process.env.GROQ_MODEL ?? "llama-3.3-70b-versatile"
  : process.env.OLLAMA_MODEL ?? "llama3.1:8b";

type Msg = { role: "user" | "assistant"; content: string };

export async function POST(req: Request) {
  const { messages } = (await req.json()) as { messages: Msg[] };
  if (!Array.isArray(messages) || messages.length === 0) {
    return new Response("messages required", { status: 400 });
  }

  let stream;
  try {
    stream = await client.chat.completions.create({
      model: MODEL,
      stream: true,
      max_tokens: 1024,
      messages: [
        { role: "system", content: buildSystemPrompt() },
        ...messages.slice(-20).map((m) => ({ role: m.role, content: m.content })),
      ],
    });
  } catch (err) {
    const provider = useGroq ? "groq" : `ollama (${MODEL})`;
    return new Response(
      `Provider error from ${provider}: ${(err as Error).message}`,
      { status: 502 },
    );
  }

  const encoder = new TextEncoder();
  const body = new ReadableStream({
    async start(controller) {
      try {
        for await (const chunk of stream) {
          const text = chunk.choices[0]?.delta?.content;
          if (text) controller.enqueue(encoder.encode(text));
        }
      } catch (err) {
        controller.enqueue(
          encoder.encode(`\n\n[error: ${(err as Error).message}]`),
        );
      } finally {
        controller.close();
      }
    },
  });

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
