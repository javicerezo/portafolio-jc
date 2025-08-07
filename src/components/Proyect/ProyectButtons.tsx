import { useLanguage } from "../../utils/hooks/useLanguage";

interface ProyectButtonProps {
    html_url: string;
    homepage: string;
    isButtonModal: boolean;
}

export const ProyectButtons = ({html_url, homepage, isButtonModal}: ProyectButtonProps)=> {
    const { t } = useLanguage();

    return (
        <div className={isButtonModal ? "ProyectButtons ProyectButtons--mod" : "ProyectButtons"}>
            <a className={isButtonModal ? "ProyectButtons-button ProyectButtons-button--mod" : "ProyectButtons-button"} href={html_url} target="_blank">{t.proyect_code}</a>
            <a className={isButtonModal ? "ProyectButtons-button ProyectButtons-button--mod" : "ProyectButtons-button"} href={homepage} target="_blank">{t.proyect_site}</a>
        </div>
    );
}