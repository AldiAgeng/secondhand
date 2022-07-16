import { useState, useEffect } from "react";
import { Container, Card, Button } from "react-bootstrap";
import {
  NavbarPlain,
  ModalStatus,
  ModalInfoProduct,
  BackButton,
} from "../../components";
import { ToastContainer, toast } from "react-toastify";
import { BtnPrimary } from "../../components/Buttons/ButtonElements";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

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
    const data = {
      status: "accepted",
    };
    axios
      .put(`https://tokoku-api.herokuapp.com/api/v1/seller/order/${id}`, data, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response, "ress");
        toast("Order Berhasil diUpdate", {
          type: "success",
        });
      });
  };
  const Rejected = () => {
    const data = {
      status: "rejected",
    };
    axios
      .put(`https://tokoku-api.herokuapp.com/api/v1/seller/order/${id}`, data, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response, "ress");
        toast("Order Berhasil diUpdate", {
          type: "success",
        });
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
        <Card
          className="mt-2 mb-5 profileinfopenawar"
          style={{ width: "18rem" }}
        >
          <Card.Body>
            <img className="fotopenjual" src={imgUser} alt={imgUser} />
            <Card.Title>{users.name}</Card.Title>
            <Card.Text>{users.city}</Card.Text>
          </Card.Body>
        </Card>
        <div className="d-flex flex-column align-items-center">
          <h5 className="mb-3">Daftar Produkmu yang ditawarkan</h5>
          <Card className="cardinfopenawar" style={{ width: "50rem" }}>
            <img
              className="mx-auto mt-3 jam"
              src={imgProduct}
              alt={imgProduct}
            />
            <Card.Body>
              <Card.Title>{products.name}</Card.Title>
              <Card.Title>Rp {price.toLocaleString("id-ID")}</Card.Title>
              <Card.Title>Ditawar Rp {bid.toLocaleString("id-ID")}</Card.Title>
              {orders.status === "accepted" || orders.status === "rejected" ? (
                <div>
                  <BtnPrimary className="buybutton1 me-2">Status</BtnPrimary>
                  <ModalInfoProduct />
                </div>
              ) : (
                <div>
                  <BtnPrimary className="buybutton1" onClick={Rejected}>
                    Tolak
                  </BtnPrimary>
                  <BtnPrimary className="buybutton1" onClick={Accepted}>
                    Terima
                  </BtnPrimary>
                </div>
              )}
            </Card.Body>
          </Card>
          <br />
        </div>
      </Container>
    </div>
  );
}

export default InfoPenawar;
