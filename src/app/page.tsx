import { CharacterCrafter } from "@/components/character-crafter";
import { ProfilePictureGenerator } from "@/components/profile-picture-generator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Tabs defaultValue="characterCrafter">
        <TabsList>
          <TabsTrigger value="characterCrafter">Character Crafter</TabsTrigger>
          <TabsTrigger value="profilePictureGenerator">
            Profile Picture Generator
          </TabsTrigger>
        </TabsList>
        <TabsContent value="profilePictureGenerator">
          <ProfilePictureGenerator />
        </TabsContent>
        <TabsContent value="characterCrafter">
          <CharacterCrafter />
        </TabsContent>
      </Tabs>
    </main>
  );
}
