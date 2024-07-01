export type STATUS = "IN_QUEUE" | "IN_PROGRESS" | "COMPLETED" | "FAILED";
export type StatusResponse = COMPLETED | IN_PROGRESS | IN_QUEUE | FAILED;

export interface RunpodResponse {
  id: string;
  status: string;
}

export interface GenerateProfilePicturePayload {
  base64Image: string;
  gender: Gender;
  style: "smart" | "casual" | "formal" | "sporty" | "business";
}

export type Gender = "male" | "female" | "other";

type COMPLETED = {
  delayTime: number;
  executionTime: number;
  id: string;
  output: Output;
  status: "COMPLETED";
};

type IN_PROGRESS = {
  delayTime: number;
  id: string;
  status: "IN_PROGRESS";
};

type IN_QUEUE = {
  id: string;
  status: "IN_QUEUE";
};

type FAILED = {
  id: string;
  status: "FAILED";
};

export type Output = {
  message: string;
  status: string;
  images: string;
};
