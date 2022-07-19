import { useState, useEffect } from "react";
import { NavbarMenu, BackButton, ModalOrderBuyer } from "../../components";
import { Container } from "react-bootstrap";
import poto from "../../assets/images/img2.png";
import axios from "axios";
import Login from "../Login/Login";

function OrderHistory({ users }) {
  const [orders, setOrders] = useState([]);

  const getOrderBuyer = () => {
    axios
      .get("https://tokoku-api.herokuapp.com/api/v1/buyer/order", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setOrders(response.data.orders);
      });
  };

  console.log(orders, "orders");
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
          {orders.map((order) => {
            return (
              <div className="productOrder" key={order.id}>
                <div className="d-flex flex-row">
                  <img
                    className="imgProductOrder"
                    src={order.Product.picture}
                    alt={order.Product.picture}
                  />
                  <div>
                    <p className="textGray">Penawaran Produk</p>
                    <h5 className="textContent">{order.Product.name}</h5>
                    <h5 className="textContent">Rp {order.Product.price}</h5>
                    <h5 className="textContent">Ditawar Rp {order.price}</h5>
                  </div>
                </div>
                <div className="float-end">
                  <ModalOrderBuyer order={order} />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
}
export default OrderHistory;
