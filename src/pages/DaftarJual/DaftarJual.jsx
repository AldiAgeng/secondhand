import { useState, useEffect } from "react";
import { Container, Row, Col, ListGroup, Card } from "react-bootstrap";
import { NavbarMenu, CardProduct, Footers } from "../../components";
import { BtnPrimary } from "../../components/Buttons/ButtonElements";
import { Link } from "react-router-dom";
import toRupiah from "@develoka/angka-rupiah-js";
import imgContent from "../../assets/images/imgContent.png";
import fi_box from "../../assets/icons/fi_box.svg";
import fi_heart from "../../assets/icons/fi_heart.svg";
import fi_dollar from "../../assets/icons/fi_dollar-sign.svg";
import fi_chevron from "../../assets/icons/fi_chevron-right.svg";
import fi_plus from "../../assets/icons/fi_plus.svg";
import style from "./daftarjual.module.css";
import axios from "axios";

function Daftarjual() {
  const [users, setUsers] = useState("");
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [buttons, setButtons] = useState("");
  const imgUser =
    "https://tokoku-api.herokuapp.com/uploads/users/" + users.picture;
  const imgProduct = "https://tokoku-api.herokuapp.com/uploads/products/";

  const handleButton = (e) => setButtons(e.target.innerText);
  console.log(buttons, "data btn");

  const whoami = () => {
    axios
      .get(`https://tokoku-api.herokuapp.com/api/v1/auth/user`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setUsers(response.data.data);
        console.log(response.data.data, "data");
        // console.log(localStorage.getItem('token'));
      });
  };

  const getProductSeller = () => {
    axios
      .get(`https://tokoku-api.herokuapp.com/api/v1/seller/product`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setProducts(response.data.data);
        console.log(response.data.data, "data product");
        // console.log(localStorage.getItem('token'));
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
        // console.log(localStorage.getItem('token'));
      });
  };
  console.log(orders, "data order");

  useEffect(() => {
    whoami();
    getProductSeller();
    getOrderSeller();
  }, []);

  return (
    <>
      <NavbarMenu />
      <Container className={style.main}>
        <h3 className={style.titleText}>Daftar Jual Saya</h3>
        <div className={style.profileBox}>
          <div className="d-flex flex-row justify-content-center align-items-center">
            <img className={style.profileImg} src={imgUser} />
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
                      <a href="/add-product" className={style.addBtn}>
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
                                src={imgProduct + order.Product.picture}
                                alt={order.Product.picture}
                              />
                            </div>
                            <Card.Body className={style.bodyCard}>
                              <Card.Text className={style.titleText}>
                                {order.Product.name}
                              </Card.Text>
                              <Card.Text className={style.titleText}>
                                Rp{" "}
                                {/* {toRupiah(order.Product.price.toString(), {
                                  symbol: false,
                                  floatingPoint: 0,
                                  spaceBeforeUnit: true,
                                })} */}
                                {order.Product.price.toLocaleString("id-ID")}
                              </Card.Text>
                              <Card.Text className={style.titleText}>
                                Ditawar Rp{" "}
                                {/* {toRupiah(order.price.toString(), {
                                  symbol: false,
                                  floatingPoint: 0,
                                  spaceBeforeUnit: true,
                                })} */}
                                {order.price.toLocaleString("id-ID")}
                              </Card.Text>
                            </Card.Body>
                          </Card>
                        </Link>
                      );
                    })}
                  </div>
                );
              }
              if (buttons === "Terjual" && products.length === 0) {
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
              if (buttons === "Terjual") {
                if (products.length > 0) {
                  return (
                    <div className={style.cardList}>
                      {products.map((product) => {
                        if (product.status === "sold") {
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
                        }
                        // else {
                        //   return (
                        //     <div className={style.contentDiv}>
                        //       <img
                        //         className={style.imgContent}
                        //         src={imgContent}
                        //         alt=""
                        //       />
                        //       <h5 className={style.contentText}>
                        //         Belum ada produkmu yang terjual nih, <br />
                        //         sabar ya rejeki nggak kemana kok
                        //       </h5>
                        //     </div>
                        //   );
                        // }
                      })}
                    </div>
                  );
                } else {
                  return (
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
                  );
                }
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
