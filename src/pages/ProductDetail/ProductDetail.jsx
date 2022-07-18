import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Card, Row, Col } from "react-bootstrap";
import { NavbarMenu, BackButton, ModalTawar } from "../../components";
import { BtnPrimary } from "../../components/Buttons/ButtonElements";
import axios from "axios";
import style from "./productdetail.module.css";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

function ProductDetail() {
  const [sellers, setSellers] = useState("");
  const [users, setUsers] = useState("");
  const [products, setProducts] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const imgUser =
    "https://tokoku-api.herokuapp.com/uploads/users/" + users.picture;
  const imgProduct =
    "https://tokoku-api.herokuapp.com/uploads/products/" + products.picture;

  const whoami = () => {
    axios
      .get(`https://tokoku-api.herokuapp.com/api/v1/auth/user`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setSellers(response.data.data, "ress");
      });
  };
  const getProduct = async () => {
    await axios
      .get(`https://tokoku-api.herokuapp.com/api/v1/seller/product/${id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setUsers(response.data.data.User);
        setProducts(response.data.data);
        setPrice(response.data.data.price);
        setCategory(response.data.data.CategoryProduct.name);
      });
  };
  console.log(products, "produk");
  console.log(users, "user");
  console.log(category);

  useEffect(() => {
    whoami();
    getProduct();
  }, []);

  function handleDelete() {
    swal({
      title: "Apakah anda yakin?",
      text: "Setelah dihapus, Anda tidak akan dapat mengembalikan produk ini!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(
            `https://tokoku-api.herokuapp.com/api/v1/seller/product/${id}`,
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }
          )
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            window.location.href = "/daftar-jual";
          });
        swal("Data produk berhasil dihapus!", {
          icon: "success",
        });
      } else {
        swal("Data produk tidak jadi dihapus!");
      }
    });
  }

  return (
    <>
      <NavbarMenu />
      <BackButton />
      <Container className="mt-5 py-5">
        <Row>
          <Col
            md={8}
            className="d-flex justify-content-center align-items-center mb-4"
          >
            <Container className={style.productBox}>
              <img
                className={style.productImg}
                src={products.picture}
                alt={products.picture}
              />
            </Container>
          </Col>
          <Col md={4}>
            <Card
              style={{
                border: "none",
                borderRadius: "16px",
                boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)",
              }}
            >
              <Card.Body>
                <Card.Title className={style.fontProduct}>
                  {products.name}
                </Card.Title>
                <Card.Text className={style.fontContent}>{category}</Card.Text>
                <Card.Text className={style.fontProduct}>
                  Rp {price.toLocaleString("id-ID")}
                </Card.Text>
                {sellers.email === users.email ? (
                  <div className="text-center">
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to={`/edit-product/${products.id}`}
                    >
                      <BtnPrimary className={style.button}>Edit</BtnPrimary>
                    </Link>
                    <BtnPrimary onClick={handleDelete} className={style.button}>
                      Delete
                    </BtnPrimary>
                  </div>
                ) : (
                  <ModalTawar products={products} />
                )}
              </Card.Body>
            </Card>
            <div className={style.userCard}>
              <div>
                <img
                  className={style.userImg}
                  src={users.picture}
                  alt={users.picture}
                />
              </div>
              <div className="d-flex flex-column justify-between w-100 me-2">
                <h3 className={style.fontName}>{users.name}</h3>
                <p className={style.fontCity}>{users.city}</p>
              </div>
              <div className="mt-0">
                <p className={style.fontSeller}>Penjual</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Container></Container>
          </Col>
        </Row>

        <br />
        <div className="desc">
          <h2 className={style.fontProduct}>Deskripsi Produk</h2>
          <div className={style.descBox}>
            <h5 className={style.fontContent}>Status : {products.status}</h5>
            <h5 className={style.fontContent}>Lokasi : {products.location}</h5>
          </div>
          <div className="mt-3">
            <p className={style.fontContent}>{products.description}</p>
          </div>
        </div>
      </Container>
    </>
  );
}
export default ProductDetail;
