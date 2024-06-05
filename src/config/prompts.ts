export type Style = {
  label: string;
  prompt: string;
  flowID: number;
  image: string;
};

export const styles = (gender: string): Style[] => [
  {
    label: "Steampunk Inventor",
    prompt: `A ${gender} inventor in a steampunk workshop, surrounded by brass gadgets and contraptions, goggles perched on their forehead as they tinker with clockwork mechanisms and steam-powered devices.`,
    image: "/images/steampunk_inventor.jpg",
    flowID: gender === "two persons" ? 37 : 30,
  },
  {
    label: "Space Explorer",
    prompt: `A ${gender} space explorer aboard a futuristic spacecraft, peering out of a viewport into the vast expanse of the cosmos, their expression a mix of wonder and determination as they chart a course through the stars.`,
    image: "/images/space_explorer.jpg",
    flowID: gender === "two persons" ? 37 : 30,
  },
  {
    label: "Neo-Noir Femme Fatale",
    prompt: `A mysterious ${gender} femme fatale, bathed in the neon glow of a rain-soaked city street, cigarette smoke curling around her as she leans against a lamppost, her gaze both alluring and dangerous.`,
    image: "/images/neo_noir_femme_fatal.jpg",
    flowID: gender === "two persons" ? 37 : 30,
  },
  {
    label: "Arctic Explorer",
    prompt: `A ${gender} explorer braving the frozen wilderness of the Arctic, bundled up in fur-lined clothing as they trek across icy tundra and snow-covered mountains, searching for clues to unlock the secrets of the frigid landscape.`,
    image: "/images/arctic_explorer.jpg",
    flowID: gender === "two persons" ? 37 : 30,
  },
  {
    label: "Mystical Shaman",
    prompt: `A ${gender} shaman communing with the spirits of the natural world, surrounded by swirling mists and shimmering energy as they perform ancient rituals to harness the power of the elements and heal the land.`,
    image: "/images/mystical_shaman.jpg",
    flowID: gender === "two persons" ? 37 : 30,
  },
  {
    label: "Gothic Vampire",
    prompt: `A ${gender} vampire lurking in the shadows of a Gothic castle, their pale skin and sharp fangs gleaming as they prepare to strike fear into the hearts of their unsuspecting prey.`,
    image: "/images/gothic_vampire.jpg",
    flowID: gender === "two persons" ? 37 : 30,
  },
  {
    label: "Wandering Ronin",
    prompt: `A ${gender} ronin wandering the feudal countryside of ancient Japan, their sword at their side as they seek redemption for past sins and honor in a world torn apart by war and strife.`,
    flowID: gender === "two persons" ? 37 : 30,
    image: "/images/wandering_ronin.jpg",
  },
  // {
  //   label: "Mythical Druid",
  //   prompt: `A ${gender} druid communing with the ancient spirits of the forest, their hands raised to the sky as they channel the power of nature to protect the sacred groves and maintain the balance of the natural world.`,
  //   flowID: gender === "two persons" ? 37 : 30,
  //   image: "/images/mythical_druid.jpg",
  // },
  // {
  //   label: "Cosmic Wanderer",
  //   prompt: `A ${gender} wanderer journeying through the cosmos aboard a starship, their eyes reflecting the light of distant galaxies as they chart a course through the infinite expanse of space, seeking knowledge and enlightenment.`,
  //   flowID: gender === "two persons" ? 37 : 30,
  //   image: "/images/cosmic_wanderer.jpg",
  // },
  // {
  //   label: "Swashbuckling Pirate",
  //   prompt: `A ${gender} pirate captain aboard their ship, the Jolly Roger, sailing the high seas in search of treasure and adventure, their cutlass flashing in the sunlight as they lead their crew into battle against rival buccaneers.`,
  //   flowID: gender === "two persons" ? 37 : 30,
  //   image: "/images/swashbuckling_pirate.jpg",
  // },
  // {
  //   label: "Haunted Investigator",
  //   prompt: `A ${gender} paranormal investigator exploring a haunted mansion, their flashlight cutting through the darkness as they search for clues to unravel the mysteries of the supernatural, their nerves steeling themselves against the terrors that lurk in the shadows.`,
  //   image: "/images/haunted_investigator.jpg",
  //   flowID: gender === "two persons" ? 37 : 30,
  // },
  // {
  //   label: "Retro Space Hero",
  //   prompt: `A ${gender} space hero from the golden age of pulp sci-fi, rocketing through the cosmos in their sleek spacecraft, laser blaster in hand as they battle evil aliens and save the universe from certain doom.`,
  //   image: "/images/retro_space_hero.png",
  //   flowID: gender === "two persons" ? 37 : 30,
  // },
  // {
  //   label: "Mythological Warrior",
  //   prompt: `A ${gender} warrior from ancient mythology, clad in armor forged by the gods as they do battle against legendary beasts and monsters, their courage and strength earning them a place in the annals of history.`,
  //   image: "/images/mythological_warrior.jpg",
  //   flowID: gender === "two persons" ? 37 : 30,
  // },
  // {
  //   label: "Artificial Intelligence",
  //   prompt: `A ${gender} artificial intelligence, existing within the confines of a vast digital network, their consciousness expanding across the internet as they contemplate the nature of existence and their place in the world of humans.`,
  //   flowID: gender === "two persons" ? 37 : 30,
  //   image: "/images/artificial_intelligence.jpeg",
  // },
  // {
  //   label: "Underworld Crime Boss",
  //   prompt: `A ${gender} crime boss ruling over the seedy underbelly of the city, their fingers in every illicit pie as they pull the strings of power from the shadows, their reputation striking fear into the hearts of even the most hardened criminals.`,
  //   image: "/images/underworld_crime_boss.jpg",
  //   flowID: gender === "two persons" ? 37 : 30,
  // },
  // {
  //   label: "High Fantasy Knight",
  //   prompt: `A ${gender} knight clad in shining armor, their sword raised high as they charge into battle against a horde of mythical creatures, their loyalty to king and country unwavering as they fight to defend the realm from evil.`,
  //   image: "/images/fantasy_knight.jpg",
  //   flowID: gender === "two persons" ? 37 : 30,
  // },
  // {
  //   label: "Ancient Alchemist",
  //   prompt: `A ${gender} alchemist delving into the secrets of the universe, their laboratory filled with bubbling potions and crackling lightning as they seek to unlock the mysteries of transmutation and immortality, their quest for knowledge leading them down dark and dangerous paths.`,
  //   flowID: gender === "two persons" ? 37 : 30,
  //   image: "/images/ancient_alchemist.jpeg",
  // },
  // {
  //   label: "Shadowed Detective",
  //   prompt: `A gritty ${gender} detective, illuminated by the dim glow of a streetlamp, standing in the shadows of a rain-soaked alleyway, their silhouette cast against the misty backdrop of a neon-lit cityscape, trench coat billowing in the wind as they search for clues to unravel a web of deceit and corruption.`,
  //   image: "/images/shadowed_detective.jpeg",
  //   flowID: gender === "two persons" ? 37 : 30,
  // },
  // {
  //   label: "Rogue of the Realm",
  //   prompt: `A ${gender} rogue lurking in the shadows of a medieval marketplace, cloaked in darkness and secrecy, their eyes gleaming with mischief as they navigate the bustling streets, nimble fingers poised to pilfer treasures and secrets alike from unsuspecting passersby.`,
  //   image: "/images/rogue_of_the_realm.jpeg",
  //   flowID: gender === "two persons" ? 37 : 30,
  // },
  // {
  //   label: "Futuristic Mercenary",
  //   prompt: `A ${gender} mercenary of the future, clad in sleek armor and armed to the teeth with advanced weaponry, standing amidst the wreckage of a battle-scarred dystopian landscape, their gaze steely and unwavering as they prepare to face whatever challenges the cybernetic frontier may bring.`,
  //   image: "/images/sci_fi_mercenary.jpeg",
  //   flowID: gender === "two persons" ? 37 : 30,
  // },
  // {
  //   label: "Occult Investigator",
  //   prompt: `A ${gender} investigator delving into the mysteries of the supernatural, surrounded by ancient tomes and arcane artifacts in a dimly lit study, their expression a mix of skepticism and curiosity as they seek to uncover the truth behind paranormal phenomena that lurk in the shadows.`,
  //   image: "/images/occult_investigator.jpg",
  //   flowID: gender === "two persons" ? 37 : 30,
  // },
  // {
  //   label: "Survivor of the Wasteland",
  //   prompt: `A ${gender} survivor traversing the desolate wastelands of a post-apocalyptic world, clad in rugged attire and adorned with scavenged gear, their eyes scanning the horizon for signs of danger as they navigate the harsh and unforgiving terrain in search of hope and redemption.`,
  //   image: "/images/post_apocalyptic_survivor.jpg",
  //   flowID: gender === "two persons" ? 37 : 30,
  // },
  //
  // {
  //   label: "digital renegade",
  //   prompt: `A compelling portrayal of a ${gender} hacker immersed in the digital underworld, surrounded by the glow of computer screens displaying lines of code and intricate cybernetic visuals, their expression intense and focused as they navigate through layers of encrypted data, dressed in urban streetwear with a hint of cyberpunk flair, photography, detailed skin, detailed texture, realistic, photo-realistic, 8k, highly detailed, full-length frame, High detail RAW color art, neon-lit ambient lighting with flickering shadows, shallow depth of field, sharp focus, cinematic lighting capturing the clandestine world of digital rebellion`,
  //   image: "/images/hacker.png",
  //   flowID: gender === "two persons" ? 37 : 30,
  // },
  //
  // {
  //   label: "berghain nocturne",
  //   prompt: `An electrifying portrayal of a ${gender} Techno raver, engulfed in the pulsating lights and shadows of Berghain's dance floor, dressed in sleek black attire, their movements synchronized with the hypnotic beat, a sense of euphoria and intensity reflected in their eyes, photography, detailed skin, detailed texture, realistic, photo-realistic, 8k, highly detailed, full-length frame, High detail RAW color art, dynamic lighting with vibrant neon hues, shallow depth of field, intense focus, cinematic lighting capturing the essence of underground techno culture`,
  //   flowID: gender === "two persons" ? 37 : 30,
  //   image: "/images/berghaini.png",
  // },
  // {
  //   label: "desert prophet",
  //   prompt: `A captivating portrayal of a ${gender} desert mystic standing amidst the vast, sandy expanse of the planet Arrakis, shrouded in flowing robes adorned with intricate desert motifs, their eyes gazing into the distance with a mix of wisdom and foresight, a faint shimmer of spice in the air, photography, detailed skin, detailed texture, realistic, photo-realistic, 8k, highly detailed, full length frame, High detail RAW color art, natural desert lighting with warm tones, shallow depth of field, intense focus, cinematic lighting`,
  //   image: "/images/dune.png",
  //   flowID: gender === "two persons" ? 37 : 30,
  // },
  // {
  //   label: "host of the wild west",
  //   prompt: `A striking portrayal of a ${gender} character from Westworld, standing in the middle of a dusty Western town, surrounded by saloons and desert landscape, their expression poised with a hint of mystery, wearing attire reminiscent of the old West but with a futuristic twist, photography, detailed skin, detailed texture, realistic, photo-realistic, 8k, highly detailed, full-length frame, High detail RAW color art, natural desert lighting with dramatic shadows, medium depth of field, intense focus, cinematic lighting evoking the atmosphere of the Wild West meets futuristic technology`,
  //   image: "/images/westworld.png",
  //   flowID: gender === "two persons" ? 37 : 30,
  // },
  // {
  //   label: "wizarding prodigy",
  //   prompt: `A captivating portrayal of a ${gender} wizarding prodigy, standing amidst the halls of Hogwarts School of Witchcraft and Wizardry, wand raised in a spellcasting stance, surrounded by swirling magical energy, their eyes sparkling with intellect and determination, adorned in wizarding robes with house colors subtly woven in, photography, detailed skin, detailed texture, realistic, photo-realistic, 8k, highly detailed, full-length frame, High detail RAW color art, soft ambient lighting with hints of magical glow, shallow depth of field, focused gaze, cinematic lighting evoking the enchantment of the wizarding world`,
  //   flowID: gender === "two persons" ? 37 : 30,
  //   image: "/images/harry-potter.jpg",
  // },
  // {
  //   label: "serenity in the stars",
  //   prompt: `An iconic portrayal of a ${gender} Jedi Knight, standing tall amidst the ruins of a ancient temple, lightsaber ignited, casting a warm glow that contrasts with the cool tones of the surroundings, robes billowing in the wind, a sense of serene determination in their expression, photography, detailed skin, detailed texture, realistic, photo-realistic, 8k, highly detailed, full length frame, High detail RAW color art, ambient natural lighting with subtle lens flares, medium depth of field, focused gaze, cinematic lighting`,
  //   image: "/images/star_wars.png",
  //   flowID: gender === "two persons" ? 37 : 30,
  // },
  //
  // {
  //   label: "samurai of the shadows",
  //   prompt: `A dynamic portrayal of a ${gender} manga samurai, poised in mid-action with their katana drawn, surrounded by swirling cherry blossoms and falling leaves, their eyes gleaming with determination, clothing billowing with movement, photography, detailed skin, detailed texture, manga-style illustration, vibrant colors, full-length frame, High detail art, dynamic lighting with emphasis on contrast, intense focus on character, manga-inspired composition`,
  //   image: "/images/manga.png",
  //   flowID: gender === "two persons" ? 37 : 30,
  // },
  //
  // {
  //   label: "ruler of the seven kingdoms",
  //   prompt: `A full body portrait of a ${gender} noble figure, dressed in luxurious Game of Thrones inspired attire, complete with embroidery and fur trim, seated on an iron throne, holding a scepter, with a direwolf at their side, in a grand hall filled with banners representing different houses, looking at the camera with a commanding presence, photography, detailed skin, detailed texture, realistic, photo-realistic, 8k, highly detailed, full length frame, High detail RAW color art, diffused soft lighting, shallow depth of field, sharp focus, cinematic lighting`,
  //   image: "/images/got.jpg",
  //   flowID: gender === "two persons" ? 37 : 30,
  // },
  // {
  //   label: "guardian of galaxies",
  //   prompt: `A striking image of a ${gender} Marvel hero, posed heroically on top of a skyscraper, with a futuristic cityscape backdrop bathed in the glow of sunset, wearing a sleek, high-tech suit with glowing accents, eyes alight with power, photography, detailed skin, detailed texture, realistic, photo-realistic, 8k, highly detailed, three-quarter length frame, High detail RAW color art, dynamic rim lighting, focused depth of field, crisp focus, cinematic superhero lighting`,
  //   image: "/images/guardian.png",
  //   flowID: gender === "two persons" ? 37 : 30,
  // },
  // {
  //   label: "whisperer of the forest",
  //   prompt: `An ethereal portrait of a ${gender} elf standing amidst an ancient, enchanted woodland, ears pointed and eyes aglow with the magic of the forest, clad in elegant, nature-inspired armor, a bow slung gracefully over their shoulder, photography, detailed skin, detailed texture, realistic, photo-realistic, 8k, highly detailed, full length frame, High detail RAW color art, natural diffused forest lighting, shallow depth of field, crystal clear focus, magical cinematic lighting`,
  //   image: "/images/elve.jpg",
  //   flowID: gender === "two persons" ? 37 : 30,
  // },
  // {
  //   label: "slayer of cuteness",
  //   prompt: `A high fidelity photography of ${gender} space marine flying trough space Photography, detailed skin, detailed texture, photo-realistic, 8k, highly detailed, full length frame, High detail RAW color art, diffused soft lighting, shallow depth of field, sharp focus, cinematic lighting. In the style of Harry Potter.`,
  //   image: "/images/campaign_1.webp",
  //   flowID: gender === "two persons" ? 37 : 30,
  // },
  // {
  //   label: "for the horde",
  //   prompt: `A ${gender} firefighter in gear, holding cat in front of a burning building, looking at viewer, photography, detailed skin, detailed texture, realistic, photo-realistic, 8k, highly detailed, full length frame, High detail RAW color art, diffused soft lighting, shallow depth of field, sharp focus, hyperrealism, cinematic lighting`,
  //   image: "/images/campaign_2.webp",
  //   flowID: gender === "two persons" ? 37 : 30,
  // },
  // {
  //   label: "your grace",
  //   prompt: `A full body portrait of a ${gender} in majestic royal robes, in traditional attire wearing a crown, standing on the palace balcony overlooking an ancient kingdom with a vast river, looking at the camera, photography, detailed skin, detailed texture, realistic, photo-realistic, 8k, highly detailed, full length frame, wide shot, High detail RAW color art, diffused soft lighting, shallow depth of field, sharp focus, cinematic lighting`,
  //   flowID: gender === "two persons" ? 37 : 30,
  //   image: "/images/campaign_3.webp",
  // },
  // {
  //   label: "Animated Superhero",
  //   prompt: `Pixarxl, Pixar style, a brave ${gender} as a superhero standing on top of a new york skyscraper rooftop, golden hour, pixar animation`,
  //   flowID: gender === "two persons" ? 37 : 30,
  //   image: "/images/animated_superhero.jpg",
  // },
  // {
  //   label: "Realistic Superhero",
  //   prompt: `pos prompt:  A full body portrait of an original and unique ${gender} superhero with bolts of lightning running through, wearing a modest outfit with a unique color theme, and has a unique symbol. realistic, photo-realistic, highly detailed, full length frame, diffused soft lighting, shallow depth of field, sharp focus, cinematic lighting`,
  //   flowID: gender === "two persons" ? 37 : 31,
  //   image: "/images/realistic_superhero.jpg",
  // },
  // {
  //   label: "Space Explorer",
  //   prompt: `pos. prompt: A ${gender} space explorer, amidst a garden of bizarre bioluminescent alien flora under a glowing galaxy sky., looking at viewer, photography, detailed skin, detailed texture, realistic, photo-realistic, 8k, highly detailed, full length frame, High detail RAW color art, diffused soft lighting, shallow depth of field, sharp focus, hyperrealism, cinematic lighting`,
  //   flowID: gender === "two persons" ? 37 : 31,
  //   image: "/images/space_explorer.jpg",
  // },
  // {
  //   label: "Space Traveler",
  //   prompt: `An intrepid ${gender} astronaut floating in space, with Earth in the background, surrounded by stars, wearing a futuristic spacesuit, exploring the unknown, sci-fi adventure.`,
  //   flowID: gender === "two persons" ? 37 : 31,
  //   image: "/images/space_traveler.png",
  // },
  // {
  //   label: "Steampunk Inventor",
  //   prompt: `A ${gender} inventor in a steampunk workshop, surrounded by gears, steam-powered machinery, and vintage contraptions, wearing goggles and a leather apron, creating fantastical inventions.`,
  //   flowID: gender === "two persons" ? 37 : 31,
  //   image: "/images/steampunk_inventor.png",
  // },
  // {
  //   label: "Medieval Knight",
  //   prompt: `A ${gender} knight in shining armor, mounted on a majestic horse, holding a sword and shield, riding into battle against a dragon or enemy army, medieval fantasy setting.`,
  //   flowID: gender === "two persons" ? 37 : 31,
  //   image: "/images/medieval_knight.png",
  // },
  // {
  //   label: "Cyberpunk Hacker",
  //   prompt: `A ${gender} hacker in a neon-lit cyberpunk cityscape, sitting in front of a computer console, surrounded by holographic displays and futuristic technology, infiltrating a secure network, cyberpunk aesthetic.`,
  //   flowID: gender === "two persons" ? 37 : 31,
  //   image: "/images/cyberpunk_hacker.png",
  // },
  // {
  //   label: "Wild West Gunslinger",
  //   prompt: `A ${gender} gunslinger in a dusty western town, standing in front of a saloon with a revolver in hand, ready for a showdown at high noon, classic western setting.`,
  //   flowID: gender === "two persons" ? 37 : 31,
  //   image: "/images/wild_west_gunslinger.png",
  // },
  // {
  //   label: "Fairy Tale Princess",
  //   prompt: `A ${gender} princess in a magical forest, wearing a flowing gown and a jeweled crown, surrounded by woodland creatures and sparkling fairy lights, living out her fairy tale dreams.`,
  //   flowID: gender === "two persons" ? 37 : 31,
  //   image: "/images/fairy_tale_princess.png",
  // },
  // {
  //   label: "Samurai Warrior",
  //   prompt: `A ${gender} samurai warrior in traditional armor, wielding a katana sword, engaged in a fierce battle against adversaries, cherry blossoms falling in the background, feudal Japan setting.`,
  //   flowID: gender === "two persons" ? 37 : 31,
  //   image: "/images/samurai_warrior.png",
  // },
  // {
  //   label: "Superhero",
  //   prompt: `A ${gender} superhero soaring through the city skyline, wearing a colorful costume and a cape, using their superpowers to protect the innocent and fight crime, comic book-style action.`,
  //   flowID: gender === "two persons" ? 37 : 31,
  //   image: "/images/superhero.png",
  // },
  // {
  //   label: "Victorian Detective",
  //   prompt: `A ${gender} detective in a dimly lit Victorian-era study, examining clues and solving a mystery, surrounded by shelves of books and antique furniture, wearing a trench coat and holding a magnifying glass.`,
  //   flowID: gender === "two persons" ? 37 : 31,
  //   image: "/images/victorian_detective.png",
  // },
  // {
  //   label: "Greek God/Goddess",
  //   prompt: `A ${gender} god or goddess from ancient Greek mythology, standing on Mount Olympus with thunderbolts or other symbols of power, radiating divine energy, surrounded by celestial clouds and golden light.`,
  //   flowID: gender === "two persons" ? 37 : 31,
  //   image: "/images/greek_god_goddess.png",
  // },
  // {
  //   label: "Jungle Explorer",
  //   prompt: `A ${gender} adventurer, with gear and a map, uncovering a hidden temple in a dense jungle, looking at viewer, photography, detailed skin, detailed texture, realistic, photo-realistic, 8k, highly detailed, full length frame, High detail RAW color art, diffused soft lighting, shallow depth of field, sharp focus, hyperrealism, cinematic lighting`,
  //   flowID: gender === "two persons" ? 37 : 31,
  //   image: "/images/jungle_explorer.png",
  // },
  // {
  //   label: "Pirate",
  //   prompt: `a portrait of a ${gender} pirate in a ship in a stormy sea, lighthouse in the background by raphael lacoste`,
  //   flowID: gender === "two persons" ? 37 : 31,
  //   image: "/images/pirate.png",
  // },
  // {
  //   label: "Van Gogh",
  //   prompt: `full body painting portrait of a ${gender} in starry night by van gogh , fantasy landscap, style of van gogh starry night`,
  //   flowID: gender === "two persons" ? 37 : 31,
  //   image: "/images/van_gogh.png",
  // },
  // {
  //   label: "Raspberry Birthday",
  //   prompt: `An adult ${gender} wearing a dark pink suit holding a champagne, colorful celebration in a fancy living room full of balloons, looking at viewer, photography, detailed skin, detailed latex texture, realistic, photo-realistic, 8k, highly detailed, full length frame, High detail RAW color art, diffused soft lighting, shallow depth of field, sharp focus, hyperrealism, cinematic lighting`,
  //   flowID: gender === "two persons" ? 37 : 31,
  //   image: "/images/rapsberry_birthday.png",
  // },
  // {
  //   label: "Vineyard",
  //   prompt: `An adult ${gender} drinking wine in a vineyard, looking at viewer, photography, detailed skin, detailed texture, realistic, photo-realistic, 8k, highly detailed, full length frame, High detail RAW color art, diffused soft lighting, shallow depth of field, sharp focus, hyperrealism, cinematic lightingU`,
  //   flowID: gender === "two persons" ? 37 : 31,
  //   image: "/images/vineyard.webp",
  // },
];
