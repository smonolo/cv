import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { XIcon } from "@/components/icons/XIcon";

export const RESUME_DATA = {
  name: "Stefano Monolo",
  initials: "SM",
  location: "Milan, Italy",
  locationLink: "https://www.google.com/maps/place/Milan",
  about:
    "Frontend Engineer with strong passion for creating beautiful and functional user interfaces.",
  summary:
    "Passionate and dedicated developer with expertise in building robust and user-friendly websites and web applications. I specialize in the development of modern and responsive user interfaces using technologies such as React, Vue, and TypeScript. With a solid understanding of software engineering principles and best practices, I strive to deliver high-quality code and exceptional user experiences.",
  avatarUrl: "https://avatars.githubusercontent.com/u/29622224?v=4",
  personalWebsiteUrl: "https://smnl.dev",
  contact: {
    email: "stefano@smnl.dev",
    tel: "+393917422284",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/smonolo",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/stemon/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/stmonolo",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Università degli Studi del Piemonte Orientale",
      degree: "Bachelor's Degree in Information Technology",
      start: "2023",
      end: "2026",
    },
    {
      school: "Liceo Scientifico Statale C. Cavalleri",
      degree: "High School Diploma in Applied Sciences",
      start: "2018",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Kampaay",
      link: "https://www.kampaay.com",
      badges: [],
      title: "Frontend Developer",
      start: "2023",
      end: "Present",
      description:
        "Built a platform for organizing corporate events easily and in an accessible way. Developed internal tools and panels to help employees manage events, customers and other data. Attended tech and product meetings and discussed engineering strategies. Contributed to defining development roadmaps by analysing tasks and issues, as well as finding the right solution for a specific problem.",
    },
    {
      company: "EVNT Games",
      link: "https://evnt.games",
      badges: ["Remote"],
      title: "Frontend Developer",
      start: "2022",
      end: "Present",
      description:
        "Redesigned and created promotional and internal websites and tools for projects organized by Twitch and other leaders of the gaming and entertainment industry. Helped designing new pages and interfaces. Create an analytics and listing website and Overwolf app in a month to compete in the UEFN market.",
    },
    {
      company: "Moonsworth, LLC",
      link: "https://www.moonsworth.com",
      badges: ["Remote"],
      title: "Frontend Developer",
      start: "2022",
      end: "2022",
      description:
        "Maintained and created UI libraries for websites and a game launcher used by 100k+ users every day. Built new features and helped improve internal tools. Worked closely with designers and contributed to invent user interfaces using design tools like Figma. Deployed private packages to GitHub Packages Registry.",
    },
    {
      company: "ESL Gaming",
      link: "https://esl.com",
      badges: ["Remote"],
      title: "Frontend Developer",
      start: "2020",
      end: "2021",
      description:
        "Redesigned a game launcher that's used by 50k+ users on a daily basis. Migrated the user interface to a completely new design system and integrated new features such as a client-side cheat detection software developed by ESEA. Also migrated various websites to Next and reorganized a monorepo containing a few projects.",
    },
    {
      company: "Top.gg",
      link: "https://top.gg",
      badges: ["Remote"],
      title: "Product Engineer",
      start: "2020",
      end: "2021",
      description:
        "Redesigned and migrated an Express-based website to React, used by thousands of users every day. In charge of maintaining websites, internal web-based tools and UI component libraries. Attended meetings with designers to give feedback on the new interface while it was in the works.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next",
    "Vue",
    "Nuxt",
    "Node.js",
  ],
  projects: [
    {
      title: "Settings Hunt",
      techStack: ["Lead Developer"],
      description:
        "Built a game settings sharing platform that allowed users to upload files and share them publicly. Created a network of content creators to improve engagement and site vists by sponsoring the product on gaming based streams and videos. Added ad-hoc guides to help users retrieve config files correctly for each game.",
    },
    {
      title: "Breeng",
      techStack: ["Product Owner"],
      description:
        "Led a team of 10 developers, designers, product managers and QA analysts to create an innovative job seeking platform available on the web, desktop and mobile. Organized internal meetings to discuss company-wise decisions and worked with lead developers to define a strategy for engineering and growth. Released updates every week and managed workload using Scrum.",
    },
    {
      title: "digicale",
      techStack: ["Product Owner"],
      description:
        "Led a team of 15 designers, product managers and developers that created various websites for remote and local companies. Built an account system with a dashboard to manage details, notifications, developer apps and more. Created a website for a local swimming team that allowed staff to post updates and documents.",
    },
  ],
} as const;
