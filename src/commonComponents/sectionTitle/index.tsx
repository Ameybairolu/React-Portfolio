interface SectionTitleProps {
    minorTitle: string;
    majorTitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ minorTitle, majorTitle }) => {
    return (
        <>
            <h5>{minorTitle}</h5>
            <h2>{majorTitle}</h2>
        </>
    );
};

export default SectionTitle;
