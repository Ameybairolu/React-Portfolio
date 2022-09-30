import "./footerPermalinks.css";

interface FooterPermalinksProps {
    permalinksDetails: Array<{
        link: string;
        linkText: string;
    }>;
}

const FooterPermalinks: React.FC<FooterPermalinksProps> = ({ permalinksDetails }) => {
    return (
        <ul className="permalinks">
            {permalinksDetails.map((eachDetail, index) => (
                <li key={index}>
                    <a href={eachDetail.link}>{eachDetail.linkText}</a>
                </li>
            ))}
        </ul>
    );
};

export default FooterPermalinks;
