import { useState, useEffect } from "react";
import { Container, Row, Col, ListGroup, Card } from "react-bootstrap";
import { NavbarMenu, CardProduct, Footers } from "../../components";
import { BtnPrimary } from "../../components/Buttons/ButtonElements";
import { Link, Navigate } from "react-router-dom";
import imgContent from "../../assets/images/imgContent.png";
import fi_box from "../../assets/icons/fi_box.svg";
import fi_heart from "../../assets/icons/fi_heart.svg";
import fi_dollar from "../../assets/icons/fi_dollar-sign.svg";
import fi_chevron from "../../assets/icons/fi_chevron-right.svg";
import fi_plus from "../../assets/icons/fi_plus.svg";
import style from "./daftarjual.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Daftarjual({ users }) {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [buttons, setButtons] = useState("");
  const [history, setHistory] = useState("");

  const handleButton = (e) => setButtons(e.target.innerText);
  const navigate = useNavigate();

  const getProductSeller = () => {
    axios
      .get(`https://tokoku-api.herokuapp.com/api/v1/seller/product`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setProducts(response.data.data);
      });
  };

  const getOrderSeller = () => {
    axios
      .get(`https://tokoku-api.herokuapp.com/api/v1/seller/order`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setOrders(response.data.product);
      });
  };

  const getHistory = async () => {
    await axios
      .get(`https://tokoku-api.herokuapp.com/api/v1/history`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setHistory(response.data.Seller);
      });
  };

  useEffect(() => {
    getProductSeller();
    getOrderSeller();
    getHistory();
  }, []);

  return (
    <>
      <NavbarMenu />
      <Container className={style.main}>
        <h3 className={style.titleText}>Daftar Jual Saya</h3>
        <div className={style.profileBox}>
          <div className="d-flex flex-row justify-content-center align-items-center">
            <img className={style.profileImg} src={users.picture} />
            <div className="pt-3 ps-3">
              <h5 className={style.nameText}>{users.name}</h5>
              <p className={style.addressText}>{users.city}</p>
            </div>
          </div>
          <Link to="/edit-profile">
            <BtnPrimary className={style.btnEdit}>Edit</BtnPrimary>
          </Link>
        </div>
        <Row>
          <Col md={3} className="mt-4 me-3">
            <div className={style.categoryBox}>
              <h5 className={style.categoryText}>Kategori</h5>
              <ListGroup className={style.categoryList}>
                <ListGroup.Item
                  className="border-0 px-0 mb-3"
                  onClick={handleButton}
                  type="button"
                >
                  <p className={style.listText}>
                    <img className="me-2" src={fi_box} />
                    Semua Produk
                    <img className="float-end" src={fi_chevron} />
                  </p>
                </ListGroup.Item>
                <ListGroup.Item
                  className="border-0 px-0 mb-3"
                  onClick={handleButton}
                  type="button"
                >
                  <p className={style.listText}>
                    <img className="me-2" src={fi_heart} />
                    Diminati
                    <img className="float-end" src={fi_chevron} />
                  </p>
                </ListGroup.Item>
                <ListGroup.Item
                  className="border-0 px-0"
                  onClick={handleButton}
                  type="button"
                >
                  <p className={style.listText}>
                    <img className="me-2" src={fi_dollar} />
                    Terjual
                    <img className="float-end" src={fi_chevron} />
                  </p>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
          <Col lg className="mx-auto mt-4">
            {(() => {
              if (buttons === "Semua Produk" || buttons === "") {
                return (
                  <div className={style.cardList}>
                    <div className={style.addBox}>
                      <a href="/tambah-produk" className={style.addBtn}>
                        <img src={fi_plus} alt="fi_plus" />
                        <p className="mt-2">Tambah Produk</p>
                      </a>
                    </div>
                    {products.map((product) => {
                      return (
                        <Link
                          style={{ textDecoration: "none", color: "black" }}
                          to={`/detail-produk/${product.id}`}
                        >
                          <div key={product.id}>
                            <CardProduct
                              id={product.id}
                              name={product.name}
                              price={product.price}
                              picture={product.picture}
                              category={product.CategoryProduct.name}
                            />
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                );
              }
              if (buttons === "Diminati" && orders.length === 0) {
                return (
                  <div className={style.cardList}>
                    <div className={style.contentDiv}>
                      <img
                        className={style.imgContent}
                        src={imgContent}
                        alt=""
                      />
                      <h5 className={style.contentText}>
                        Belum ada produkmu yang diminati nih, <br />
                        sabar ya rejeki nggak kemana kok
                      </h5>
                    </div>
                  </div>
                );
              }
              if (buttons === "Diminati" && orders !== []) {
                return (
                  <div className={style.cardList}>
                    {orders.map((order) => {
                      // if (order.status === "bid") {
                      return (
                        <Link
                          style={{ textDecoration: "none", color: "black" }}
                          to={`/info-penawar/${order.id}`}
                        >
                          <Card
                            className={style.productCard}
                            key={order.id}
                            type="button"
                          >
                            <div className={style.cardBox}>
                              <Card.Img
                                className={style.imgCard}
                                variant="top"
                                src={order.Product.picture}
                                alt={order.Product.picture}
                              />
                            </div>
                            <Card.Body className={style.bodyCard}>
                              <Card.Text className={style.titleText}>
                                {order.Product.name}
                              </Card.Text>
                              <Card.Text className={style.titleText}>
                                Rp {order.Product.price.toLocaleString("id-ID")}
                              </Card.Text>
                              <Card.Text className={style.titleText}>
                                Ditawar Rp {order.price.toLocaleString("id-ID")}
                              </Card.Text>
                            </Card.Body>
                          </Card>
                        </Link>
                      );
                      // }
                    })}
                  </div>
                );
              }
              if (buttons === "Terjual" && history.length === 0) {
                return (
                  <div className={style.cardList}>
                    <div className={style.contentDiv}>
                      <img
                        className={style.imgContent}
                        src={imgContent}
                        alt=""
                      />
                      <h5 className={style.contentText}>
                        Belum ada produkmu yang terjual nih, <br />
                        sabar ya rejeki nggak kemana kok
                      </h5>
                    </div>
                  </div>
                );
              }
              if (buttons === "Terjual" && history.length !== 0) {
                return (
                  <div className={style.cardList}>
                    {history.map((data) => {
                      return (
                        <Link
                          style={{ textDecoration: "none", color: "black" }}
                          to={`/detail-produk/${data.Product.id}`}
                        >
                          <Card
                            className={style.productCard}
                            key={data.Product.id}
                            type="button"
                          >
                            <div className={style.cardBox}>
                              <Card.Img
                                className={style.imgCard}
                                variant="top"
                                src={data.Product.picture}
                                alt={data.Product.picture}
                              />
                            </div>
                            <Card.Body className={style.bodyCard}>
                              <Card.Text className={style.titleText}>
                                {data.Product.name}
                              </Card.Text>
                              <Card.Text className={style.titleText}>
                                Rp {data.Product.price.toLocaleString("id-ID")}
                              </Card.Text>
                              <Card.Text className={style.titleText}>
                                Harga Akhir Rp{" "}
                                {data.price.toLocaleString("id-ID")}
                              </Card.Text>
                            </Card.Body>
                          </Card>
                        </Link>
                      );
                    })}
                  </div>
                );
              }
            })()}
          </Col>
        </Row>
      </Container>
      <Footers />
    </>
  );
}

export default Daftarjual;
