export interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  category: string;
  image: string;
  badge?: string;
  featured?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

export const initialProducts: Product[] = [
  { id: "1", title: "Servers", description: "Enterprise rack, tower, and blade servers from HP, Dell, IBM.", price: "From ₦2,500,000", category: "Hardware", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80", badge: "Popular", featured: true },
  { id: "2", title: "Desktops", description: "Business-class desktop computers for office productivity.", price: "From ₦350,000", category: "Hardware", image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=600&q=80" },
  { id: "3", title: "Laptops", description: "Professional laptops and notebooks for mobile workforce.", price: "From ₦450,000", category: "Hardware", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80", badge: "Best Seller", featured: true },
  { id: "4", title: "Printers", description: "Laser, inkjet, and multifunction printers for all environments.", price: "From ₦120,000", category: "Peripherals", image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600&q=80" },
  { id: "5", title: "UPS / Inverters", description: "Uninterruptible power supply and inverter systems.", price: "From ₦85,000", category: "Power", image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80" },
  { id: "6", title: "Scanners", description: "Document and flatbed scanners for digitization.", price: "From ₦75,000", category: "Peripherals", image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600&q=80" },
  { id: "7", title: "Photocopiers", description: "High-volume photocopiers and multifunction devices.", price: "From ₦350,000", category: "Peripherals", image: "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?w=600&q=80" },
  { id: "8", title: "ID Card Printers", description: "Professional ID card printing solutions.", price: "From ₦250,000", category: "Peripherals", image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=600&q=80" },
  { id: "9", title: "Accessories", description: "Cables, peripherals, and computing accessories.", price: "From ₦5,000", category: "Accessories", image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=600&q=80" },
  { id: "10", title: "POS Terminals", description: "Point-of-sale terminals for retail and hospitality.", price: "From ₦150,000", category: "Hardware", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80", badge: "New" },
];

export const initialBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Cloud Computing in Nigeria",
    excerpt: "How cloud adoption is transforming business operations across the country.",
    content: "Cloud computing is rapidly becoming the backbone of modern business infrastructure in Nigeria...",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
    date: "2026-03-15",
    author: "Mr. Ayoola Akanbi",
    category: "Cloud",
  },
  {
    id: "2",
    title: "Cybersecurity Best Practices for SMBs",
    excerpt: "Essential security measures every small business should implement.",
    content: "In today's digital landscape, cybersecurity is not optional...",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=600&q=80",
    date: "2026-03-10",
    author: "Mrs. Grace Fapohunda",
    category: "Security",
  },
  {
    id: "3",
    title: "5G and Enterprise Networking",
    excerpt: "How 5G technology is reshaping enterprise connectivity.",
    content: "The rollout of 5G networks presents unprecedented opportunities...",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80",
    date: "2026-03-05",
    author: "Mr. Tunde Oyefeso",
    category: "Networking",
  },
];
