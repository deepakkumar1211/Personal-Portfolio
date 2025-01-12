import {
  SiBootstrap,
  SiC,
  SiCss3,
  SiExpress,
  SiGit,
  SiHtml5,
  SiIntellijidea,
  SiJavascript,
  SiMysql,
  SiNetlify,
  SiPostman,
  SiPython,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiVisualstudiocode,
  SiVite,
  SiFirebase,
  SiTreehouse,
  SiCloudbees,
  SiMongodb,
  SiPhp,
  SiPostgresql,
  SiProbot,
  SiVercel,
  SiGooglecloud
} from "react-icons/si";
import { AiFillGithub } from 'react-icons/ai';
import { FaJava, FaNode } from 'react-icons/fa';

export const SKILLS_LIST = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-1",
        icon: FaJava,
        name: "JAVA",
      },
      {
        id: "pl-2",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "pl-3",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-4",
        icon: SiPhp,
        name: "PHP",
      },
      {
        id: "pl-5",
        icon: SiC,
        name: "C",
      },
      {
        id: "pl-6",
        icon: SiHtml5,
        name: "HTML",
      },
      {
        id: "pl-7",
        icon: SiCss3,
        name: "CSS",
      },
    ],
  },
  {
    title: "Frameworks/ Libraries",
    items: [
      {
        id: "f-1",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "f-2",
        icon: SiRedux,
        name: "Redux",
      },
      {
        id: "f-3",
        icon: SiExpress,
        name: "Express",
      },
      {
        id: "f-4",
        icon: FaNode,
        name: "NodeJS",
      },
      {
        id: "f-5",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "f-6",
        icon: SiBootstrap,
        name: "Bootstrap",
      }
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-2",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-3",
        icon: SiVisualstudiocode,
        name: "VS Code",
      },
      {
        id: "t-4",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-5",
        icon: SiNetlify,
        name: "Netlify",
      },
      {
        id: "t-6",
        icon: SiIntellijidea,
        name: "IntelliJ",
      },
      {
        id: "t-7",
        icon: SiVite,
        name: "ViteJS",
      },
      {
        id: "t-8",
        icon: SiFirebase,
        name: "Firebase",
      },
      {
        id: "t-9",
        icon: SiMongodb,
        name: "MongoDB Compass",
      },
      {
        id: "t-9",
        icon: SiVercel,
        name: "Vercel",
      },
      {
        id: "t-9",
        icon: SiGooglecloud,
        name: "Cloudinary",
      },
    ],
  },
  {
    title: "DataBases",
    items: [
      {
        id: "t-1",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-2",
        icon: SiMongodb,
        name: "MongoDB",
      },
      {
        id: "t-3",
        icon: SiPostgresql,
        name: "PostgreSQL",
      },
    ],
  },
  {
    title: "Other Skills",
    items: [
      {
        id: "t-1",
        icon: SiTreehouse,
        name: "Data Structure and Algorithms",
      },
      {
        id: "t-2",
        icon: SiCloudbees,
        name: "RESTful APIs",
      },
      {
        id: "t-3",
        icon: SiProbot,
        name: " Machine Learning",
      },
    ],
  },
]