interface ParagraphProps  {
    text: string | undefined;
}

export const Paragraph = ({ text }: ParagraphProps) => {
    return (
        <p className="Paragraph">{text}</p>
    );
};