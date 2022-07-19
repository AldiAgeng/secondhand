import { useState, useEffect } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import {
  NavbarPlain,
  ModalStatusOrder,
  ModalInfoProduct,
  BackButton,
} from "../../components";
import { ToastContainer, toast } from "react-toastify";
import { BtnPrimary } from "../../components/Buttons/ButtonElements";
import axios from "axios";
import swal from "sweetalert";
import style from "./infopenawar.module.css";

function InfoPenawar() {
  const [users, setUsers] = useState("");
  const [products, setProduct] = useState("");
  const [orders, setOrders] = useState({});
  const [bid, setBid] = useState(0);
  const [price, setPrice] = useState(0);

  const { id } = useParams();
  const navigate = useNavigate();

  const imgUser =
    "https://tokoku-api.herokuapp.com/uploads/users/" + users.picture;
  const imgProduct =
    "https://tokoku-api.herokuapp.com/uploads/products/" + products.picture;

  const orderProduct = async () => {
    await axios
      .get(`https://tokoku-api.herokuapp.com/api/v1/seller/order/${id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setUsers(response.data.order.User);
        setProduct(response.data.order.Product);
        setPrice(response.data.order.Product.price);
        setOrders(response.data.order);
        setBid(response.data.order.price);
        console.log(response.data, "data");
      });
  };

  const Accepted = () => {
    swal({
      title: "Apakah anda yakin?",
      text: "Setelah status order diganti, Anda tidak akan dapat mengubahnya lagi!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willAccpted) => {
      if (willAccpted) {
        const data = {
          status: "accepted",
        };
        axios
          .put(
            `https://tokoku-api.herokuapp.com/api/v1/seller/order/${id}`,
            data,
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }
          )
          .then((response) => {
            console.log(response, "ress");
            // toast("Order Berhasil diUpdate", {
            //   type: "success",
            // });
            window.location.reload();
          });
        swal("Status order berhasil diubah!", {
          icon: "success",
        });
      } else {
        swal("Status order tidak jadi diubah!");
      }
    });
  };
  const Rejected = () => {
    swal({
      title: "Apakah anda yakin?",
      text: "Setelah status order diganti, Anda tidak akan dapat mengubahnya lagi!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willRejected) => {
      if (willRejected) {
        const data = {
          status: "rejected",
        };
        axios
          .put(
            `https://tokoku-api.herokuapp.com/api/v1/seller/order/${id}`,
            data,
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }
          )
          .then((response) => {
            console.log(response, "ress");
            window.location.reload();
          });
      } else {
        swal("Status order tidak jadi diubah!");
      }
    });
  };

  useEffect(() => {
    orderProduct();
  }, [orders.price]);
  return (
    <div className="App">
      <NavbarPlain title="Info Penawar" />
      <ToastContainer />
      <BackButton />
      <Container className="my-5 pt-5">
        <Row className="mb-4">
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
          <Col md={4} className="mb-4">
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
                <p className={style.fontSeller}>Penawar</p>
              </div>
            </div>
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
                <Card.Text className={style.fontPrice}>
                  Harga &emsp;:&emsp; Rp {price.toLocaleString("id-ID")}
                </Card.Text>
                <Card.Text className={style.fontPrice}>
                  Ditawar &nbsp;:&emsp; Rp {bid.toLocaleString("id-ID")}
                </Card.Text>
                {orders.status === "accepted" ||
                orders.status === "rejected" ? (
                  <div>
                    <ModalStatusOrder products={products} orders={orders} />
                    <ModalInfoProduct orders={orders} />
                  </div>
                ) : (
                  <div>
                    <BtnPrimary className={style.button} onClick={Rejected}>
                      Tolak
                    </BtnPrimary>
                    <BtnPrimary className={style.button} onClick={Accepted}>
                      Terima
                    </BtnPrimary>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default InfoPenawar;
