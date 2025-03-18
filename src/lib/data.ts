import { Job, Project, Quote, Testimonial } from "@/lib/types"

export const experience: Job[] = [
  {
    title: "Web Developer",
    company: "Freelance",
    location: "Sydney, NSW",
    start_date: "2023",
    end_date: "Present",
    description:
      "Built responsive, high-performance web applications for clients using React, Next.js, and TypeScript, ensuring seamless user experiences across all devices. Collaborated closely with clients to understand their needs, develop intuitive UIs, and integrate RESTful APIs for dynamic data handling.",
  },
  {
    title: "Senior Software Engineer",
    company: "InfoSys",
    location: "Sydney, NSW",
    start_date: "2021",
    end_date: "2023",
    description:
      "Participated in the entire software development lifecycle, designing and implementing key system features, optimizing performance, and ensuring seamless integrations. Collaborated with cross-functional teams to deliver high-quality, scalable software solutions on time, following Agile methodologies and rigorous testing.",
  },
  {
    title: "Software Engineer",
    company: "Wipro",
    location: "Sydney, NSW",
    start_date: "2020",
    end_date: "2021",
    description:
      "Streamlined application processes by designing user-friendly workflows and automating business tasks. Enhanced system functionality and performance through optimization and tailored solutions. Delivered actionable insights via reports and ensured software quality through testing and compliance with requirements.",
  },
]

export const featuredProjects: Project[] = [
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
    url: "https://nextnetshop-h0frhvgkfuh3fzbb.australiaeast-01.azurewebsites.net",
  },
  {
    title: "TODO App",
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
    name: "Fredrick Widjaya",
    title: "Lead Software Engineer",
    testimonial:
      "Trevor is a reliable team member who delivers efficient solutions and focuses on quality. Their collaboration and work ethic have been valuable to our projects.",
    companyLogo: "/testimonials/futurisen.webp",
  },
  {
    name: "Kiran Kumar",
    title: "Lead Software Engineer",
    testimonial:
      "Trevor is dedicated and skilled at optimizing processes. They tackle challenges effectively and contribute positively to the team’s success.",
    companyLogo: "/testimonials/wipro.svg",
  },
  {
    name: "Vysakh Shaji",
    title: "Senior Software Engineer",
    testimonial:
      "Trevor is a practical and focused developer. Their work has helped streamline workflows and improve project outcomes.",
    companyLogo: "/testimonials/infosys.svg",
  },
  {
    name: "Jeffrey Widjaya",
    title: "Quality Assurance",
    testimonial:
      "Trevor is detail-oriented and ensures high software quality. Their thorough testing has been key to maintaining system stability.",
    companyLogo: "/testimonials/futurisen.webp",
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
