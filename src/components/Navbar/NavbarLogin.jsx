import { Navbar, Nav, NavDropdown, Container, Form, Button, Offcanvas } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { BtnLogin } from "../Buttons/ButtonElements";
import fi_login from "../../assets/icons/fi_log-in.svg";
import fi_logo from "../../assets/images/imgLogo.png";
import fi_search from "../../assets/icons/fi_search-bar.svg";
import style from "./navbar.module.css";

function NavbarLogin() {
    return (
        <>
            <Navbar expand="lg" className={style.navbar} fixed="top">
                <Container>
                    <Navbar.Brand href="/">
                        <img className={style.logo} src={fi_logo} />
                    </Navbar.Brand>
                    <Navbar.Toggle className="mt-2" aria-controls={`offcanvasNavbar-expand-md`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-md`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                                TokoKu
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Form className={style.formSearch}>
                                <Form.Control
                                    type="search"
                                    placeholder="Cari di sini .."
                                    className={style.formInput}
                                    style={{border: "none", borderRadius: "16px", boxShadow: "none"}}
                                    aria-label="Cari di sini .."
                                />
                                <Button variant="link" style={{borderRadius: "16px", boxShadow: "none"}}>
                                    <img src={fi_search} alt="" />
                                </Button>
                            </Form>
                            <Nav className="justify-content-end flex-grow-1">
                                <Link to="/login">
                                    <BtnLogin className={style.button}>
                                        <p className={style.btnText}><img src={fi_login} alt="" />&nbsp; Masuk</p>
                                    </BtnLogin>
                                </Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarLogin;