"use client";

import { useEffect, useState } from "react";
import RobotIcon, { type RobotAction } from "./RobotIcon";

const ACTIONS: RobotAction[] = [
  "wave-l",
  "wave-r",
  "kick-l",
  "kick-r",
  "nod",
  "jump",
  "idle",
  "idle",
];

export default function Robot({ className }: { className?: string }) {
  const [action, setAction] = useState<RobotAction>("idle");
  const [tick, setTick] = useState(0);

  useEffect(() => {
    let id: ReturnType<typeof setTimeout>;
    const next = () => {
      setAction(ACTIONS[Math.floor(Math.random() * ACTIONS.length)]);
      setTick((t) => t + 1);
      id = setTimeout(next, 1600 + Math.random() * 1800);
    };
    id = setTimeout(next, 1200);
    return () => clearTimeout(id);
  }, []);

  return <RobotIcon key={tick} className={className} action={action} />;
}
