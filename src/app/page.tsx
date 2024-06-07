import { ProfilePictureGenerator } from "@/components/profile-picture-generator";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <ProfilePictureGenerator />
    </main>
  );
}
