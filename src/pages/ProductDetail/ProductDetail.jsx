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
        <Card className={style.userCard}>
          <div className="w-100 pt-3">
            <img className={style.userImg} src={imgUser} alt={users.picture} />
          </div>
          <Card.Body>
            <Card.Title className={style.fontName}>{users.name}</Card.Title>
            <Card.Text className={style.fontCity}>{users.city}</Card.Text>
          </Card.Body>
        </Card>
        <Container className={style.productBox}>
          <Row>
            <Col className="d-flex justify-content-center w-50">
              <div className={style.productImgBox}>
                <img
                  className={style.productImg}
                  src={imgProduct}
                  alt={products.picture}
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card className="w-100 text-center border-0">
                <Card.Body>
                  <Card.Title className={style.fontProduct}>
                    {products.name}
                  </Card.Title>
                  <Card.Text className={style.fontContent}>
                    {category}
                  </Card.Text>
                  <Card.Text className={style.fontProduct}>
                    Rp {price.toLocaleString("id-ID")}
                  </Card.Text>
                  {sellers.email === users.email ? (
                    <>
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to={`/edit-product/${products.id}`}
                      >
                        <BtnPrimary className="w-25 me-2">Edit</BtnPrimary>
                      </Link>
                      <BtnPrimary onClick={handleDelete} className="w-25 ms-2">
                        Delete
                      </BtnPrimary>
                    </>
                  ) : (
                    <ModalTawar products={products} />
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
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
