import React, { useState } from "react";
import { Tooltip } from "../Tooltip";

import { ICONS_MAP } from "./iconsMap";
import { IconsList } from "./iconsList";
import { FaQuestionCircle } from "react-icons/fa";

import type { IconType } from "react-icons";

import type { IconProps } from "../../../utils/types/icon";

/**
 * 
 * @param language: string, es el nombre del lenguaje para mostrar el icono
 * @returns retorna elun componente que es un icono de las tecnologías que se usan en programación
 */
export const Icon: React.FC<IconProps> = ( {language} ) => {
    const [ showTooltip, setShowTooltip ] = useState<boolean>(false);

    const iconObj = IconsList.find( obj => obj.languageName.toLocaleLowerCase() ===  language.toLocaleLowerCase())
    const IconComponent: IconType = iconObj ? ICONS_MAP[iconObj.icon] : FaQuestionCircle;
    const color = iconObj?.color ?? "#666";
    const textTooltip = iconObj?.textTooltip ?? language;

    return (
        <li className='Icon'>
            <IconComponent color={color} onClick={ () => (setShowTooltip(true))}/>
            {showTooltip && (
                <Tooltip 
                    text={textTooltip}
                    onClose={() => setShowTooltip(false)}/>
            )}
        </li>
    );
};