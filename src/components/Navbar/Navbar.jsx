import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { BtnLogin } from "../Buttons/ButtonElements";
import fi_logo from "../../assets/images/imgLogo.png";
import fi_login from "../../assets/icons/fi_log-in.svg";
import fi_search from "../../assets/icons/fi_search-bar.svg";
import style from "./navbar.module.css";

function Navbars() {
    return (
        <Navbar className={style.navbar} expand="md" fixed="top">
            <Container className="ps-0">
                <Navbar.Brand href="/">
                    <img className={style.logo} src={fi_logo} />
                </Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav" className="d-flex justify-content-between">
                    <Nav>
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
                    </Nav>
                    <Link to="/login">
                        <BtnLogin>
                            <p className={style.btnText}><img src={fi_login} alt="" />&nbsp; Masuk</p>
                        </BtnLogin>
                    </Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navbars;