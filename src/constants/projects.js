import connectify from '../assets/images/Projects/connectify.jfif';
import eshop from '../assets/images/Projects/eshop.png';
import houseprice from '../assets/images/Projects/houseprice.jfif';
import disney from '../assets/images/Projects/disney.jfif';
import bloodBank from '../assets/images/Projects/bloodbank.webp';
import bookmark from "../assets/images/Projects/bookmark.jfif";
import portfolio from '../assets/images/Projects/portfolio.jpg';

import {
    SiBootstrap,
    SiCss3,
    SiExpress,
    SiJavascript,
    SiJupyter,
    SiMongodb,
    SiMysql,
    SiNodedotjs,
    SiNumpy,
    SiPandas,
    SiPhp,
    SiPython,
    SiReact,
    SiRedux,
    SiScikitlearn,
    SiTailwindcss,
    SiVite
} from "react-icons/si";
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { MdScatterPlot } from 'react-icons/md';

export const PROJECTS = [
  {
    id: "project-01",
    title: "Connectify",
    github: "",
    link: "",
    image: connectify,
    content:
      "Social Media website! Built with ReaxtJs, ExpressJs, NodeJs, MongoDB.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiExpress,
        name: "ExpressJs"
      },
      {
        id: "icon-3",
        icon: SiMongodb,
        name: "MongoDB"
      },
      {
        id: "icon-4",
        icon: SiNodedotjs,
        name: "NodeJs"
      },
      {
        id: "icon-5",
        icon: SiTailwindcss,
        name: "Tailwind css"
      }
    ],
  },
  {
    id: "project-02",
    title: "E-Shopping Website",
    github: "https://github.com/deepakkumar1211/E-Shopping-Website",
    link: "",
    image: eshop,
    content:
      "Developed a Full Stack E-commerce website with Store and Admin dashboard! wheather user can buy electronic items such as Mobile and Television",
    stack: [
      {
        id: "icon-1",
        icon: AiFillHtml5,
        name: "HTML"
      },
      {
        id: "icon-2",
        icon: DiCss3,
        name: "CSS"
      },
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "JavaScript"
      },
      {
        id: "icon-4",
        icon: SiPhp,
        name: "PHP"
      },
      {
        id: "icon-5",
        icon: SiMysql,
        name: "MySQL"
      },
      {
        id: "icon-6",
        icon: SiBootstrap,
        name: "Boostrap"
      },
    ],
  },
  {
    id: "project-03",
    title: " House Price Prediction",
    github: "https://github.com/deepakkumar1211/house-price-prediction",
    link: "https://house-price-prediction.onrender.com/",
    image: houseprice,
    content:
      "Developed a predictive model to estimate house prices based on various features like location,size, number of rooms, etc",
    stack: [
      {
        id: "icon-1",
        icon: SiPython,
        name: "Python"
      },
      {
        id: "icon-2",
        icon: SiNumpy,
        name: "Numpy"
      },
      {
        id: "icon-3",
        icon: SiPandas,
        name: "Pandas"
      },
      {
        id: "icon-4",
        icon: SiScikitlearn,
        name: "Sk-Learn"
      },
      {
        id: "icon-4",
        icon: MdScatterPlot,
        name: "Matplotlib"
      },
      // {
      //   id: "icon-4",
      //   icon: GiMachineGun,
      //   name: "Seaborn"
      // },
      {
        id: "icon-4",
        icon: SiJupyter,
        name: "Jupyter Notebook"
      },
    ],
  },
  {
    id: "project-04",
    title: "Disney+ Hotstar Clone",
    github: "",
    link: "",
    image: disney,
    content:
      "Clone of Disney+ Hotstar build by HTML, CSS & JavaScript ✨.",
    stack: [
      {
        id: "icon-1",
        icon: AiFillHtml5,
        name: "HTML"
      },
      {
        id: "icon-2",
        icon: DiCss3,
        name: "CSS"
      },
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "JavaScript"
      },
    ],
  },
  {
    id: "project-05",
    title: "Bookmark App",
    github: "",
    link: "",
    image: bookmark,
    content:
      "A full-stack web application that allows user to bookmark their favorite or frqunetly used website at one place without having it to search it again and again. ",
    stack: [
      {
        id: "icon-1",
        icon: SiMongodb,
        name: "MongoDB"
      },
      {
        id: "icon-2",
        icon: AiFillHtml5,
        name: "HTML"
      },
      {
        id: "icon-3",
        icon: SiCss3,
        name: "CSS"
      },
      {
        id: "icon-4",
        icon: SiReact,
        name: "React"
      },
    ],
  },
  {
    id: "project-8",
    title: "Personal Portfolio",
    github: "",
    link: "",
    image: portfolio,
    content:
      "Personal portfolio website with React and Tailwind CSS.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "Tailwind CSS"
      },
      {
        id: "icon-3",
        icon: SiCss3,
        name: "CSS"
      },
    ],
  },
]