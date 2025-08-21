import type { ParagraphProps } from "../../utils/types/paragraph"; 

export const Paragraph = ({ text }: ParagraphProps) => {
    return (
        <p className="Paragraph">{text}</p>
    );
};