import { StatusResponse } from "@/types";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";
export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  const url = `https://api.runpod.ai/v2/${process.env.RUNPOD_PROFILE_ENDPOINT_ID}/status/${id}`;
  const headers = {
    Authorization: `Bearer ${process.env.RUNPOD_API}`,
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
  };
  const res = await fetch(url, { method: "GET", headers });
  const data: StatusResponse = await res.json();
  return Response.json(data);
}
