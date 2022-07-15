import { useState, useEffect } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { NavbarPlain } from "../../components";
import { BtnPrimary } from "../../components/Buttons/ButtonElements";
import penjual from "../../assets/images/profile1.png";
import jam from "../../assets/images/img1.png";
import back from "../../assets/icons/fi_arrow-left.svg";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function InfoPenawar1() {
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

  // const updateOrder = () => {
  //   axios
  //     .put(`https://tokoku-api.herokuapp.com/api/v1/seller/order/${id}`, {
  //       headers: {
  //         Authorization: "Bearer " + localStorage.getItem("token"),
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response, "ress");
  //     });
  // };

  useEffect(() => {
    orderProduct();
  }, [orders.price]);
  return (
    <div className="App">
      <NavbarPlain title="Info Penawar" />
      <Button onClick={() => navigate(-1)}>
        <img src={back} alt="" className="back" />
      </Button>
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
              <BtnPrimary className="buybutton1">Tolak</BtnPrimary>
              <BtnPrimary className="buybutton1">Terima</BtnPrimary>
            </Card.Body>
          </Card>
          <br />
        </div>
      </Container>
    </div>
  );
}

export default InfoPenawar1;
