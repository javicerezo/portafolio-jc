/**
 * type usando en cada icono que muestra una tecnología empleada
 */
import type { IconType } from "react-icons";
export interface IconProps {
    language: string;
    textTooltip?: string; 
    icon?: IconType;
    color?: string;
}

/**
 * type usado el array de la lista de iconos
 */
import type { IconKey } from "../../components/ui/Icon/iconsMap"; // importante importar el map de los iconos
export interface IconList {
    languageName: string;   // Ej: react (el nombre del lenguaje que trae desde la API)
    textTooltip: string;    // Ej: ReactJs (el texto que muestra al hacer clic en el icono)
    icon: IconKey;          // Ej: SiReact
    color: string;
};