import { useState, useEffect, useRef } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { NavbarPlain } from "../../components";
import { BtnPrimary } from "../../components/Buttons/ButtonElements";
import penjual from "../../assets/images/profile1.png";
import jam from "../../assets/images/img1.png";
import back from "../../assets/icons/fi_arrow-left.svg";
import axios from "axios";

function InfoPenawar1() {
  const getId = useRef(null);

  const id = getId.current;
  console.log(id, "id");

  // const orderProduct = () => {
  //   axios
  //   .get(`https://tokoku-api.herokuapp.com/api/v1/seller/order/${props.id}`, {
  //     headers: {
  //       Authorization: "Bearer " + localStorage.getItem("token"),
  //     },
  //   })
  //   .then((response) => {
  //       console.log(localStorage.getItem('token'));
  //       });
  // };

  // useEffect(() => {
  //   orderProduct();
  // }, []);
  return (
    <div className="App">
      <NavbarPlain title="Info Penawar" />
      <Button href="/">
        <img src={back} alt="" className="back" />
      </Button>
      <Container className="my-5 pt-5">
        <Card
          className="mt-2 mb-5 profileinfopenawar"
          style={{ width: "18rem" }}
        >
          <Card.Body>
            <img className="fotopenjual" src={penjual} alt="background" />
            <Card.Title>Violencia</Card.Title>
            <Card.Text>Sulawesi Tenggara</Card.Text>
          </Card.Body>
        </Card>
        <div className="d-flex flex-column align-items-center">
          <h5 className="mb-3">Daftar Produkmu yang ditawarkan</h5>
          <Card className="cardinfopenawar" style={{ width: "50rem" }}>
            <img className="mx-auto mt-3 jam" src={jam} alt="jam" />
            <Card.Body>
              <Card.Title>Jam Mahal</Card.Title>
              <Card.Text>Aksesoris</Card.Text>
              <Card.Title>Rp2.000.000</Card.Title>
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
