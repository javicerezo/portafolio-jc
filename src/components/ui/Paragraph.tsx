interface ParagraphProps  {
    text: string;
}

export const Paragraph = ({ text }: ParagraphProps) => {
    return (
        <p className="Paragraph">{text}</p>
    );
};