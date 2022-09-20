import { useState, useEffect, ReactElement } from "react";

import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

import headerImg from "assets/img/header-img.svg";

interface BannerProps {
    name: string;
    skills: string[];
    description: string;
}

const Banner: React.FC<BannerProps> = ({ name, skills, description }): ReactElement<any, any> => {
    const [loopNum, setLoopNum] = useState<number>(0);
    const [isDeleting, setIsDeleting] = useState<boolean>(false);
    const [text, setText] = useState<string>("");
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    const tick = (): void => {
        const i = loopNum % skills.length;
        const fullText = skills[i];
        const updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);
        setText(updatedText);
        if (isDeleting) {
            setDelta((prevDelta) => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    };

    useEffect(() => {
        const ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {
            clearInterval(ticker);
        };
    }, [text]);

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>
                            Hi I&apos;m {name} <span className="wrap">{text}</span>
                        </h1>
                        <p>{description}</p>
                        <button onClick={() => console.log("connect")}>
                            Let&apos;s connect <ArrowRightCircle size={25} />
                        </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Image" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;
