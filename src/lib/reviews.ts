// Client reviews (from the VijStack v2 site). Keep these in sync with your Google Business Profile.
export type Review = { quote: string; name: string; role: string; rating: number };

export const reviews: Review[] = [
  {
    name: "Samuel Hufnagel",
    role: "Fitness Platform Owner, Germany",
    quote: "The VijStack team built our complete fitness platform including calorie tracking, diet suggestions, workout planning, trainer chat and scheduling. The system supports multiple roles like user, admin and super admin. Excellent work and very reliable communication.",
    rating: 5,
  },
  {
    name: "M. Hanzla",
    role: "Real Estate Platform",
    quote: "VijStack developed several tools for our real estate platform including map based plot listings and a lead tracking system. The analytics dashboard and employee activity tracking have been very helpful for our operations.",
    rating: 4.5,
  },
  {
    name: "Keshav",
    role: "Founder, GroceryOnWheels",
    quote: "We partnered with VijStack to build our grocery delivery platform. Their team handled the mobile app development in Flutter and backend integration smoothly.",
    rating: 4,
  },
  {
    name: "Sumo",
    role: "Game Platform, Canada",
    quote: "VijStack helped us build and launch a web based game similar to Pacman. The platform includes authentication, rewards, coupon codes and user accounts. Great technical support during launch.",
    rating: 5,
  },
  {
    name: "Michael R.",
    role: "SaaS Platform, via Upwork",
    quote: "The VijStack team quickly understood our existing architecture and fixed several critical backend issues. Very professional and efficient to work with.",
    rating: 4.5,
  },
  {
    name: "Daniel K.",
    role: "Fitness Software",
    quote: "Great experience working with VijStack. They optimized our APIs and improved overall application performance.",
    rating: 5,
  },
  {
    name: "Sarah L.",
    role: "Ecommerce Store",
    quote: "We needed help stabilizing our production application and the VijStack team handled it perfectly. Bugs were resolved quickly and deployment was smooth.",
    rating: 4,
  },
  {
    name: "Ahmed T.",
    role: "Startup Web Application",
    quote: "VijStack joined our project during development and delivered clean and scalable solutions. Communication and technical expertise were excellent.",
    rating: 5,
  },
];
