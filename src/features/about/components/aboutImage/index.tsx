import "./aboutImage.css";

interface AboutImageProps {
    myPicture: string;
}

const AboutImage: React.FC<AboutImageProps> = ({ myPicture }) => {
    return (
        <div className="about__me">
            <div className="about__me-image">
                <img src={myPicture} alt="About" />
            </div>
        </div>
    );
};

export default AboutImage;
