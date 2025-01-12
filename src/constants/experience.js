import acm from '../assets/images/Experience/acm.png';
import internnovate from '../assets/images/Experience/internnovate.jfif'

import {
    SiJavascript,
    SiNodedotjs,
    SiReact,
    SiTailwindcss,
} from "react-icons/all";


export const EXPERIENCES = [
  {
    organisation: "Internnovate (Internship)",
    logo: internnovate,
    link: "https://www.linkedin.com/company/internnovate/?originalSubdomain=in",
    positions: [
      {
        title: "React js Developer Intern (Remote)",
        duration: "June 2024 - Sept 2024",
        content: [
          {
            text: "Developed dynamic frontend interfaces with React.js, enhancing user engagement and optimizing user interactions for the company.",
            tech: [
              {
                id: "f-1",
                icon: SiReact,
                name: "ReactJS",
              },
              {
                id: "f-2",
                icon: SiNodedotjs,
                name: "NodeJs",
              },
              {
                id: "f-4",
                icon: SiJavascript,
                name: "JavaScript",
              },
              {
                id: "f-5",
                icon: SiTailwindcss,
                name: "Tailwind CSS",
              }   
            ]
          },
        ],
      },
    ],
  },
  // {
  //   organisation: "ACM NITK",
  //   logo: acm,
  //   link: "https://github.com/TRI-NIT",
  //   positions: [
  //     {
  //       title: "Project Mentor",
  //       duration: "Jan 2023",
  //       content: [
  //         {
  //           text: "Mentored team on a 'Online code editor' project.",
  //           link: "https://github.com/Amruth-S05/Online-Code-Editor",
  //         },
  //       ],
  //     },
  //     {
  //       title: "DSA mentor",
  //       duration: "May 2022",
  //       content: [
  //         {
  //           text: "Mentored 30+ students in summer mentorship program on topic data structures and algorithms.",
  //           link: "",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Project Mentee",
  //       duration: "Jan-April 2022",
  //       content: [
  //         {
  //           text: "Analysed various games like Ludo, Mafia, Snake and Ladder in Python.",
  //           link: "",
  //           tech: [
  //             {
  //               id: "f-1",
  //               icon: SiPython,
  //               name: "Python"
  //             }
  //           ]
  //         },
  //       ],
  //     },
  //   ],
  // },
]