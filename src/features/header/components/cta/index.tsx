import "./cta.css";

import { ReactElement } from "react";

interface CTAProps {
    pdfDownload: any;
}

const CTA: React.FC<CTAProps> = ({ pdfDownload }): ReactElement<any, any> => {
    return (
        <div className="cta">
            <a href={pdfDownload} download className="btn">
                Download CV
            </a>
            <a href="#contact" className="btn btn-primary">
                Let&apos;s Talk
            </a>
        </div>
    );
};

export default CTA;
