export type BlogPost = {
    slug: string;
    title: string;
    category: string;
    date: string;
    readTime: string;
    excerpt: string;
    image: string;
    author: string;
    content: string[];
};

export const blogPosts: BlogPost[] = [
    {
        slug: "how-to-choose-the-right-power-bank",
        title: "How to Choose the Right Power Bank for Your Daily Lifestyle",
        category: "Power Tips",
        date: "May 1, 2026",
        readTime: "4 min read",
        author: "Bokana Electronics",
        image: "/products/powerbank-10k-white.jpeg",
        excerpt:
            "Not every power bank is built for the same purpose. Learn how to choose the right capacity, ports, and features for work, travel, school, and everyday backup.",
        content: [
            "A good power bank should match how you live. Many people buy power banks by only looking at the capacity, but the best choice depends on your lifestyle, how often you move around, and the number of devices you need to charge.",
            "If you only need emergency backup for short outings, school, work, or daily movement, a compact 10,000mAh power bank can be a smart option. It is easier to carry, lighter in your bag, and useful when you need a quick backup during the day.",
            "For heavier users, business owners, frequent travelers, students who spend long hours outside, or people who charge multiple devices, a higher-capacity power bank such as 50,000mAh gives more confidence. It can support longer use and reduce the fear of running out of power.",
            "You should also consider the number of ports, whether it supports fast charging, whether it comes with attached cables, and whether it includes extra features like a flashlight. These small details can make a big difference in daily use.",
            "At Bokana Electronics, our goal is simple: to help customers choose dependable power solutions that fit real life, not just impressive numbers on paper.",
        ],
    },
    {
        slug: "why-safety-matters-when-buying-a-power-bank",
        title: "Why Safety Matters When Buying a Power Bank",
        category: "Product Education",
        date: "May 3, 2026",
        readTime: "5 min read",
        author: "Bokana Electronics",
        image: "/products/fan images.jpeg",
        excerpt:
            "A power bank is more than just capacity. Safety protection helps protect your phone, your battery, and your peace of mind.",
        content: [
            "When buying a power bank, many customers focus on capacity first. While capacity is important, safety should never be ignored. A power bank is not just a battery; it is a device that stores and transfers energy to your phone and other electronics.",
            "A reliable power bank should include protection against overcharging, overheating, overcurrent, and short circuits. These protections help reduce the risk of damage to your phone, earbuds, speaker, or any other device you connect to it.",
            "Poor-quality power banks may look attractive because of low prices, but they can disappoint quickly. They may charge slowly, drain faster than expected, heat up easily, or fail after a short period of use.",
            "This is why Bokana Electronics focuses on dependable products, honest performance, and customer confidence. We believe power should not only be available; it should also be safe and reliable.",
            "Before buying your next power bank, check beyond the capacity. Ask about safety features, warranty, product support, and build quality. A good power bank should protect both your device and your peace of mind.",
        ],
    },
    {
        slug: "portable-power-for-work-travel-school-and-business",
        title: "Portable Power for Work, Travel, School, and Business",
        category: "Lifestyle",
        date: "May 5, 2026",
        readTime: "3 min read",
        author: "Bokana Electronics",
        image: "/products/powerbank-50k-red.jpeg",
        excerpt:
            "From students to business owners, portable power has become part of everyday life. Here is why having a dependable backup matters.",
        content: [
            "Portable power has become part of modern life. Our phones, earbuds, speakers, mini fans, and smart devices help us work, communicate, learn, sell, travel, and stay entertained.",
            "For students, a power bank can keep a phone alive during long lectures or study sessions. For business owners, it can help keep communication open with customers. For travelers, it provides backup during long trips. For homes and offices, it provides comfort during power outages.",
            "The reality is that power interruptions can affect productivity. When your device goes off, work can stop, communication can break, and opportunities can be missed.",
            "A dependable power bank gives you more control. It helps you move freely, stay connected, and reduce the stress of low battery anxiety.",
            "At Bokana Electronics, we design our product selection around real-life use because portable power is no longer a luxury. It is a practical part of everyday living.",
        ],
    },
    {
        slug: "more-than-a-powerbank-the-bokana-promise",
        title: "More Than a Powerbank: The Bokana Promise",
        category: "Brand Story",
        date: "May 7, 2026",
        readTime: "4 min read",
        author: "Bokana Electronics",
        image: "/products/powerbank-50k-all.jpeg",
        excerpt:
            "Bokana Electronics is built on a legacy of trust, quality, and dependable service carried forward from Bokana West Africa Ltd.",
        content: [
            "Bokana Electronics was born from a legacy that began with Bokana West Africa Ltd., a company founded by a father who believed in reliability, service, and the power of building something that could serve people beyond one generation.",
            "When we lost him, we did not only inherit a name. We inherited a standard — a standard of doing business with integrity, choosing quality over shortcuts, and creating value that people can trust.",
            "Today, Bokana Electronics carries that vision forward by providing dependable power banks, mini fans, and everyday electronics designed for real life — for work, travel, school, business, outages, and the daily hustle.",
            "Bokana Power is our tribute to that legacy. Every product we offer is guided by the same principle our founder believed in: do it right, or don’t do it at all.",
            "We are not just selling devices. We are putting dependable energy in people’s hands — for their phones, their work, their movement, their comfort, and their peace of mind.",
            "Because at Bokana, power is more than convenience. It is trust. It is continuity. It is a promise.",
        ],
    },
];

export function getBlogPostBySlug(slug: string) {
    return blogPosts.find((post) => post.slug === slug);
}