import json
import os
import urllib.request

import boto3

amplify = boto3.client("amplify")
APP_ID = os.environ["AMPLIFY_APP_ID"]
BRANCH = os.environ["BRANCH"]
GITHUB_REPO = os.environ["GITHUB_REPO"]


def handler(event, context):
    url = f"https://api.github.com/repos/{GITHUB_REPO}/commits/{BRANCH}"
    req = urllib.request.Request(url, headers={"User-Agent": "amplify-poller"})
    with urllib.request.urlopen(req, timeout=10) as r:
        head_sha = json.load(r)["sha"]

    jobs = amplify.list_jobs(appId=APP_ID, branchName=BRANCH, maxResults=20)["jobSummaries"]
    successful = [j for j in jobs if j["status"] == "SUCCEED"]
    last_sha = successful[0]["commitId"] if successful else None

    print(f"head={head_sha} last_deployed={last_sha}")

    if head_sha == last_sha:
        return {"status": "no-op", "head": head_sha}

    job = amplify.start_job(appId=APP_ID, branchName=BRANCH, jobType="RELEASE")
    return {"status": "deployed", "head": head_sha, "jobId": job["jobSummary"]["jobId"]}
