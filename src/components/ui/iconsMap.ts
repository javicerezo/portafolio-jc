import type { IconType } from "react-icons";
import { SiHtml5, SiCss3, SiSass, SiJavascript, SiTypescript,
  SiReact, SiVite, SiNodedotjs, SiMysql , SiPostgresql, SiFirebase, 
  SiAndroidstudio, SiKotlin, SiPug, SiNetlify, SiAstro, SiTailwindcss, 
  SiFlutter, SiGulp, SiExpress, SiRailway,  
} from "react-icons/si";
import { FaJava, FaGithub, FaQuestionCircle } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { TbApi  } from "react-icons/tb";

// Mapa nombre -> componente
export const ICONS_MAP = {
  FaJava,
  FaGithub,
  RiLinkedinFill,
  SiHtml5,
  SiCss3,
  SiSass,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiVite,
  SiNodedotjs,
  SiPostgresql,
  SiFirebase,
  SiMysql,
  SiAndroidstudio,
  SiKotlin,
  SiPug,
  SiNetlify,
  SiAstro,
  SiTailwindcss,
  SiFlutter,
  SiGulp,
  SiExpress,
  TbApi,
  SiRailway,
  // fallback opcional accesible por nombre:
  FaQuestionCircle,
} satisfies Record<string, IconType>;

export type IconKey = keyof typeof ICONS_MAP;