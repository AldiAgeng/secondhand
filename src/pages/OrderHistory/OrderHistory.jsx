import { useState, useEffect } from "react";
import { NavbarMenu, BackButton, ModalOrderBuyer } from "../../components";
import { Container } from "react-bootstrap";
import poto from "../../assets/images/img2.png";
import axios from "axios";

function OrderHistory({ users }) {
  const [orders, setOrders] = useState("");

  const getOrderBuyer = async () => {
    await axios
      .get(`https://tokoku-api.herokuapp.com/api/v1/buyer/order`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setOrders(response.data);
        console.log(orders, "orders");
      });
  };

  useEffect(() => {
    getOrderBuyer();
  }, []);

  return (
    <>
      <NavbarMenu />
      <BackButton />
      <Container className="py-5 mt-5">
        <div className="boxUserOrder">
          <img
            src={users.picture}
            alt={users.picture}
            className="imgUserOrder"
          />
          <div>
            <h5 className="textContent">{users.name}</h5>
            <p className="textGray">{users.city}</p>
          </div>
        </div>
        <h3 className="textTitle">Daftar produk yang ditawar</h3>
        <div>
          {/* {orders.map((order) => { */}
          <div className="productOrder">
            <div className="d-flex flex-row">
              <img className="imgProductOrder" src={poto} alt="" />
              <div>
                <p className="textGray">Penawaran Produk</p>
                <h5 className="textContent">Nama Produk</h5>
                <h5 className="textContent">Harga Awal Produk</h5>
                <h5 className="textContent">Harga Tawar Produk</h5>
              </div>
            </div>
            <div className="float-end">
              <ModalOrderBuyer />
            </div>
          </div>
          {/* })} */}
        </div>
      </Container>
    </>
  );
}
export default OrderHistory;
