import { CharacterCrafter } from "@/components/character-crafter";
import { CharacterGenerator } from "@/components/character-generator";
import { GenerateImageForm } from "@/components/generate-image-form";
import { ImageGenerator } from "@/components/image-generator";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <CharacterCrafter />
      {/* <CharacterGenerator /> */}
      {/* <GenerateImageForm /> */}
      {/* <ImageGenerator /> */}
    </main>
  );
}
