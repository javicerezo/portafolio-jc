interface ButtonCVProps {
    text: string;
}

export const ButtonCV = ({text}: ButtonCVProps) => {
    return (
        <a className="ButtonCV" href="/assets/cv_JC.pdf" download>📄 {text}</a>
    );
}