import { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  Container,
  Form,
  Button,
  Offcanvas,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { BtnLogin } from "../Buttons/ButtonElements";
import fi_logo from "../../assets/images/imgLogo.png";
import fi_search from "../../assets/icons/fi_search-bar.svg";
import fi_login from "../../assets/icons/fi_log-in.svg";
import fi_list from "../../assets/icons/fi_list.svg";
import fi_bell from "../../assets/icons/fi_bell.svg";
import fi_user from "../../assets/icons/fi_user.svg";
import style from "./navbar.module.css";

function NavbarMenu() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    token ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, [token]);

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
    window.location.reload();
    console.log("udah logout");
  };

  const listMenu = (
    <img src={fi_list} alt="fi_list" style={{ width: "24px" }} />
  );
  const notif = <img src={fi_bell} alt="fi_bell" style={{ width: "24px" }} />;
  const user = <img src={fi_user} alt="fi_user" style={{ width: "24px" }} />;
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
                  style={{
                    border: "none",
                    borderRadius: "16px",
                    boxShadow: "none",
                  }}
                  aria-label="Cari di sini .."
                />
                <Button
                  variant="link"
                  style={{ borderRadius: "16px", boxShadow: "none" }}
                >
                  <img src={fi_search} alt="" />
                </Button>
              </Form>
              {!isLoggedIn ? (
                <Nav className="justify-content-end flex-grow-1">
                  <Link to="/login">
                    <BtnLogin className={style.button}>
                      <p className={style.btnText}>
                        <img src={fi_login} alt="" />
                        &nbsp; Masuk
                      </p>
                    </BtnLogin>
                  </Link>
                </Nav>
              ) : (
                <Nav className="justify-content-end flex-grow-1 mt-2">
                  <NavDropdown
                    title={listMenu}
                    id={`offcanvasNavbarDropdown-expand-lg`}
                  >
                    <NavDropdown.Item href="/daftar-jual">
                      Product
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title={notif}
                    id={`offcanvasNavbarDropdown-expand-lg`}
                  >
                    <NavDropdown.Item>Notif</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title={user}
                    id={`offcanvasNavbarDropdown-expand-lg`}
                  >
                    <NavDropdown.Item href="/edit-profile">
                      User Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              )}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarMenu;
