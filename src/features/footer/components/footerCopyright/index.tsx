import "./footerCopyright.css";

interface FooterCopyrightProps {
    brandName: string;
}

const FooterCopyright: React.FC<FooterCopyrightProps> = ({ brandName }) => {
    return (
        <div className="footer__copyright">
            <small>&copy; {brandName}. All rights reserved.</small>
        </div>
    );
};

export default FooterCopyright;
