import {AiOutlineGithub, AiOutlineHtml5, AiOutlineLinkedin, AiOutlineMail} from "react-icons/ai";
import {IoLogoJavascript} from "react-icons/io";
import {DiMongodb, DiSass} from "react-icons/di"
import {FaCss3Alt, FaNodeJs, FaReact} from "react-icons/fa"
import {SiTypescript, SiTailwindcss} from "react-icons/si"

export const skills = [
    {
        name: "HTML",
        icon: <AiOutlineHtml5/>
    },
    {
        name: "CSS",
        icon: <FaCss3Alt/>
    },
    {
        name: "JavaScript",
        icon: <IoLogoJavascript/>
    },
    {
        name: "Sass",
        icon: <DiSass/>
    },
    {
        name: "Tailwind",
        icon: <SiTailwindcss/>
    },
    {
        name: "React",
        icon: <FaReact/>
    },
    {
        name: "NodeJS",
        icon: <FaNodeJs/>
    },
    {
        name: "MongoDB",
        icon: <DiMongodb/>
    },
    {
        name: "TypeScript",
        icon: <SiTypescript/>
    }
]

export const contactInfo = [
    {
        "name" : "E-mail",
        "link": "salopekjelena24@gmail.com",
        "icon": <AiOutlineMail/>,
        "linkName": "salopekjelena24@gmail.com"
    },
    {
        "name": "LinkedIn",
        "link": "https://www.linkedin.com/in/jelena-salopek/",
        "icon": <AiOutlineLinkedin/>,
        "linkName": "Check out my LinkedIn"
    },
    {
        "name": "GitHub",
        "link": "https://github.com/SalJelena",
        "icon": <AiOutlineGithub/>,
        "linkName": "Check out my GitHub"
    }
]
