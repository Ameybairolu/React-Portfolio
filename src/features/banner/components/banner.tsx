import { useState, useEffect, ReactElement } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "assets/img/header-img.svg";

const Banner: React.FC = (): ReactElement<any, any> => {
    const [loopNum, setLoopNum] = useState<number>(0);
    const [isDeleting, setIsDeleting] = useState<boolean>(false);
    const toRotate = ["Front-end Web Developer", "Web Designer", "UI/UX Designer"];
    const [text, setText] = useState<string>("");
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    const tick = (): void => {
        const i = loopNum % toRotate.length;
        const fullText = toRotate[i];
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
                            Hi I&apos;m Amey Bairolu <span className="wrap">{text}</span>
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium fuga temporibus, nihil
                            voluptate at architecto! Dignissimos praesentium excepturi, earum minus molestiae quo rerum
                            porro saepe voluptas eligendi non tempora. Minus!
                        </p>
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
