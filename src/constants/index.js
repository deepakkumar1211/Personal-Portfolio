import Hero_person from "../assets/images/Hero/main_comp.json";

export { SOCIAL_MEDIA } from './socialMedia';
export { SKILLS_LIST } from './skillsList';
export { EXPERIENCES } from './experience';
export { EDUCATION_LIST } from './education';
export { PROJECTS } from './projects';
export { OPEN_SOURCE_CONTRIBUTIONS } from './openSource';

export const RESUME_LINK = "#resume";
export const REPO_LINK = "https://github.com/deepakkumar1211/Portfolio";

export const CONTENT = {
    navs: [
        {
            link: "#home",
            title: "Home",
        },
        {
            link: "#skills",
            title: "Skills",
        },
        {
            link: "#education",
            title: "Education",
        },
        {
            link: "#projects",
            title: "Projects",
        },
        {
            link: "#experience",
            title: "Experience",
        },
        {
            link: "#resume",
            title: "Resume",
        },
        // {
        //     link: "#openSrc",
        //     title: "Open Source",
        // },
        {
            link: "#contact",
            title: "Contact Me",
        },
    ],
    hero: {
        title: `Hello,`,
        sub1: "there",
        sub2: "I am",
        firstName: "DEEPAK",
        middleName: "KUMAR",
        lastName: "SAHU",
        image: Hero_person,
        hero_content: [
            {
                count: "",
                text: "Developer based in India. Aspiring Software Development Engineer.",
            },
        ],
    },

    Footer: {
        text: "All © Copy Right Reserved 2025",
    },
};

export const ABOUT_ME = {
    name: "Deepak Kumar Sahu",
    tagLine: "Insanely ambitious coder | MERN Stack Developer | Open source contributor",
    intro: CONTENT.hero.hero_content.text
};
