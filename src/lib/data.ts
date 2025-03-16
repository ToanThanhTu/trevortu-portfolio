import { Job, Project, Quote, Testimonial } from "@/lib/types"

export const experience: Job[] = [
  {
    title: "Web Developer",
    company: "Freelance",
    location: "Sydney, NSW",
    start_date: "2023",
    end_date: "Present",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis, turpis et consectetur consectetur, purus elit porta risus, nec tincidunt lorem ante quis metus. Ut in volutpat eros, eget sollicitudin leo.",
  },
  {
    title: "Senior Software Engineer",
    company: "InfoSys",
    location: "Sydney, NSW",
    start_date: "2021",
    end_date: "2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis, turpis et consectetur consectetur, purus elit porta risus, nec tincidunt lorem ante quis metus. Ut in volutpat eros, eget sollicitudin leo.",
  },
  {
    title: "Software Engineer",
    company: "Wipro",
    location: "Sydney, NSW",
    start_date: "2020",
    end_date: "2021",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis, turpis et consectetur consectetur, purus elit porta risus, nec tincidunt lorem ante quis metus. Ut in volutpat eros, eget sollicitudin leo.",
  },
]

export const featuredProjects: Project[] = [
  {
    title: "PI Padel Club",
    slug: "pi-padel-club",
    type: "Web Application",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis, turpis et consectetur consectetur, purus elit porta risus, nec tincidunt lorem ante quis metus.",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis, turpis et consectetur consectetur, purus elit porta risus, nec tincidunt lorem ante quis metus. Ut in volutpat eros, eget sollicitudin leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis, turpis et consectetur consectetur, purus elit porta risus, nec tincidunt lorem ante quis metus. Ut in volutpat eros, eget sollicitudin leo.",
    images: ["/pi-padel-club/main.webp", "/pi-padel-club/secondary-1.webp", "/pi-padel-club/secondary-2.webp"],
    width: 400,
    height: 400,
    url: "https://pi-padel.club",
  },
  {
    title: "CSA Landing Pages",
    slug: "csa-landing-pages",
    type: "Web Development",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis, turpis et consectetur consectetur, purus elit porta risus, nec tincidunt lorem ante quis metus.",
    longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis, turpis et consectetur consectetur, purus elit porta risus, nec tincidunt lorem ante quis metus. Ut in volutpat eros, eget sollicitudin leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis, turpis et consectetur consectetur, purus elit porta risus, nec tincidunt lorem ante quis metus. Ut in volutpat eros, eget sollicitudin leo.",
    images: ["/csa-landing-pages/main.webp", "/csa-landing-pages/secondary-1.webp", "/csa-landing-pages/secondary-2.webp"],
    width: 400,
    height: 600,
    url: "http://csa-landing.futurisen.com"
  },
  {
    title: "Bato Studio",
    slug: "bato-studio",
    type: "Web Development",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis, turpis et consectetur consectetur, purus elit porta risus, nec tincidunt lorem ante quis metus.",
    longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis, turpis et consectetur consectetur, purus elit porta risus, nec tincidunt lorem ante quis metus. Ut in volutpat eros, eget sollicitudin leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis, turpis et consectetur consectetur, purus elit porta risus, nec tincidunt lorem ante quis metus. Ut in volutpat eros, eget sollicitudin leo.",
    images: ["/bato-studio/main.webp", "/bato-studio/secondary-1.webp", "/bato-studio/secondary-2.webp"],
    width: 600,
    height: 300,
    url: "https://batostudio.com.au"
  },
  {
    title: "Rush Espresso Bar",
    slug: "rush-espresso-bar",
    type: "Web Development",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis, turpis et consectetur consectetur, purus elit porta risus, nec tincidunt lorem ante quis metus.",
    longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis, turpis et consectetur consectetur, purus elit porta risus, nec tincidunt lorem ante quis metus. Ut in volutpat eros, eget sollicitudin leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis, turpis et consectetur consectetur, purus elit porta risus, nec tincidunt lorem ante quis metus. Ut in volutpat eros, eget sollicitudin leo.",
    images: ["/rush-espresso-bar/main.webp", "/rush-espresso-bar/secondary-1.webp", "/rush-espresso-bar/secondary-2.webp"],
    width: 400,
    height: 600,
    url: "https://rush-espresso-bar.vercel.app"
  },
]

export const otherProjects: Project[] = [
  {
    title: "Next Net Shop",
    slug: "next-net-shop",
    type: "Full Stack Development",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis, turpis et consectetur consectetur, purus elit porta risus, nec tincidunt lorem ante quis metus.",
    longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis, turpis et consectetur consectetur, purus elit porta risus, nec tincidunt lorem ante quis metus. Ut in volutpat eros, eget sollicitudin leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis, turpis et consectetur consectetur, purus elit porta risus, nec tincidunt lorem ante quis metus. Ut in volutpat eros, eget sollicitudin leo.",
    images: ["/next-net-shop/main.webp", "/next-net-shop/secondary-1.webp", "/next-net-shop/secondary-2.webp"],
    width: 600,
    height: 300,
    url: "https://nextnetshop-h0frhvgkfuh3fzbb.australiaeast-01.azurewebsites.net"
  },
  {
    title: "TODO App",
    slug: "todo-app",
    type: "Full Stack Development",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis, turpis et consectetur consectetur, purus elit porta risus, nec tincidunt lorem ante quis metus.",
    longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis, turpis et consectetur consectetur, purus elit porta risus, nec tincidunt lorem ante quis metus. Ut in volutpat eros, eget sollicitudin leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis, turpis et consectetur consectetur, purus elit porta risus, nec tincidunt lorem ante quis metus. Ut in volutpat eros, eget sollicitudin leo.",
    images: ["/todo-app/main.webp", "/todo-app/secondary-1.webp", "/todo-app/secondary-2.webp"],
    width: 400,
    height: 400,
    url: "https://todoapp-backend.fly.dev"
  },
]

export const allProjects = [...featuredProjects, ...otherProjects]

export const testimonials: Testimonial[] = [
    {
      name: "Fredrick Widjaya",
      title: "Lead Software Engineer",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget nisi id libero luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget nisi id libero luctus.",
      companyLogo: "/testimonials/futurisen.webp",
    },
    {
      name: "Kiran Kumar",
      title: "Lead Software Engineer",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget nisi id libero luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget nisi id libero luctus.",
      companyLogo: "/testimonials/wipro.svg",
    },
    {
      name: "Vysakh Shaji",
      title: "Senior Software Engineer",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget nisi id libero luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget nisi id libero luctus.",
      companyLogo: "/testimonials/infosys.svg",
    },
    {
      name: "Jeffrey Widjaya",
      title: "Quality Assurance",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget nisi id libero luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget nisi id libero luctus.",
      companyLogo: "/testimonials/futurisen.webp",
    },
  ]

export const quotes: Quote[] = [
  {
    quote: "It's OK to figure out murder mysteries, but you shouldn't need to figure out code. You should be able to read it.",
    author: "Steve C McConnell"
  },
  {
    quote: "God is real, unless declared integer.",
    author: "Anonymous"
  },
  {
    quote: "Pasting code from the internet into production code is like chewing gum found in the street.",
    author: "Mike Johnson"
  },
  {
    quote: "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.",
    author: "Christopher Thompson"
  },
  {
    quote: "Software is like sex: it's better when it's free.",
    author: "Linus Thorvalds"
  },
  {
    quote: "Commenting your code is like cleaning your bathroom - you never want to do it, but it really does create a more pleasant experience for you and your guests.",
    author: "Ryan Campbell"
  },
  {
    quote: "I don't care if it works on your machine! We are not shipping your machine!",
    author: "Vidiu Platon"
  },
  {
    quote: 'A SQL query walks into a bar. He approaches two tables and says, "Mind if I join you?"',
    author: "Anonymous"
  },
  {
    quote: "Why do programmers prefer dark mode? Because light attracts bugs.",
    author: "Anonymous"
  },
  {
    quote: "I can fix the world but they won't give me the source code.",
    author: "Anonymous"
  },
]