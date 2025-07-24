import type { GalleryDto } from "../dtos/gallery.dto";

export const galleries: GalleryDto[] = [
  {
    title: "Nature's Beauty",
    description:
      "A calming journey through forests, mountains, oceans, and other wonders of the natural world.",
    coverImage: {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      alt: "Foggy pine forest at sunrise",
      title: "Mystic Forest",
      description: "A foggy pine forest captured in early morning light.",
    },
    images: [
      {
        url: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=80",
        alt: "Snow-capped mountain peaks",
        title: "Snowy Peaks",
        description:
          "Majestic mountains blanketed in snow under a clear blue sky.",
      },
      {
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
        alt: "Sunset over ocean waves",
        title: "Ocean Sunset",
        description:
          "Golden sun dipping below the horizon with waves crashing onshore.",
      },
      {
        url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
        alt: "Waterfall in the forest",
        title: "Forest Falls",
        description:
          "Peaceful waterfall cascading through mossy rocks and trees.",
      },
      {
        url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80",
        alt: "Rolling desert dunes",
        title: "Desert Dunes",
        description:
          "Golden dunes shaped by the wind in a vast desert landscape.",
      },
      {
        url: "https://images.unsplash.com/photo-1445820132075-71c8b6bd1b80?auto=format&fit=crop&w=1200&q=80",
        alt: "Lake reflecting mountains and sky",
        title: "Mirror Lake",
        description:
          "Crystal-clear alpine lake reflecting the sky and surrounding peaks.",
      },
    ],
  },
  {
    title: "Wild Animals",
    description:
      "A close-up look at wildlife from across the globe — fierce, majestic, and free.",
    coverImage: {
      url: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1200&q=80",
      alt: "Lion staring at camera",
      title: "King of the Jungle",
      description: "A powerful lion with piercing eyes resting in tall grass.",
    },
    images: [
      {
        url: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1200&q=80",
        alt: "Elephant walking in field",
        title: "Gentle Giant",
        description:
          "An elephant peacefully walking through a savanna at dusk.",
      },
      {
        url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
        alt: "Wolf in snowy forest",
        title: "Lone Wolf",
        description: "A gray wolf alert and focused in a snow-covered forest.",
      },
      {
        url: "https://images.unsplash.com/photo-1568572933382-74d440642117?auto=format&fit=crop&w=1200&q=80",
        alt: "Colorful parrot perched",
        title: "Tropical Colors",
        description:
          "A brilliantly colored parrot perched on a branch in the rainforest.",
      },
      {
        url: "https://images.unsplash.com/photo-1610878180933-429dddf75e30?auto=format&fit=crop&w=1200&q=80",
        alt: "Cheetah sitting in grass",
        title: "Cheetah Focus",
        description:
          "A watchful cheetah sitting in dry grass, ready to pounce.",
      },
      {
        url: "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?auto=format&fit=crop&w=1200&q=80",
        alt: "Close-up of a curious fox",
        title: "Forest Fox",
        description:
          "A red fox emerging from the woods, inquisitive and alert.",
      },
    ],
  },
  {
    title: "Seas and Oceans",
    description:
      "Explore the vast beauty of the world's seas and oceans — waves, marine life, and coastal vistas.",
    coverImage: {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      alt: "Calm sea with distant horizon at sunset",
      title: "Tranquil Horizon",
      description:
        "A peaceful view of the calm sea stretching into the horizon during sunset.",
    },
    images: [
      {
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
        alt: "Ocean waves crashing on shore",
        title: "Rolling Waves",
        description:
          "Powerful waves breaking on a sandy beach under clear skies.",
      },
      {
        url: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=80",
        alt: "Coral reef underwater",
        title: "Underwater Reef",
        description:
          "A vibrant coral reef teeming with colorful fish beneath the ocean surface.",
      },
      {
        url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
        alt: "Small boat floating on clear blue sea",
        title: "Serene Sailing",
        description:
          "A small boat gently floating on crystal-clear turquoise waters.",
      },
      {
        url: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1200&q=80",
        alt: "Sunset over calm ocean",
        title: "Golden Sunset",
        description:
          "The sun sets over a calm ocean, casting golden light over the water.",
      },
      {
        url: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
        alt: "Seagulls flying over the sea",
        title: "Seagulls in Flight",
        description: "Seagulls soaring above the ocean waves on a bright day.",
      },
    ],
  },
  {
    title: "Cities Around the World",
    description:
      "A vibrant collection of skylines, architecture, and urban moments from major cities worldwide.",
    coverImage: {
      url: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1200&q=80",
      alt: "New York City skyline at dusk",
      title: "New York Skyline",
      description:
        "The iconic Manhattan skyline with sunset reflections on glass towers.",
    },
    images: [
      {
        url: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80",
        alt: "Tokyo at night with neon lights",
        title: "Tokyo Lights",
        description:
          "Tokyo’s Shinjuku district glowing with vibrant neon signs and energy.",
      },
      {
        url: "https://images.unsplash.com/photo-1505765050516-f72dcac9c60b?auto=format&fit=crop&w=1200&q=80",
        alt: "Paris skyline with Eiffel Tower",
        title: "Paris From Above",
        description:
          "Classic view of Paris rooftops with the Eiffel Tower standing tall.",
      },
      {
        url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
        alt: "Dubai skyline with Burj Khalifa",
        title: "Dubai Skyline",
        description:
          "Dubai’s dramatic skyline with the Burj Khalifa piercing the clouds.",
      },
      {
        url: "https://images.unsplash.com/photo-1534237710431-e2fc698436a1?auto=format&fit=crop&w=1200&q=80",
        alt: "London Tower Bridge",
        title: "London Bridge",
        description:
          "The iconic Tower Bridge spanning the Thames River at twilight.",
      },
      {
        url: "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?auto=format&fit=crop&w=1200&q=80",
        alt: "Aerial view of Rio de Janeiro",
        title: "Rio de Janeiro",
        description:
          "A breathtaking aerial view of Rio, with Christ the Redeemer overlooking the city.",
      },
    ],
  },
];
