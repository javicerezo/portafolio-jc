import type { ButtonCVProps } from "../../utils/types/buttonCV";

export const ButtonCV = ({text}: ButtonCVProps) => {
    return (
        <a className="ButtonCV" href="/assets/cv_JC.pdf" download>📄 {text}</a>
    );
}