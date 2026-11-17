import {
  CodeXml, Search, ShoppingCart, Rocket, ShieldCheck, Magnet, Package, FilePen, LayoutDashboard, Wrench,
  Smartphone, RefreshCw, Globe, CreditCard, Server, LifeBuoy, type LucideIcon,
} from "lucide-react";

export type ServiceCategory = "build" | "launch" | "grow";

export const categories: { id: ServiceCategory; title: string; intro: string }[] = [
  { id: "build", title: "Build", intro: "Websites, apps, stores and the tools to run them." },
  { id: "launch", title: "Integrate & launch", intro: "Domains, payments, cloud and security, set up properly." },
  { id: "grow", title: "Grow & support", intro: "Get found, win leads and keep everything running." },
];

export type Service = {
  slug: string;
  category: ServiceCategory;
  /** Starting price shown on the pricing page, if published */
  price?: { label: string; amount: number; unit?: "MONTH" };
  title: string;
  short: string;
  icon: LucideIcon;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  includes: string[];
  outcomes: { title: string; text: string }[];
  idealFor: string;
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "custom-websites",
    category: "build",
    price: { label: "₹14,999", amount: 14999 },
    title: "Custom Websites",
    short: "Hand-built business websites that load fast, rank well and turn visitors into enquiries.",
    icon: CodeXml,
    metaTitle: "Custom Website Development",
    metaDescription:
      "Custom website development for startups and businesses. Fast, mobile-first, SEO-ready sites built with Next.js and React by VijStack.",
    intro:
      "Your website is often the first conversation a customer has with your business. VijStack designs and builds it around your goals, your customers and your content, with no bloated themes slowing it down.",
    includes: [
      "Custom design shaped around your brand and audience",
      "Mobile-first, responsive layouts for every screen",
      "Technical SEO setup: metadata, sitemap, structured data",
      "Fast loading with modern frameworks like Next.js",
      "Contact forms, WhatsApp and call buttons wired up",
      "Hosting, domain and launch handled for you",
    ],
    outcomes: [
      { title: "Look credible", text: "A professional site builds trust before you ever speak to a customer." },
      { title: "Get found", text: "Clean code and SEO foundations help search engines understand your business." },
      { title: "Convert visitors", text: "Clear calls to action turn browsing into calls, messages and sales." },
    ],
    idealFor: "Businesses that need a professional website or have outgrown a template site.",
    faqs: [
      { q: "Do you use templates?", a: "No. Each site is designed and coded for the business it serves, so it carries only what you need and loads quickly." },
      { q: "Can I edit the site after launch?", a: "Yes. Sites can include a simple CMS so you can update text, images and blog posts yourself." },
    ],
  },
  {
    slug: "seo",
    category: "grow",
    price: { label: "₹5,000", amount: 5000 },
    title: "SEO",
    short: "Technical and on-page SEO that helps the right customers find you on Google.",
    icon: Search,
    metaTitle: "SEO Services for Websites",
    metaDescription:
      "Technical and on-page SEO services: site audits, speed fixes, structured data, keyword-focused pages and Google Search Console setup.",
    intro:
      "Ranking starts with a site search engines can read easily. VijStack fixes the technical foundations, structures your pages around what customers search for and sets up the tools to track progress.",
    includes: [
      "Technical SEO audit with a prioritised fix list",
      "Page speed and Core Web Vitals improvements",
      "Titles, meta descriptions and heading structure",
      "Schema markup (JSON-LD) for rich results",
      "XML sitemap, robots.txt and Search Console setup",
      "Local SEO and Google Business Profile guidance",
    ],
    outcomes: [
      { title: "Fix what holds you back", text: "Broken links, slow pages and missing tags get cleaned up first." },
      { title: "Target real searches", text: "Pages are written and structured around the terms your customers use." },
      { title: "Measure progress", text: "Search Console and analytics show what is working." },
    ],
    idealFor: "Businesses with a website that isn't bringing in search traffic.",
    faqs: [
      { q: "How soon will I see results?", a: "Technical fixes can show up within weeks, while rankings for competitive terms usually build over several months." },
      { q: "Can you do SEO on a site you didn't build?", a: "Yes. Most SEO work starts with an audit of the existing site, whatever it was built with." },
    ],
  },
  {
    slug: "ecommerce",
    category: "build",
    price: { label: "₹79,000", amount: 79000 },
    title: "E-commerce Solutions",
    short: "Online stores with secure payments, easy product management and a smooth checkout.",
    icon: ShoppingCart,
    metaTitle: "E-commerce Website Development",
    metaDescription:
      "E-commerce website development with secure payment gateways, product and order management, and a fast, mobile-friendly checkout.",
    intro:
      "Selling online should be simple for your customers and for you. VijStack builds stores that are quick to browse, easy to check out from and easy to manage behind the scenes.",
    includes: [
      "Product catalogue with categories, filters and search",
      "Payment gateway integration (Razorpay, Stripe and more)",
      "Cart, checkout and order confirmation emails",
      "Order, stock and customer management",
      "Shipping, coupon and tax settings",
      "SEO-friendly product pages",
    ],
    outcomes: [
      { title: "Sell around the clock", text: "Customers can browse and buy any time, from any device." },
      { title: "Fewer abandoned carts", text: "A short, clear checkout keeps buyers moving." },
      { title: "Less admin", text: "Orders and stock are managed from one dashboard." },
    ],
    idealFor: "Shops, brands and local stores ready to take orders online.",
    faqs: [
      { q: "Which payment methods can you add?", a: "Common gateways such as Razorpay, Stripe and PayPal, including UPI, cards and wallets where the gateway supports them." },
      { q: "Can I add products myself?", a: "Yes. You get an admin area to add products, update prices and manage orders." },
    ],
  },
  {
    slug: "startup-landing-pages",
    category: "build",
    title: "Startup Landing Pages",
    short: "Fast, focused pages to launch a product, test an idea or run an ad campaign.",
    icon: Rocket,
    metaTitle: "Landing Pages for Startups",
    metaDescription:
      "High-converting landing pages for startups and campaigns: fast to launch, mobile-first, with lead capture and analytics built in.",
    intro:
      "A landing page has one job: get the visitor to act. VijStack builds focused pages that explain your offer clearly and make signing up, booking or buying the obvious next step.",
    includes: [
      "Conversion-focused copy structure and layout",
      "Waitlist, signup or booking forms",
      "Analytics and ad pixel setup",
      "A/B-test-ready sections",
      "Lightning-fast load times for paid traffic",
      "Quick turnaround for launches",
    ],
    outcomes: [
      { title: "Launch quickly", text: "Validate an idea with real visitors before building more." },
      { title: "Lower ad costs", text: "Fast, relevant pages tend to perform better in paid campaigns." },
      { title: "Capture every lead", text: "Signups go straight to your inbox, sheet or CRM." },
    ],
    idealFor: "Founders launching a product, event or campaign.",
    faqs: [
      { q: "Can the page connect to my email tool or CRM?", a: "Yes. Forms can send leads to email, Google Sheets, or tools like HubSpot and Mailchimp." },
      { q: "Can it grow into a full website later?", a: "Yes. Pages are built so more sections and pages can be added as you grow." },
    ],
  },
  {
    slug: "security-plans",
    category: "launch",
    title: "Security Plans",
    short: "Hardening, backups, SSL and monitoring to keep your website safe and online.",
    icon: ShieldCheck,
    metaTitle: "Website Security Plans",
    metaDescription:
      "Website security plans: SSL, hardening, regular backups, malware checks, updates and uptime monitoring for business websites.",
    intro:
      "A hacked or offline website costs you customers and trust. VijStack security plans cover the essentials so problems are prevented, spotted early and fixed fast.",
    includes: [
      "SSL/HTTPS setup and security headers",
      "Regular automated backups",
      "Software, plugin and dependency updates",
      "Malware scanning and cleanup",
      "Uptime monitoring and alerts",
      "Login protection and access review",
    ],
    outcomes: [
      { title: "Stay online", text: "Monitoring flags downtime so it can be fixed quickly." },
      { title: "Recover fast", text: "Backups mean your site can be restored if something goes wrong." },
      { title: "Protect customers", text: "Secure forms and checkouts keep customer data safe." },
    ],
    idealFor: "Any business whose website handles enquiries, logins or payments.",
    faqs: [
      { q: "My site has already been hacked. Can you help?", a: "Yes. The site can be cleaned, restored from a safe state and hardened against the same attack." },
      { q: "Do you cover sites built on WordPress?", a: "Yes. Security plans cover custom-built sites as well as common platforms like WordPress." },
    ],
  },
  {
    slug: "lead-generation",
    category: "grow",
    title: "Lead Generation",
    short: "Forms, funnels, WhatsApp and tracking that turn website visitors into enquiries.",
    icon: Magnet,
    metaTitle: "Lead Generation Websites & Funnels",
    metaDescription:
      "Lead generation for business websites: smart forms, funnels, WhatsApp and call buttons, CRM integration and conversion tracking.",
    intro:
      "Traffic only matters if it turns into conversations. VijStack adds the forms, prompts and tracking that capture interested visitors and route them straight to you.",
    includes: [
      "Smart enquiry and quote forms",
      "Click-to-call and WhatsApp buttons",
      "Lead magnets and email capture",
      "CRM, email and Google Sheets integration",
      "Conversion tracking with Google Analytics",
      "Thank-you pages and auto-replies",
    ],
    outcomes: [
      { title: "More enquiries", text: "Easy ways to get in touch on every page." },
      { title: "Faster follow-up", text: "Leads arrive instantly where your team works." },
      { title: "Know what works", text: "See which pages and campaigns bring in leads." },
    ],
    idealFor: "Service businesses that grow through calls, quotes and bookings.",
    faqs: [
      { q: "Can leads go to WhatsApp?", a: "Yes. Visitors can message you on WhatsApp in one tap, and form leads can be emailed or synced to a sheet or CRM." },
      { q: "Will I know where leads come from?", a: "Yes. Conversion tracking shows which pages, ads and sources generate enquiries." },
    ],
  },
  {
    slug: "startup-kits",
    category: "grow",
    title: "Startup Kits",
    short: "Everything a new business needs to go live online, bundled and ready to launch.",
    icon: Package,
    metaTitle: "Startup Website Kits",
    metaDescription:
      "Startup website kits: domain, hosting, website, business email, SEO basics and Google Business Profile setup in one package.",
    intro:
      "Starting a business means a hundred decisions. A VijStack startup kit handles the online ones in one go, so you launch with a complete, professional presence.",
    includes: [
      "Domain and hosting setup",
      "A fast, professional starter website",
      "Business email on your domain",
      "Google Business Profile and Search Console",
      "Basic SEO and analytics",
      "Social media links and sharing previews",
    ],
    outcomes: [
      { title: "One partner", text: "No juggling separate providers for domain, hosting and site." },
      { title: "Launch-ready", text: "Go live with everything connected and working." },
      { title: "Room to grow", text: "Add e-commerce, CMS or more pages when you need them." },
    ],
    idealFor: "New businesses and first-time founders.",
    faqs: [
      { q: "Do I own my domain and website?", a: "Yes. The domain is registered in your name and you own the site." },
      { q: "Can the kit be customised?", a: "Yes. Pieces can be added or removed to fit what your business needs." },
    ],
  },
  {
    slug: "custom-cms",
    category: "build",
    title: "Custom CMS",
    short: "Update your own content easily, without touching a line of code.",
    icon: FilePen,
    metaTitle: "Custom CMS Development",
    metaDescription:
      "Custom CMS development so your team can edit pages, blogs, products and media easily, with roles, previews and fast, secure publishing.",
    intro:
      "Your team shouldn't need a developer to change a price or publish a blog post. VijStack builds content management that fits how you work, with only the fields you need.",
    includes: [
      "Editable pages, blogs and collections",
      "Image and file uploads with optimisation",
      "User roles and permissions",
      "Draft, preview and publish workflow",
      "SEO fields on every page",
      "Headless CMS options when they fit better",
    ],
    outcomes: [
      { title: "Move faster", text: "Publish updates the moment you need them." },
      { title: "Stay on-brand", text: "Structured fields keep pages consistent." },
      { title: "Save costs", text: "Fewer small change requests to a developer." },
    ],
    idealFor: "Teams that update content often: blogs, catalogues, listings, news.",
    faqs: [
      { q: "Is a custom CMS better than WordPress?", a: "It depends. A custom or headless CMS is leaner and more secure for many sites; WordPress can suit others. You'll get an honest recommendation." },
      { q: "Can multiple people edit content?", a: "Yes. Team members can have their own logins and permissions." },
    ],
  },
  {
    slug: "admin-panels",
    category: "build",
    title: "Admin Panels",
    short: "Dashboards to manage users, orders, bookings and data in one place.",
    icon: LayoutDashboard,
    metaTitle: "Admin Panel & Dashboard Development",
    metaDescription:
      "Custom admin panels and dashboards to manage users, orders, bookings, attendance and business data securely in one place.",
    intro:
      "Spreadsheets and registers only go so far. VijStack builds secure admin panels that bring your operations into one place, from orders and bookings to attendance and reports.",
    includes: [
      "Secure login with roles and permissions",
      "Manage users, orders, bookings or records",
      "Charts, reports and data exports",
      "Search, filters and bulk actions",
      "Integrations with your website and tools",
      "Responsive design for use on the go",
    ],
    outcomes: [
      { title: "Everything in one place", text: "No more hunting across sheets and chats." },
      { title: "Clear decisions", text: "Live reports show how the business is doing." },
      { title: "Fewer errors", text: "Validated data replaces manual entry." },
    ],
    idealFor: "Businesses running operations on spreadsheets, registers or chat groups.",
    faqs: [
      { q: "Can the panel connect to my existing website?", a: "Yes. It can manage data that appears on your site, such as products, bookings or listings." },
      { q: "Is my data secure?", a: "Access is protected with authentication, roles and secure hosting, and data can be backed up regularly." },
    ],
  },
  {
    slug: "maintenance",
    category: "grow",
    price: { label: "₹10,000/month", amount: 10000, unit: "MONTH" },
    title: "Maintenance & Fixes",
    short: "Bug fixes, updates, speed boosts and new features for websites you already have.",
    icon: Wrench,
    metaTitle: "Website Maintenance & Bug Fixing",
    metaDescription:
      "Website maintenance and bug fixing: broken pages, speed issues, updates, new features and ongoing support for existing websites.",
    intro:
      "Already have a website that's slow, broken or out of date? With 50+ maintenance jobs and fixes delivered, VijStack can step in, sort out the problems and keep things running.",
    includes: [
      "Bug and layout fixes",
      "Speed and performance improvements",
      "Content updates and new pages",
      "New features and integrations",
      "Framework, plugin and security updates",
      "Monthly care plans or one-off jobs",
    ],
    outcomes: [
      { title: "Things just work", text: "Broken forms, pages and layouts get fixed properly." },
      { title: "A faster site", text: "Performance fixes keep visitors from bouncing." },
      { title: "Peace of mind", text: "Someone reliable to call when something breaks." },
    ],
    idealFor: "Anyone with an existing website that needs fixing, updating or improving.",
    faqs: [
      { q: "Can you work on a site someone else built?", a: "Yes. Most maintenance work is on sites built by other developers or agencies." },
      { q: "Do you offer one-off fixes?", a: "Yes. You can book a single fix or an ongoing monthly care plan." },
    ],
  },
  {
    slug: "app-development",
    category: "build",
    price: { label: "₹19,999", amount: 19999 },
    title: "App Development",
    short: "Cross-platform mobile apps in Flutter, plus SaaS products and MVPs with scalable backends.",
    icon: Smartphone,
    metaTitle: "Mobile App & SaaS Development (Flutter)",
    metaDescription:
      "Flutter mobile app development for Android and iOS, plus SaaS platforms and MVPs with secure, scalable backends, by VijStack.",
    intro:
      "One codebase, two app stores. VijStack builds Flutter apps for Android and iOS, and SaaS products with the dashboards, APIs and backends behind them.",
    includes: [
      "Flutter apps for Android and iOS from one codebase",
      "SaaS platforms and MVPs with user roles and billing",
      "REST APIs and backends with Node.js or Firebase",
      "Push notifications, maps, payments and chat",
      "Admin dashboards to manage users and content",
      "Play Store and App Store submission",
    ],
    outcomes: [
      { title: "Reach both platforms", text: "Ship to Android and iOS without paying for two separate apps." },
      { title: "Launch an MVP fast", text: "Test your idea with real users before investing more." },
      { title: "Built to scale", text: "A clean backend that grows with your users." },
    ],
    idealFor: "Startups and businesses that need a mobile app or a SaaS product.",
    faqs: [
      { q: "Why Flutter?", a: "Flutter builds native-quality Android and iOS apps from a single codebase, which keeps cost and maintenance down." },
      { q: "Can you build the backend too?", a: "Yes. APIs, databases, admin panels and cloud hosting are all part of the build." },
    ],
  },
  {
    slug: "website-revamp",
    category: "build",
    price: { label: "₹14,999", amount: 14999 },
    title: "Website Revamps",
    short: "A full visual and technical overhaul that turns an outdated site into a modern, fast one.",
    icon: RefreshCw,
    metaTitle: "Website Redesign & Revamp Services",
    metaDescription:
      "Website redesign and revamp: modern design, faster loading, better SEO and mobile experience, without losing your search rankings.",
    intro:
      "If your website looks dated, loads slowly or doesn't work on phones, it's costing you customers. A revamp fixes the design and the code underneath, while protecting the search rankings you already have.",
    includes: [
      "Modern redesign that matches your brand",
      "Rebuild on a fast, modern framework",
      "Mobile-first layouts for every screen",
      "Redirects that keep your existing Google rankings",
      "Content cleanup and clearer calls to action",
      "Speed, accessibility and SEO improvements",
    ],
    outcomes: [
      { title: "Look current", text: "A fresh design that builds trust with today's customers." },
      { title: "Keep your rankings", text: "Careful redirects protect the traffic you've earned." },
      { title: "Convert better", text: "Clearer pages turn more visitors into enquiries." },
    ],
    idealFor: "Businesses whose website is more than a few years old.",
    faqs: [
      { q: "Will I lose my Google rankings?", a: "Not if it's done right. Every old URL is mapped to its new page with permanent redirects before launch." },
      { q: "Can you keep my existing content?", a: "Yes. Existing content is moved over and improved where it helps." },
    ],
  },
  {
    slug: "domain-email-integration",
    category: "launch",
    title: "Domain & Email Integration",
    short: "Domain setup, DNS and Cloudflare, SSL, and professional email on your own domain.",
    icon: Globe,
    metaTitle: "Domain, DNS & Business Email Setup",
    metaDescription:
      "Domain purchase and transfer, DNS and Cloudflare setup, SSL certificates, and business email on your domain with Google Workspace or Zoho.",
    intro:
      "Your domain and email are the foundation of your online presence. VijStack sets them up correctly, so your site is secure, your emails land in inboxes and everything is in your name.",
    includes: [
      "Domain purchase or transfer, registered in your name",
      "DNS setup and Cloudflare protection",
      "SSL certificates and HTTPS everywhere",
      "Business email with Google Workspace or Zoho Mail",
      "SPF, DKIM and DMARC so emails reach inboxes",
      "Connecting your domain to your website or app",
    ],
    outcomes: [
      { title: "Look professional", text: "you@yourbusiness.com instead of a free email address." },
      { title: "Reach the inbox", text: "Correct email authentication keeps you out of spam." },
      { title: "Stay in control", text: "Everything is registered to you, with clear access." },
    ],
    idealFor: "New businesses and anyone moving domains, hosting or email.",
    faqs: [
      { q: "Can you move my existing domain?", a: "Yes. Domains can be transferred or pointed to a new host with little or no downtime." },
      { q: "Why do my emails go to spam?", a: "Usually because SPF, DKIM or DMARC records are missing or wrong. Setting them up properly fixes most cases." },
    ],
  },
  {
    slug: "payment-gateway-integration",
    category: "launch",
    title: "Payment Gateway Integration",
    short: "Secure checkout with Razorpay, Stripe or PayPal, including UPI, subscriptions and webhooks.",
    icon: CreditCard,
    metaTitle: "Payment Gateway Integration (Razorpay, Stripe, PayPal)",
    metaDescription:
      "Payment gateway integration for websites and apps: Razorpay, Stripe and PayPal, with UPI, cards, subscriptions, refunds and webhooks.",
    intro:
      "Getting paid online should be simple for your customers and reliable for you. VijStack integrates payment gateways into websites, stores and apps, with every edge case handled.",
    includes: [
      "Razorpay, Stripe and PayPal integration",
      "Cards, UPI, net banking and wallets",
      "Subscriptions and recurring billing",
      "Refunds, invoices and payment receipts",
      "Webhooks that update orders automatically",
      "Test-mode setup and secure go-live",
    ],
    outcomes: [
      { title: "Smooth checkout", text: "Fewer steps and the payment methods customers prefer." },
      { title: "Reliable records", text: "Orders update automatically when payments succeed or fail." },
      { title: "Secure by design", text: "Card data stays with the gateway, never on your server." },
    ],
    idealFor: "Online stores, SaaS products, booking sites and service businesses.",
    faqs: [
      { q: "Which gateway should I use?", a: "Razorpay suits most Indian businesses; Stripe and PayPal suit international customers. You'll get a recommendation for your case." },
      { q: "Can you add payments to my existing site?", a: "Yes. Payments can be added to most existing websites and apps." },
    ],
  },
  {
    slug: "devops-cloud-deployment",
    category: "launch",
    price: { label: "₹5,000", amount: 5000 },
    title: "DevOps & Cloud Deployment",
    short: "CI/CD pipelines, cloud hosting and scaling, so every update ships safely with zero downtime.",
    icon: Server,
    metaTitle: "DevOps, CI/CD & Cloud Deployment",
    metaDescription:
      "DevOps and cloud deployment: CI/CD pipelines, Docker, AWS, Google Cloud and Vercel hosting, monitoring and scaling for web apps.",
    intro:
      "Great code still needs a reliable way to reach your users. VijStack sets up hosting, deployments and monitoring so releases are routine and downtime is rare.",
    includes: [
      "Hosting on AWS, Google Cloud or Vercel",
      "CI/CD pipelines with automated builds and checks",
      "Docker containers for consistent environments",
      "Zero-downtime deployments and rollbacks",
      "Monitoring, logs and uptime alerts",
      "Scaling and cost optimisation",
    ],
    outcomes: [
      { title: "Ship with confidence", text: "Automated pipelines catch problems before users see them." },
      { title: "Stay online", text: "Monitoring and rollbacks keep downtime to a minimum." },
      { title: "Pay for what you use", text: "Right-sized infrastructure keeps cloud bills sensible." },
    ],
    idealFor: "Growing web apps, SaaS products and teams shipping often.",
    faqs: [
      { q: "Which cloud do you recommend?", a: "Vercel suits most Next.js sites; AWS or Google Cloud suit apps that need more control. The choice depends on your app and budget." },
      { q: "Can you move my app to a new host?", a: "Yes. Migrations are planned to avoid downtime and data loss." },
    ],
  },
  {
    slug: "technical-support",
    category: "grow",
    price: { label: "₹5,000", amount: 5000 },
    title: "Technical Support",
    short: "On-demand expert help with servers, deployments, bugs and complex codebases.",
    icon: LifeBuoy,
    metaTitle: "Technical Support for Websites & Apps",
    metaDescription:
      "On-demand technical support for websites and web apps: debugging, server issues, deployments, performance and code reviews.",
    intro:
      "Stuck on a bug, a failing deployment or a slow server? VijStack steps into your codebase, finds the cause and fixes it, whoever built the project.",
    includes: [
      "Debugging frontend and backend issues",
      "Server, hosting and deployment problems",
      "API and database performance fixes",
      "Code reviews and architecture advice",
      "Help for your in-house developers",
      "Clear notes on what was changed and why",
    ],
    outcomes: [
      { title: "Unblocked fast", text: "Get past the problem that's holding your project up." },
      { title: "Root causes fixed", text: "Problems are solved properly, not patched over." },
      { title: "Know what happened", text: "Clear explanations so your team can maintain it." },
    ],
    idealFor: "Teams and founders with an existing product that needs expert help.",
    faqs: [
      { q: "Do you work on code someone else wrote?", a: "Yes. Much of this work is on existing codebases built by other developers." },
      { q: "Can you help urgently?", a: "Urgent issues are prioritised. Get in touch by WhatsApp or phone for the fastest response." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

/** Lowercase a title for use mid-sentence, keeping acronyms like SEO and CMS. */
export const inSentence = (t: string) =>
  t.split(" ").map((w) => (w === w.toUpperCase() && w.length > 1 ? w : w.toLowerCase())).join(" ");

export const servicesIn = (c: ServiceCategory) => services.filter((s) => s.category === c);
