import React from 'react';
import {
  GlobeAltIcon,
  ClockIcon,
  ChartBarIcon,
  DevicePhoneMobileIcon,
  CreditCardIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';
import { HeroSection } from '@/components/services/shared/HeroSection';
import { FeatureSection } from '@/components/services/shared/FeatureSection';
import { ProcessSection } from '@/components/services/shared/ProcessSection';
import { TechStackSection } from '@/components/services/shared/TechStackSection';
import { PricingSection } from '@/components/services/shared/PricingSection';
import { WhyUsSection } from '@/components/services/shared/WhyUsSection';
import { FAQSection } from '@/components/services/shared/FAQSection';
import { CTASection } from '@/components/services/shared/CTASection';

export default function Ecommerse() {
  return (
    <div className="w-full font-sans">
      <HeroSection
        title={<>Ecommerce Solutions <br className="hidden sm:block" /> That <span className="text-primary">Drive Growth</span></>}

        description="We build high-performance, scalable online stores designed to convert visitors into loyal customers. Secure, fast, and tailored to your brand."
        primaryCta={{ text: "Start Your Store", href: "/contact" }}
        secondaryCta={{ text: "View Portfolio", href: "/work" }}
      />

      <FeatureSection
        title="Everything You Need to Sell Online"
        description="Comprehensive features that empower your business to thrive in the digital marketplace."
        features={[
          {
            title: "24/7 Availability",
            description: "Capture sales and leads at any time of day, catering to customers worldwide without increased staffing costs.",
            icon: ClockIcon,
          },
          {
            title: "Global Reach",
            description: "Break free from geographical limitations. Expand your market beyond your neighborhood to the entire world.",
            icon: GlobeAltIcon,
          },
          {
            title: "Mobile First Design",
            description: "Optimized for the 60%+ of users who shop on mobile devices. Fast, responsive, and intuitive.",
            icon: DevicePhoneMobileIcon,
          },
          {
            title: "Secure Payments",
            description: "Integrated with top payment gateways (Stripe, PayPal, Razorpay) ensuring safe transactions for your customers.",
            icon: CreditCardIcon,
          },
          {
            title: "Data-Driven Insights",
            description: "Understand your customers with detailed analytics on behavior, sales, and inventory performance.",
            icon: ChartBarIcon,
          },
          {
            title: "Robust Security",
            description: "Enterprise-grade security with SSL encryption and regular backups to protect your business data.",
            icon: ShieldCheckIcon,
          }
        ]}
      />

      <ProcessSection
        title="Our Development Process"
        description="A proven roadmap from concept to launch."
        steps={[
          { stepNumber: "01", title: "Discovery", description: "We analyze your business, target audience, and competitors to define the perfect strategy." },
          { stepNumber: "02", title: "Design", description: "Creating high-fidelity mockups that align with your brand identity and user experience goals." },
          { stepNumber: "03", title: "Development", description: "Building your store using modern, clean code with integrated payment and shipping systems." },
          { stepNumber: "04", title: "Launch & Grow", description: "Testing, deployment, and ongoing support to ensure your store scales with your success." }
        ]}
      />

      <TechStackSection
        title="Built with Modern Tech"
        description="We use the best tools in the industry to ensure speed, security, and scalability."
        technologies={[
          { name: "Next.js", iconClass: "devicon-nextjs-plain" },
          { name: "React", iconClass: "devicon-react-original colored" },
          { name: "TypeScript", iconClass: "devicon-typescript-plain colored" },
          { name: "Tailwind CSS", iconClass: "devicon-tailwindcss-original colored" },
          { name: "Node.js", iconClass: "devicon-nodejs-plain colored" },
          { name: "Prisma", iconClass: "devicon-prisma-original colored" },
          { name: "PostgreSQL", iconClass: "devicon-postgresql-plain colored" },
          { name: "AWS", iconClass: "devicon-amazonwebservices-plain-wordmark colored" },
          { name: "Vercel", iconClass: "devicon-vercel-original" },
          { name: "Stripe", iconClass: "devicon-github-original" }
        ]}
      />

      <WhyUsSection
        title="Why Choose Vijstack?"
        description="We don't just build websites; we build businesses."
        reasons={[
          { title: "Business-First Approach", description: "We focus on ROI and conversion rates, not just vanity metrics." },
          { title: "Transparent Communication", description: "Regular updates and direct lines to your project manager." },
          { title: "Post-Launch Support", description: "30 days of free support and training to help you manage your store." },
          { title: "SEO Optimized", description: "Built locally with SEO best practices to help you average higher rankings." }
        ]}
        illustration='/illustrations/ecommerce.png'
      />

      <PricingSection
        title="Transparent Pricing"
        description="Packages designed for every stage of your business journey."
        plans={[
          {
            name: "Starter",
            price: "₹79,000",
            description: "Ideal for small businesses launching their first online store or MVP.",
            features: [
              "Next.js Frontend",
              "Product Listing & Detail Pages",
              "Cart & Checkout System",
              "Razorpay Payment Integration",
              "Order Tracking (Placed → In Transit → Delivered)",
              "Admin Panel to Add/Edit Products",
              "Manual Order Status Updates",
              "Supabase Authentication",
              "Cloudinary / AWS S3 Image Storage"
            ],
            ctaText: "Get Started",
            ctaLink: "/contact?plan=starter&service=ecommerce"
          },
          {
            name: "Professional",
            price: "₹3,00,000",
            description: "Best for growing brands that need scalability, user management, and admin control.",
            features: [
              "React or Next.js Frontend",
              "Node.js + Express Backend (MVC Architecture)",
              "Secure JWT Authentication",
              "Role-Based Access (Admin / User)",
              "User Profiles & Address Management",
              "Product Catalog & Categories",
              "Cart & Checkout System",
              "Order History & Tracking",
              "Admin Dashboard (Products, Users, Orders)",
              "Secure Role-Based APIs",
              "Cloudinary / AWS S3 Image Storage"
            ],
            ctaText: "Choose Professional",
            ctaLink: "/contact?plan=professional&service=ecommerce",
            popular: true
          },
          {
            name: "Enterprise",
            price: "₹10,00,000+",
            description: "Custom-built enterprise-grade e-commerce solutions for high-traffic and large-scale platforms.",
            features: [
              "Next.js Frontend",
              "NestJS Backend (Enterprise Architecture)",
              "PostgreSQL Database with Redis Caching",
              "Background Jobs with BullMQ / RabbitMQ",
              "Auto-Scaling Cloud Infrastructure (AWS / GCP)",
              "Shipping API Integration (Shiprocket, Delhivery, etc.)",
              "Real-Time Order Tracking via Webhooks",
              "Sales & User Analytics Dashboard",
              "Automated Email Notifications",
              "Advanced Security & Rate Limiting",
              "Microservices-Ready Architecture"
            ],
            ctaText: "Contact Sales",
            ctaLink: "/contact?plan=enterprise&service=ecommerce"
          }
        ]}
      />

      <FAQSection
        title="Frequently Asked Questions"
        faqs={[
          { question: "How long does it take to build a store?", answer: "Typically 4-8 weeks depending on the complexity and number of features required." },
          { question: "Can I update products myself?", answer: "Yes! We provide an easy-to-use admin dashboard where you can manage products, orders, and customers." },
          { question: "Do you offer hosting?", answer: "We can set up hosting for you on reliable platforms like Vercel or AWS, or work with your existing provider." },
          { question: "Is the site mobile friendly?", answer: "Absolutely. We follow a mobile-first approach to ensure a perfect experience on all devices." }
        ]}
      />

      <CTASection
        title="Ready to Start Selling?"
        description="Join hundreds of successful businesses who trust Vijstack for their digital presence."
        primaryCta={{ text: "Start Your Project", href: "/contact" }}
        secondaryCta={{ text: "Book a Consultation", href: "/contact" }}
      />
    </div>
  )
}
