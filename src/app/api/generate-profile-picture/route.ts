import { workflow } from "@/config/profile-picture-workflow";
import { promises as fs } from "fs";
import path from "path";

export const maxDuration = 10; // This function can run for a maximum of 10 seconds
export const dynamic = "force-dynamic";

interface RunpodResponse {
  id: string;
  status: string;
}

interface GenerateProfilePicturePayload {
  base64Image: string;
  gender: "male" | "female" | "other";
  style: "smart" | "casual" | "formal" | "sporty" | "business";
}

export async function POST(request: Request) {
  const runpodEndpoint = `https://api.runpod.ai/v2/${process.env.RUNPOD_PROFILE_ENDPOINT_ID}/run`;
  const headers = {
    Authorization: `Bearer ${process.env.RUNPOD_API}`,
    "Content-Type": "application/json",
  };

  try {
    const { style, base64Image, gender } =
      (await request.json()) as GenerateProfilePicturePayload;

    const res = await fetch(runpodEndpoint, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(
        workflow(base64Image, gender ? gender : "female", style),
      ),
    });

    const data: RunpodResponse = await res.json();

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
