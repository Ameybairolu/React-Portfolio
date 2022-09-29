interface StyledAnchorProps {
    link: string;
    content: string;
}

const StyledAnchor: React.FC<StyledAnchorProps> = ({ link, content }) => {
    return (
        <a href={link} className="btn btn-primary">
            {content}
        </a>
    );
};

export default StyledAnchor;
