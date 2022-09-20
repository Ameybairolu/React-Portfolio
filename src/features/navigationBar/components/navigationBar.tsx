import { ReactElement, useEffect, useState } from "react";

import { Navbar, Container, Nav } from "react-bootstrap";

import logo from "assets/img/logo.svg";

interface NavigationBarProps {
    linkOptions: Array<{ key: string; value: string }>;
    navIcons: string[];
    onLinkClick: (section: string) => void;
    activeLink: string | null;
}

const NavigationBar: React.FC<NavigationBarProps> = ({
    linkOptions,
    navIcons,
    onLinkClick,
    activeLink
}): ReactElement<any, any> => {
    const [scrolled, setScrolled] = useState<boolean>(false);

    useEffect(() => {
        const onScroll = (): void => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {linkOptions.map((eachLinkOption) => {
                            return (
                                <Nav.Link
                                    key={eachLinkOption.key}
                                    href={`#${eachLinkOption.key}`}
                                    className={activeLink === eachLinkOption.key ? "active navbar-link" : "navbar-link"}
                                    onClick={() => onLinkClick(eachLinkOption.key)}
                                >
                                    {eachLinkOption.value}
                                </Nav.Link>
                            );
                        })}
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            {navIcons.map((eachNavIcon, index) => (
                                <a key={index} href="#">
                                    <img src={eachNavIcon} alt="" />
                                </a>
                            ))}
                        </div>
                        <button className="vvd" onClick={() => console.log("connect")}>
                            <span>Let&apos;s Connect</span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
