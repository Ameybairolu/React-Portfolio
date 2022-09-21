import { ReactElement } from "react";
import CV from "assets/cv.pdf";

const CTA = (): ReactElement<any, any> => {
    return (
        <div className="cta">
            <a href={CV} download className="btn">
                Download CV
            </a>
            <a href="#contact" className="btn btn-primary">
                Let&apos;s Talk
            </a>
        </div>
    );
};

export default CTA;
