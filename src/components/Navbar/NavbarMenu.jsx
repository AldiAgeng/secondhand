import { Navbar, Nav, Container, Form, Button, Offcanvas, NavDropdown } from 'react-bootstrap';
import fi_logo from "../../assets/images/imgLogo.png";
import fi_search from "../../assets/icons/fi_search-bar.svg";
import fi_list from "../../assets/icons/fi_list.svg";
import fi_bell from "../../assets/icons/fi_bell.svg";
import fi_user from "../../assets/icons/fi_user.svg";
import style from "./navbar.module.css";

function NavbarMenu() {
    const listMenu = (
        <img
            src={fi_list}
            alt="fi_list"
            style={{ width: "24px"}}
        />
    )
    const notif = (
        <img
            src={fi_bell}
            alt="fi_bell"
            style={{ width: "24px"}}
        />
    )
    const user = (
        <img
            src={fi_user}
            alt="fi_user"
            style={{ width: "24px"}}
        />
    )
    return (
        <>
            <Navbar expand="lg" className={style.navbar} fixed="top">
                <Container>
                    <Navbar.Brand href="/">
                        <img className={style.logo} src={fi_logo} />
                    </Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-lg`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
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
                            <Nav className="justify-content-end flex-grow-1 mt-2">
                                <NavDropdown title={listMenu} id={`offcanvasNavbarDropdown-expand-lg`}>
                                    <NavDropdown.Item href="/daftar-jual">Product</NavDropdown.Item>
                                    <NavDropdown.Item href="/order">Order</NavDropdown.Item>
                                    <NavDropdown.Item href="/history">History</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title={notif} id={`offcanvasNavbarDropdown-expand-lg`}>
                                    <NavDropdown.Item>Notif</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title={user} id={`offcanvasNavbarDropdown-expand-lg`}>
                                    <NavDropdown.Item href="/edit-profile">User Profile</NavDropdown.Item>
                                    <NavDropdown.Item>Logout</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarMenu;