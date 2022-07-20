import { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  Container,
  Form,
  Button,
  Offcanvas,
  NavDropdown,
  Row,
  Col,
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
import Notifikasi from "../Notification/Notifikasi";
import { useNavigate } from "react-router-dom";

function NavbarMenu() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [search, setSearch] = useState("");
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  function handleSearch() {
    navigate("/produk", {
      state: { search: search },
    });
  }

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
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <Button
                  variant="link"
                  style={{ borderRadius: "16px", boxShadow: "none" }}
                  onClick={handleSearch}
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
                  <Row>
                    <Col>
                      <NavDropdown
                        title={listMenu}
                        id={`offcanvasNavbarDropdown-expand-lg`}
                      >
                        <NavDropdown.Item href="/daftar-jual">
                          Produk
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/daftar-order">
                          Order
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Col>
                    <Col>
                      <Notifikasi />
                    </Col>
                    <Col>
                      <NavDropdown
                        title={user}
                        id={`offcanvasNavbarDropdown-expand-lg`}
                      >
                        <NavDropdown.Item href="/edit-profile">
                          Info Akun
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={logout}>
                          Keluar
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Col>
                  </Row>
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
