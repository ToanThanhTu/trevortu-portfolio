import { Job, Project, Quote, Testimonial } from "@/lib/types"

export const experience: Job[] = [
  {
    title: "Full Stack Developer",
    company: "NSW Rural Fire Service",
    location: "Sydney, Australia",
    start_date: "Jul 2026",
    end_date: "Present",
    description:
      "Build Guardian, the multi-agency system NSW RFS and partner agencies use to plan, fund and report on bush fire mitigation statewide. Part of the team migrating a 15-year-old legacy platform to React, Express and Node.js on AWS. Ship features with Claude Code and Replit; the development manager rates the 6-person team as doing the work of 20.",
  },
  {
    title: "Full Stack Developer & IT Support",
    company: "HEQS Group",
    location: "Sydney, Australia",
    start_date: "Oct 2025",
    end_date: "Jun 2026",
    description:
      "Report directly to the CEO, managing a global team of 3 developers and overseeing the technical strategy for a $19 million e-commerce portfolio. Led Next.js and React upgrades across 70+ files, refactored codebase to Domain-Driven Architecture, migrated production infrastructure from Heroku to Azure, and established CI/CD pipelines.",
  },
  {
    title: "Software Developer Intern",
    company: "WebAlive",
    location: "Sydney, Australia",
    start_date: "Aug 2025",
    end_date: "Oct 2025",
    description:
      "Developed End-to-End automation testing for EventBookings using Playwright with Page Object Model architecture. Optimized test execution by 75% and eliminated 40% code duplication through reusable helper functions. Applied CI/CD pipelines using Bitbucket for automated test workflows.",
  },
  {
    title: "Software Engineer",
    company: "Freelance",
    location: "Sydney, Australia",
    start_date: "Nov 2023",
    end_date: "Aug 2025",
    description:
      "Built responsive, scalable web applications using JavaScript, TypeScript, React, and Next.js with SSR and image optimization. Styled projects with Tailwind CSS, Shadcn, and Framer Motion. Integrated RESTful APIs using Axios and React Query, as well as Google APIs for dynamic content.",
  },
  {
    title: "Pega System Architect",
    company: "Infosys",
    location: "Sydney, Australia",
    start_date: "Nov 2021",
    end_date: "Oct 2023",
    description:
      "Developed frontend and backend processes using the Pega low-code platform for enterprise government applications for NSW Transport and NSW Aged Care. Built and integrated REST APIs for seamless communication between systems. Achieved 95% test coverage and optimized performance by 20%.",
  },
  {
    title: "Pega System Architect",
    company: "Wipro",
    location: "Sydney, Australia",
    start_date: "Mar 2020",
    end_date: "Nov 2021",
    description:
      "Designed and built workflows with SLAs, routing, and parallel processing for WaterNSW government applications. Designed custom data types and tables in Pega Database. Developed automated Unit and End-to-End tests covering 95%+ use cases.",
  },
]

export const featuredProjects: Project[] = [
  {
    title: "Priceworth",
    slug: "priceworth",
    type: "Full Stack E-commerce Platform",
    description:
      "Full-stack, multi-tenant furniture e-commerce platform with customer storefront, admin dashboard, and RESTful API backend. Production deployment serving Australian market with Azure cloud-native infrastructure.",
    images: [
      "/priceworth/main.webp",
      "/priceworth/secondary-1.webp",
      "/priceworth/secondary-2.webp",
      "/priceworth/secondary-3.webp",
      "/priceworth/secondary-4.webp",
    ],
    width: 1280,
    height: 2240,
    url: "https://priceworth.com.au",
    sections: [
      {
        title: "Frontend Architecture",
        items: [
          "Built with Next.js 16 (App Router, Server Components) and React 19 using TypeScript 5 in strict mode",
          "Redux Toolkit for centralized state management (cart, authentication, products), Tailwind CSS 4 for responsive UI",
          "Integrated multi-payment processing: PayPal, Zip (BNPL), CommBank 3DS authentication",
          "Dynamic SEO optimization with auto-generated sitemaps, structured data schemas, and product feeds on build",
          "Server-side rendering (SSR) for product pages, Incremental Static Regeneration (ISR) for category listings",
        ],
      },
      {
        title: "Backend & API",
        items: [
          "NestJS 11 microservices-style architecture with 17 feature modules (products, orders, reviews, cart, shipping, blog, etc.)",
          "TypeORM with MySQL database, Redis for session management and query caching",
          "JWT authentication with bcrypt password hashing, role-based access control (customer/admin)",
          "Rate limiting, Helmet security headers, CORS allowlisting, input validation via class-validator DTOs",
          "Swagger/OpenAPI documentation at /api-docs, Winston logging with daily rotation, health check endpoints",
        ],
      },
      {
        title: "Cloud Infrastructure & DevOps",
        items: [
          "Azure-native deployment: Container Apps (frontend/admin), App Service (API), MySQL, Redis - all in Australia East region",
          "AWS services: S3 with CloudFront CDN (image hosting), DynamoDB (order tracking with flexible schema)",
          "GitHub Actions CI/CD: Multi-stage Docker builds to Azure Container Registry with automated deployment on main branch push",
          "Azure Application Insights for distributed tracing, performance monitoring, and real-time error tracking",
          "Docker containerization with multi-stage builds, pnpm package manager, standalone Next.js output for production",
        ],
      },
      {
        title: "Integrations & Services",
        items: [
          "Microsoft Business Central API integration for real-time inventory synchronization and SKU management",
          "SendGrid transactional emails (order confirmations, password resets), Twilio SMS verification",
          "Separate admin dashboard (Next.js 14 + Ant Design 5) with order management, product CRUD, analytics charts (ApexCharts), low-stock alerts",
          "Firebase analytics, Google Analytics 4, Tawk.to live chat, direct browser-to-S3 uploads with presigned URLs",
          "Search functionality with Elasticsearch, newsletter management with email tracking analytics",
        ],
      },
    ],
    techStack: [
      {
        category: "Frontend",
        technologies: ["Next.js 16", "React 19", "TypeScript 5", "Redux Toolkit", "Tailwind CSS 4"],
      },
      {
        category: "Backend",
        technologies: ["NestJS 11", "TypeORM", "MySQL", "Redis"],
      },
      {
        category: "Cloud",
        technologies: [
          "Azure Container Apps",
          "Azure App Service",
          "Azure Application Insights",
          "AWS S3",
          "AWS DynamoDB",
        ],
      },
      {
        category: "DevOps",
        technologies: ["Docker", "GitHub Actions", "Azure Container Registry"],
      },
      {
        category: "Integrations",
        technologies: [
          "Microsoft Business Central",
          "PayPal",
          "Zip",
          "SendGrid",
          "Twilio",
          "Firebase",
          "Google Analytics",
        ],
      },
    ],
    stats: [
      { value: "17", label: "Backend Modules" },
      { value: "30+", label: "Frontend Pages" },
      { value: "100%", label: "TypeScript Coverage" },
      { value: "3", label: "Independent Apps" },
      { value: "Multi-env", label: "Dev / UAT / Prod" },
    ],
    architecture:
      "3 independent applications (customer frontend, admin dashboard, API backend) with containerized deployments and hybrid Azure/AWS cloud infrastructure",
  },
  {
    title: "PI Padel Club",
    slug: "pi-padel-club",
    type: "Web Application",
    description:
      "Developed a web application for a Padel Sport Club to streamline court bookings and management, addressing the growing demand for online booking solutions in the sports industry. Built with Next.js and Golang, the platform featured scalable landing pages, a responsive booking system, and real-time API integration. Leveraged modern tools like Tailwind CSS and Shadcn for a sleek, user-friendly design. Integrated RESTful APIs via Axios and React Query for real-time booking management, improving operational efficiency and customer satisfaction.",
    images: [
      "/pi-padel-club/main.webp",
      "/pi-padel-club/secondary-1.webp",
      "/pi-padel-club/secondary-2.webp",
    ],
    width: 1280,
    height: 2240,
    url: "https://pi-padel.club",
  },
  {
    title: "CSA Landing Pages",
    slug: "csa-landing-pages",
    type: "Web Development",
    description:
      "Developed responsive and SEO-friendly landing pages for a mining company using Next.js and TypeScript, enhancing their online presence. Integrated Google Sheets API to dynamically fetch and display company details, enabling easy content updates without code changes. Leveraged Next.js features like Server-Side Rendering, Lazy Loading, and Image Optimization for fast load times and improved performance. Designed with Tailwind CSS and Shadcn for a modern, accessible UI, while applying mobile-first principles for seamless cross-device experiences.",
    images: [
      "/csa-landing-pages/main.webp",
      "/csa-landing-pages/secondary-1.webp",
      "/csa-landing-pages/secondary-2.webp",
    ],
    width: 1280,
    height: 2240,
    url: "http://csa-landing.futurisen.com",
  },
  {
    title: "Bato Studio",
    slug: "bato-studio",
    type: "Web Development",
    description:
      "Developed and customized a WordPress-based website for Bato Studio, showcasing their creative architecture portfolio and services with a visually appealing and professional design. Designed and implemented custom WordPress themes and plugins tailored to the client’s needs, ensuring scalability and usability. Optimized website performance through image compression, asset minification, and caching for faster loading times.",
    images: [
      "/bato-studio/main.webp",
      "/bato-studio/secondary-1.webp",
      "/bato-studio/secondary-2.webp",
    ],
    width: 1280,
    height: 2240,
    url: "https://batostudio.com.au",
  },
  {
    title: "Rush Espresso Bar",
    slug: "rush-espresso-bar",
    type: "Web Development",
    description:
      "Designed and developed a modern, fully functional website for Rush Espresso Bar using TypeScript, Next.js, and Material-UI (MUI), creating a visually engaging and user-friendly platform to showcase their brand, menu, and café experience. Integrated a contact form for customer inquiries with email notifications, added an interactive Google Maps feature for easy location access, and ensured responsiveness with Tailwind CSS. Deployed the site on Vercel for fast, reliable hosting with automated CI/CD pipelines.",
    images: [
      "/rush-espresso-bar/main.webp",
      "/rush-espresso-bar/secondary-1.webp",
      "/rush-espresso-bar/secondary-2.webp",
    ],
    width: 1280,
    height: 2240,
    url: "https://rush-espresso-bar.vercel.app",
  },
]

export const otherProjects: Project[] = [
  {
    title: "Next Net Shop",
    slug: "next-net-shop",
    type: "Full Stack Development",
    description:
      "Developed an e-commerce web application as a personal project to explore Next.js, C#, ASP.NET, and Azure services. Featured complex cart management, product filtering, and responsive design. Built RESTful APIs with ASP.NET for CRUD operations and secured with JWT authentication. Managed states with Redux Toolkit and optimized data fetching with RTK Query. Containerized the frontend with Docker and deployed to Azure App Services. Implemented CI/CD with GitHub Actions for seamless deployments. The project enhanced my full-stack development skills, delivering a responsive, secure, and feature-rich shopping experience.",
    images: [
      "/next-net-shop/main.webp",
      "/next-net-shop/secondary-1.webp",
      "/next-net-shop/secondary-2.webp",
    ],
    width: 1280,
    height: 2240,
    url: "https://nextnet-shop-frontend.vercel.app",
  },
  {
    title: "TO-DO App",
    slug: "todo-app",
    type: "Full Stack Development",
    description:
      "Built a task management SPA using React, Node.js, Express.js, and MongoDB. Features included user authentication with JWT, task and category management, and status updates (completed, active, cancelled). Designed a responsive UI with CSS Modules, built a RESTful API for CRUD operations and managed application states with Redux for smooth task transitions. Integrated MongoDB for efficient data storage and deployed on Fly.io for scalability, delivering a reliable and user-friendly task management solution.",
    images: ["/todo-app/main.webp", "/todo-app/secondary-1.webp", "/todo-app/secondary-2.webp"],
    width: 1280,
    height: 2240,
    url: "https://todoapp-backend.fly.dev",
  },
]

export const allProjects = [...featuredProjects, ...otherProjects]

export const testimonials: Testimonial[] = [
  {
    name: "Ervin Pangilinan",
    title: "Senior Software Engineer",
    testimonial:
      "Trevor led our Next.js and React upgrades with minimal disruption and drove the migration to Azure with a clear, well-executed plan. His ability to manage infrastructure changes while keeping the team aligned made a real impact on our development workflow.",
    companyLogo: "/testimonials/heqs.jpg",
  },
  {
    name: "Clen Thon Guzarem",
    title: "SEO/Marketing Specialist",
    testimonial:
      "Trevor implemented the SEO metadata system and conversion tracking that directly improved our search rankings and ad performance. His technical expertise made it easy to collaborate on marketing initiatives, and he always delivered exactly what was needed.",
    companyLogo: "/testimonials/heqs.jpg",
  },
  {
    name: "Fredrick Widjaya",
    title: "Lead Software Engineer",
    testimonial:
      "Trevor is a reliable team member who delivers efficient solutions and focuses on quality. His collaboration and work ethic have been valuable to our projects, and he consistently brings a thoughtful approach to solving technical challenges under tight deadlines.",
    companyLogo: "/testimonials/futurisen.webp",
  },
  {
    name: "Jeffrey Widjaya",
    title: "Quality Assurance",
    testimonial:
      "Trevor is detail-oriented and ensures high software quality. His thorough testing and commitment to catching edge cases have been key to maintaining system stability across multiple releases.",
    companyLogo: "/testimonials/futurisen.webp",
  },
  {
    name: "Kiran Kumar",
    title: "Lead Software Engineer",
    testimonial:
      "Trevor is dedicated and skilled at optimizing processes. He tackles challenges effectively and contributes positively to the team’s success, always willing to go the extra mile to ensure deliverables meet the highest standards.",
    companyLogo: "/testimonials/wipro.svg",
  },
  {
    name: "Vysakh Shaji",
    title: "Senior Software Engineer",
    testimonial:
      "Trevor is a practical and focused developer. His work on integrating REST APIs and streamlining workflows has directly improved project outcomes, and he brings a calm, solution-oriented mindset to every task.",
    companyLogo: "/testimonials/infosys.svg",
  },
]

export const quotes: Quote[] = [
  {
    quote:
      "It's OK to figure out murder mysteries, but you shouldn't need to figure out code. You should be able to read it.",
    author: "Steve C McConnell",
  },
  {
    quote: "God is real, unless declared integer.",
    author: "Anonymous",
  },
  {
    quote:
      "Pasting code from the internet into production code is like chewing gum found in the street.",
    author: "Mike Johnson",
  },
  {
    quote:
      "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.",
    author: "Christopher Thompson",
  },
  {
    quote: "Software is like sex: it's better when it's free.",
    author: "Linus Thorvalds",
  },
  {
    quote:
      "Commenting your code is like cleaning your bathroom - you never want to do it, but it really does create a more pleasant experience for you and your guests.",
    author: "Ryan Campbell",
  },
  {
    quote: "I don't care if it works on your machine! We are not shipping your machine!",
    author: "Vidiu Platon",
  },
  {
    quote: 'A SQL query walks into a bar. He approaches two tables and says, "Mind if I join you?"',
    author: "Anonymous",
  },
  {
    quote: "Why do programmers prefer dark mode? Because light attracts bugs.",
    author: "Anonymous",
  },
  {
    quote: "I can fix the world but they won't give me the source code.",
    author: "Anonymous",
  },
]
