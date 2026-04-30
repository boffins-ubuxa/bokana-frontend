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
      { type: 'image', url: '/products/powerbank-50k-black.jpeg' }
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
      { type: 'image', url: '/products/fan.jpeg' },
      { type: 'video', url: '/products/fan-video.mp4' }
    ]
  },
  {
    id: "mini-fan",
    name: "Mini Fan",
    description: "Rechargeable portable cooling fan with 3 speeds. Elegant and easy to carry in any bag.",
    features: ["Rechargeable", "3 Speed Settings", "Ultra Quiet"],
    category: "Fans",
    media: [
      { type: 'image', url: '/products/mini-fan.jpg' }
    ]
  },
  {
    id: "neck-fan",
    name: "Neck Fan",
    description: "Wearable neck fan for hands-free cooling while working, exercising, or relaxing.",
    features: ["Hands-free Design", "360° Airflow", "Lightweight"],
    category: "Fans",
    media: [
      { type: 'image', url: '/products/neck-fan.jpg' }
    ]
  },
  {
    id: "jbl-speaker",
    name: "JBL Speaker",
    description: "Premium portable Bluetooth speaker with deep bass and crystal clear sound.",
    features: ["Deep Bass", "Waterproof", "Long Battery Life"],
    category: "Audio",
    media: [
      { type: 'image', url: '/products/jbl-speaker.jpg' }
    ]
  },
  {
    id: "bluetooth-speaker",
    name: "Bluetooth Speaker",
    description: "Elegant portable speaker that blends perfectly into your home decor while delivering great sound.",
    features: ["Bluetooth 5.0", "Stereo Pairing", "Premium Finish"],
    category: "Audio",
    media: [
      { type: 'image', url: '/products/bluetooth-speaker.jpg' }
    ]
  },
  {
    id: "perk-earbud",
    name: "Perk Earbud",
    description: "Stylish wireless earbuds with active noise cancellation and a comfortable fit.",
    features: ["Active Noise Cancellation", "Touch Controls", "Comfort Fit"],
    category: "Audio",
    media: [
      { type: 'image', url: '/products/perk-earbud.jpeg' }
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
  }
];
