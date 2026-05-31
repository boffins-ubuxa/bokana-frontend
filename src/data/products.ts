export type MediaType = 'image' | 'video';

export interface ProductMedia {
  type: MediaType;
  url: string;
  poster?: string; // For videos
}

export interface ProductVariant {
  color: string;
  colorCode: string; // Hex code for the swatch
  media: ProductMedia[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  features: string[];
  price?: number;
  category: string;
  media: ProductMedia[]; // Default media if no variants
  variants?: ProductVariant[];
}

export const productsCatalog: Product[] = [
  {
    id: "powerbank-10k",
    name: "Bokana Power Bank 10,000mAh",
    description: "Compact 10,000mAh powerbank perfect for daily commutes. Comes with attached cables and includes a flashlight.",
    features: ["10,000mAh Capacity", "Attached Cables", "Built-in Flashlight", "Ultra Portable"],
    category: "Power Banks",
    media: [
      { type: 'image', url: '/products/powerbank-10k-black.jpeg' }
    ],
    variants: [
      {
        color: "Midnight Black",
        colorCode: "#2A2E33",
        media: [
          { type: 'image', url: '/products/powerbank-10k-black.jpeg' }
        ]
      },
      {
        color: "Sunset Yellow",
        colorCode: "#FBBF24",
        media: [
          { type: 'image', url: '/products/powerbank-10k-yellow.jpeg' }
        ]
      },
      {
        color: "Soft White",
        colorCode: "#FDFBF7",
        media: [
          { type: 'image', url: '/products/powerbank-10k-white.jpeg' }
        ]
      },
      {
        color: "Sky Blue",
        colorCode: "#87CEEB",
        media: [
          { type: 'image', url: '/products/powerbank-10k-skyblue.jpeg' }
        ]
      }
    ]
  },
  {
    id: "powerbank-50k",
    name: "Bokana Power Bank 50,000mAh",
    description: "Massive 50,000mAh power station for serious power needs. Keeps all your devices charged through long outages.",
    features: ["50,000mAh Capacity", "LED Display", "Multiple Outputs", "Fast Charging"],
    category: "Power Banks",
    media: [
      { type: 'image', url: '/products/powerbank-50k-all.jpeg' }
    ],
    variants: [
      {
        color: "Midnight Black",
        colorCode: "#2A2E33",
        media: [
          { type: 'image', url: '/products/powerbank-50k-black.jpeg' }
        ]
      },
      {
        color: "Power Red",
        colorCode: "#DC2626",
        media: [
          { type: 'image', url: '/products/powerbank-50k-red.jpeg' }
        ]
      },
      {
        color: "Soft White",
        colorCode: "#FDFBF7",
        media: [
          { type: 'image', url: '/products/powerbank-50k-white.jpeg' }
        ]
      },
      {
        color: "Sunset Yellow",
        colorCode: "#FBBF24",
        media: [
          { type: 'image', url: '/products/powerbank-50k-yellow.jpeg' }
        ]
      }
    ]
  },
  {
    id: "ac-coolant-fan",
    name: "AC Coolant Fan",
    description: "Powerful cooling fan with AC coolant technology for refreshing relief on hot days.",
    features: ["AC Coolant Tech", "Adjustable Speeds", "Quiet Operation"],
    category: "Fans",
    media: [
      { type: 'video', url: '/products/fan-video.mp4' },
      { type: 'video', url: '/products/fan video2.mp4' },
      { type: 'image', url: '/products/fan images.jpeg' }
    ]
  },
  {
    id: "mini-fan",
    name: "Mini Fan",
    description: "Rechargeable portable cooling fan with 3 speeds. Elegant and easy to carry in any bag.",
    features: ["Rechargeable", "3 Speed Settings", "Ultra Quiet"],
    category: "Fans",
    media: [
      { type: 'image', url: '/products/fan images.jpeg' }
    ]
  },
  {
    id: "neck-fan",
    name: "Neck Fan",
    description: "Wearable neck fan for hands-free cooling while working, exercising, or relaxing.",
    features: ["Hands-free Design", "360° Airflow", "Lightweight"],
    category: "Fans",
    media: [
      { type: 'video', url: '/products/neck fan video.mp4' }
    ]
  },
  {
    id: "jbl-speaker",
    name: "Speaker",
    description: "Premium portable Bluetooth speaker with deep bass and crystal clear sound.",
    features: ["Deep Bass", "Waterproof", "Long Battery Life"],
    category: "Audio",
    media: [
      { type: 'image', url: '/products/jbl-speaker.jpg' }
    ]
  },
  {
    id: "wrist-sphygmomanometer",
    name: "Wrist Electronic Sphygmomanometer",
    description: "Monitor your health with precision. This wrist electronic blood pressure monitor provides fast, accurate readings with an easy-to-read digital screen.",
    features: ["High Accuracy", "Wrist Cuff Design", "One-Touch Operation", "LCD Digital Display"],
    category: "Health",
    media: [
      { type: 'video', url: '/products/wrist-sphygmomanometer.mp4' }
    ]
  },
  {
    id: "perk-earbud",
    name: "Perk Earbuds",
    description: "Stylish wireless earbuds with active noise cancellation and a comfortable fit.",
    features: ["Active Noise Cancellation", "Touch Controls", "Comfort Fit"],
    category: "Audio",
    media: [
      { type: 'image', url: '/products/perk ear bur.jpeg' },
      { type: 'video', url: '/products/video earphone.mp4' }
    ]
  },
  {
    id: "selfie-light",
    name: "Selfie Light",
    description: "Clip-on ring light for smartphones to give you perfect, soft lighting anywhere.",
    features: ["Adjustable Warmth", "Rechargeable", "Universal Clip"],
    category: "Accessories",
    media: [
      { type: 'image', url: '/products/selfie-light.jpg' }
    ]
  },
  {
    id: "ai-smart-glasses",
    name: "AI Smart Glasses",
    description: "Stylish smart glasses with built-in audio and AI assistant integration.",
    features: ["Built-in Audio", "AI Assistant", "UV Protection"],
    category: "Accessories",
    media: [
      { type: 'video', url: '/products/glasses-video.mp4' }
    ]
  },
  {
    id: "custom-birthday-powerbank",
    name: "Custom Birthday Power Bank",
    description: "Celebrate milestones with a personalized power bank. Send us any photo or birthday greeting, and we will custom print it on the device. Perfect as a memorable, practical gift.",
    features: ["Personalized Photo Print", "High-Quality UV Printing", "Includes Gift Packaging", "10,000mAh Capacity"],
    category: "Customized",
    media: [
      { type: 'image', url: '/products/birthday powerbank.jpeg' }
    ]
  },
  {
    id: "custom-10k-powerbank",
    name: "Custom 10,000mAh Power Bank",
    description: "Personalize your everyday carry. Send us any image, artwork, or quote to custom print on this high-capacity 10,000mAh power bank.",
    features: ["Your Custom Image Print", "High-Quality UV Printing", "Fast Charging Support", "10,000mAh Capacity"],
    category: "Customized",
    media: [
      { type: 'image', url: '/products/customised 10,000amh.jpeg' }
    ]
  },
  {
    id: "custom-fan",
    name: "Customized Cooling Fan",
    description: "Keep cool in style with a customized fan. Personalize it with your favorite images, patterns, or name printed directly on the fan body.",
    features: ["Personalized Fan Case Print", "Rechargeable Battery", "Adjustable Airflow Speed"],
    category: "Customized",
    media: [
      { type: 'image', url: '/products/customised fan.jpeg' }
    ]
  },
  {
    id: "custom-video-powerbank",
    name: "Custom Video Power Bank 10,000mAh",
    description: "A custom power bank that speaks volumes. Upload your custom print and enjoy a built-in video display, perfect for interactive gifts or premium promotional displays.",
    features: ["Video & Photo Customization", "Built-in Video Playback", "10,000mAh Power Bank", "Perfect Keepsake or Favor"],
    category: "Customized",
    media: [
      { 
        type: 'video', 
        url: '/products/customised video power bank 10,000amh.mp4',
        poster: '/products/customised 10,000amh.jpeg'
      }
    ]
  }
];
