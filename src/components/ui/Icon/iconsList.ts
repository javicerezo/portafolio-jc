import type { IconKey } from "./iconsMap";

export interface IconList {
    languageName: string;   // Ej: react (el nombre del lenguaje que trae desde la API)
    textTooltip: string;    // Ej: ReactJs (el texto que muestra al hacer clic en el icono)
    icon: IconKey;          // Ej: SiReact
    color: string;
};

export const IconsList: IconList[] = [
    {
        languageName: "java",
        textTooltip: "Java",
        icon: "FaJava",
        color: "#E34F26"
    },
    {
        languageName: "kotlin",
        textTooltip: "Kotlin",
        icon: "SiKotlin",
        color: "#7F52FF"
    },
    {
        languageName: "flutter",
        textTooltip: "Flutter",
        icon: "SiFlutter",
        color: "#02569B"
    },
    {
        languageName: "react-native",
        textTooltip: "React Native",
        icon: "SiReact",
        color: "#2E97B4"
    },
    {
        languageName: "android-studio",
        textTooltip: "Android Studio",
        icon: "SiAndroidstudio",
        color: "#3DDC84"
    },
    {
        languageName: "html",
        textTooltip: "HTML5",
        icon: "SiHtml5",
        color: "#E34F26"
    },
    {
        languageName: "css",
        textTooltip: "CSS3",
        icon: "SiCss3",
        color: "#264DE4"
    },
    {
        languageName: "scss",
        textTooltip: "SCSS",
        icon: "SiSass",
        color: "#CC6699"
    },
    {
        languageName: "tailwind",
        textTooltip: "Tailwind",
        icon: "SiTailwindcss",
        color: "#06B6D4"
    },
    {
        languageName: "astro",
        textTooltip: "Astro",
        icon: "SiAstro",
        color: "#FF5D01"
    },
    {
        languageName: "gulp",
        textTooltip: "Gulp",
        icon: "SiGulp",
        color: "#CF4647"
    },
    {
        languageName: "javaScript",
        textTooltip: "JavaScript",
        icon: "SiJavascript",
        color: "#F7DF1E"
    },
    {
        languageName: "typeScript",
        textTooltip: "TypeScript",
        icon: "SiTypescript",
        color: "#3178C6"
    },
    {
        languageName: "react",
        textTooltip: "ReactJS",
        icon: "SiReact",
        color: "#61DAFB"
    },
    {
        languageName: "vite",
        textTooltip: "Vite",
        icon: "SiVite",
        color: "#646CFF"
    },
    {
        languageName: "nodejs",
        textTooltip: "NodeJs",
        icon: "SiNodedotjs",
        color: "#5FA04E"
    },
    {
        languageName: "nextjs",
        textTooltip: "NextJS",
        icon: "SiNextdotjs",
        color: "#000"
    },
    {
        languageName: "express",
        textTooltip: "ExpressJs",
        icon: "SiExpress",
        color: "#E5E7EB"
    },
    {
        languageName: "pug",
        textTooltip: "Pug",
        icon: "SiPug",
        color: "#A86454"
    },
    {
        languageName: "mysql",
        textTooltip: "MySQL",
        icon: "SiMysql",
        color: "#4479A1"
    },
    {
        languageName: "postgresql",
        textTooltip: "PostgreSQL",
        icon: "SiPostgresql",
        color: "#4169E1"
    },
    {
        languageName: "firebase",
        textTooltip: "Firebase",
        icon: "SiFirebase",
        color: "#DD2C00"
    },
    {
        languageName: "netlify",
        textTooltip: "Netlify",
        icon: "SiNetlify",
        color: "#00C7B7"
    },
    {
        languageName: "api-rest",
        textTooltip: "Api Rest",
        icon: "TbApi",
        color: "#4B5563"
    },
    {
        languageName: "railway",
        textTooltip: "Railway",
        icon: "SiRailway",
        color: "#0B0D0E"
    },
    {
        languageName: "cypress",
        textTooltip: "Cypress",
        icon: "SiCypress",
        color: "#04C38E"
    },
    {
        languageName: "react-testing-library",
        textTooltip: "React Testing Library",
        icon: "SiTestinglibrary",
        color: "#E33332"
    },
];