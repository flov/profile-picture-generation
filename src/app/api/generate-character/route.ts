import { promises as fs } from "fs";
import path from "path";
import type { GenerateProfilePicturePayload, RunpodResponse } from "@/types";
import { characterCrafterWorkflow } from "@/config/character-crafter-workflow";
import { styles } from "@/config/prompts";

export const maxDuration = 10; // This function can run for a maximum of 10 seconds
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const runpodEndpoint = `https://api.runpod.ai/v2/${process.env.RUNPOD_PROFILE_ENDPOINT_ID}/run`;
  const headers = {
    Authorization: `Bearer ${process.env.RUNPOD_API}`,
    "Content-Type": "application/json",
  };

  try {
    const { style, base64Image, gender } =
      (await request.json()) as GenerateProfilePicturePayload;

    const prompt =
      styles(gender).find((s) => s.label === style)?.prompt || "test";

    const res = await fetch(runpodEndpoint, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(characterCrafterWorkflow(prompt, base64Image)),
    });

    const data: RunpodResponse = await res.json();

    // const data = JSON.stringify(characterCrafterWorkflow(prompt, base64Image));

    return Response.json(data, {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

// Helper function to create the necessary directory if it doesn't exist
async function ensureDirectoryExistence(filePath: string) {
  const dirname = path.dirname(filePath);
  try {
    await fs.access(dirname);
  } catch (e) {
    await fs.mkdir(dirname, { recursive: true });
  }
}
