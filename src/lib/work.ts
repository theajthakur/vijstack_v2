import { MapPin, MessagesSquare, type LucideIcon } from "lucide-react";

export type Project = {
  slug: string;
  name: string;
  category: string;
  country?: string;
  summary: string;
  detail: string;
  challenge: string;
  solution: string;
  features: string[];
  stack: string[];
  services: string[]; // service slugs
  review?: string; // reviewer name from reviews.ts
  logo?: { src: string; width: number; height: number; dark?: boolean };
  icon?: LucideIcon;
  /** Panel colour behind the logo in cards */
  tone: "white" | "ink" | "gold" | "teal";
};

// Projects from the VijStack portfolio
export const projects: Project[] = [
  {
    slug: "goldenkeyz-dashboard",
    name: "GoldenKeyz Dashboard",
    category: "Real estate CRM",
    country: "Pakistan",
    summary: "Lead management with drag-and-drop Kanban stages, admin and sales roles, CSV import and custom authentication.",
    detail:
      "GoldenKeyz Dashboard is a CRM-style platform built for a Pakistan-based real estate company to run its sales operations. Admins and salespeople share access to leads, tasks and properties, with every stage of a deal tracked on one board.",
    challenge: "Managing complex lead workflows, role-based access and real-time updates without relying on third-party SaaS tools.",
    solution:
      "A fully custom dashboard with drag-and-drop Kanban logic, scalable CRUD operations, CSV import automation, a secure in-house authentication system and email workflows powered by Resend.",
    features: ["Drag-and-drop Kanban pipeline", "Admin and salesperson roles", "Bulk CSV lead import", "Table and board views", "Custom authentication", "Automated emails"],
    stack: ["Next.js", "Tailwind CSS", "shadcn/ui", "Framer Motion", "Resend"],
    services: ["admin-panels", "custom-websites"],
    logo: { src: "/work/golden_keyz.png", width: 360, height: 213, dark: true },
    tone: "teal",
  },
  {
    slug: "personalpeak360",
    name: "PersonalPeak360",
    category: "Fitness SaaS platform",
    country: "Germany",
    summary: "Gym platform for users, trainers and admins with a 100,000+ item nutrition database, scheduling and built-in chat.",
    detail:
      "PersonalPeak360 is a complete gym ecosystem built for a Germany-based client. Members, trainers and super admins each get their own dashboard, backed by a nutrition database of more than 100,000 foods.",
    challenge: "Managing complex user roles, large-scale nutrition data and real-time interactions without relying on modern frameworks.",
    solution:
      "A modular core PHP system with optimised database queries, plus custom-built chat and appointment scheduling written from scratch with plain fetch APIs, with no third-party services.",
    features: ["100,000+ item nutrition database", "Calorie and diet tracking", "BMI and fitness calculators", "Trainer chat", "Appointment scheduling", "User, trainer and super admin roles"],
    stack: ["PHP", "jQuery", "Bootstrap"],
    services: ["app-development", "admin-panels", "custom-websites"],
    review: "Samuel Hufnagel",
    logo: { src: "/work/fitness-360.png", width: 360, height: 306 },
    tone: "white",
  },
  {
    slug: "deutschemall",
    name: "DeutscheMall",
    category: "E-commerce platform",
    country: "Germany",
    summary: "A fast MERN-stack store for a German startup, with advanced product search and Redux state management.",
    detail:
      "DeutscheMall is an e-commerce platform for a German startup, built on the MERN stack with a focus on speed and a clean shopping experience.",
    challenge: "Building a fast, scalable e-commerce experience with efficient state management and quick product search.",
    solution: "Optimised APIs, structured state handling with Redux and a responsive Tailwind CSS interface for smooth browsing on any device.",
    features: ["Advanced product search", "Redux state management", "Responsive Tailwind storefront", "Optimised APIs"],
    stack: ["MongoDB", "Express", "React", "Node.js", "Redux", "Tailwind CSS"],
    services: ["ecommerce", "custom-websites"],
    logo: { src: "/work/deutsche-mall.png", width: 309, height: 220 },
    tone: "gold",
  },
  {
    slug: "urban-escape",
    name: "Urban Escape",
    category: "Location-based game",
    summary: "A real-world chase game with live location tracking, route-based movement and an admin-controlled reward system.",
    detail:
      "Urban Escape is a Pokémon Go-inspired game where players track and capture moving characters placed on real-world coordinates.",
    challenge: "Implementing real-time location tracking and dynamic character movement without a game engine.",
    solution: "Custom logic for coordinate tracking, route mapping and reward distribution on a lightweight Node.js and MongoDB backend.",
    features: ["Live location tracking", "Route-based character movement", "Admin-controlled rewards"],
    stack: ["Node.js", "Express", "MongoDB"],
    services: ["app-development"],
    logo: { src: "/work/urban_escape.png", width: 360, height: 242 },
    tone: "ink",
  },
  {
    slug: "realestate-pro",
    name: "RealEstate Pro",
    category: "Map-based property search",
    country: "Pakistan",
    summary: "Explore plots on a map, search by coordinates and see pricing, area and surroundings with precise geo logic.",
    detail:
      "Built for a Lahore-based client, RealEstate Pro lets buyers explore properties on a map, search plots by coordinates and see pricing, area and nearby details.",
    challenge: "Handling accurate geo-based queries and a responsive map experience without heavy mapping libraries.",
    solution: "Custom geo-coordinate calculations and optimised search algorithms for precise plot detection and filtering.",
    features: ["Map-based plot browsing", "Search by coordinates", "Pricing and area details", "Surroundings insights"],
    stack: ["PHP", "jQuery", "Custom geo search"],
    services: ["custom-websites", "lead-generation"],
    review: "M. Hanzla",
    icon: MapPin,
    tone: "gold",
  },
  {
    slug: "chat-replica-system",
    name: "Chat Replica System",
    category: "WhatsApp-style chat viewer",
    country: "Spain",
    summary: "Upload an exported chat and browse it in a faithful WhatsApp-style interface, including group chats.",
    detail:
      "Developed for a Spain-based client, this tool recreates the WhatsApp interface so users can upload exported chat files and read them in a fully interactive view.",
    challenge: "Parsing raw chat exports and recreating a pixel-perfect messaging interface with multiple participants.",
    solution: "A custom parser and rendering engine that maps chat data into a structured interface mirroring WhatsApp behaviour.",
    features: ["Chat export parsing", "Group chats and multiple users", "WhatsApp-style interface", "Fast rendering of long chats"],
    stack: ["JavaScript", "HTML", "CSS", "Custom parser"],
    services: ["custom-websites"],
    icon: MessagesSquare,
    tone: "white",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const projectsForService = (slug: string) => projects.filter((p) => p.services.includes(slug));
