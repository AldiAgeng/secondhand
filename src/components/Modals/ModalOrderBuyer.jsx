import { useState } from "react";
import { Modal, Card, Form } from "react-bootstrap";
import {
  ModalHeader,
  ModalFooter,
  ModalTextBold,
  ModalTextLight,
  ModalText,
} from "./ModalElements";
import { FormControl } from "../Form/FormElements";
import { CardModal } from "./CardElements";
import { BtnPrimary } from "../Buttons/ButtonElements";
import axios from "axios";
import swal from "sweetalert";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import style from "./modals.module.css";

function ModalOrderBuyer({ order }) {
  const [status, setStatus] = useState(order.status);
  const [price, setPrice] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  const updateOrder = () => {
    const data = {
      price: price,
    };
    axios
      .put(
        `https://tokoku-api.herokuapp.com/api/v1/buyer/order/${order.id}`,
        data,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        console.log(response, "res order");
        swal({
          title: "Berhasil!",
          text: "Harga Penawaran telah kamu ubah!",
          icon: "success",
          button: "Uhuyy!",
        });
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch((error) => {
        toast(error.message, {
          type: "error",
        });
      });
  };

  return (
    <>
      <ToastContainer />
      <BtnPrimary onClick={handleShow}>Status</BtnPrimary>
      {order.status === "rejected" ? (
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <ModalHeader closeButton></ModalHeader>
          <Modal.Body>
            <ModalTextBold className="mb-2">Status Penawaran</ModalTextBold>
            <ModalTextLight className="my-2">
              Penjual tidak tertarik dengan penawaran kamu, jika kamu masih
              ingin menawar produk ini maka kamu bisa mengajukan ulang harga
              penawaran dibawah ini
            </ModalTextLight>
            <CardModal className="my-2">
              <Card.Body className={style.boxBody}>
                {/* Barang */}
                <div className={style.imgBox}>
                  <img
                    className={style.imgModals}
                    src={order.Product.picture}
                    alt=""
                  />
                </div>
                <div>
                  <ModalTextBold>{order.Product.name}</ModalTextBold>
                  <ModalText>Rp {order.Product.price}</ModalText>
                  <ModalText>Ditawar Rp {order.price}</ModalText>
                </div>
              </Card.Body>
            </CardModal>
            <Form.Group className="mt-4">
              <FormControl
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="text"
                placeholder="Rp. 0,-"
              />
            </Form.Group>
          </Modal.Body>
          <ModalFooter>
            <BtnPrimary className="w-100" onClick={updateOrder}>
              Kirim
            </BtnPrimary>
          </ModalFooter>
        </Modal>
      ) : (
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <ModalHeader closeButton></ModalHeader>
          <Modal.Body>
            <ModalTextBold className="mb-2">Status Penawaran</ModalTextBold>
            <ModalTextLight className="my-2">
              {order.status === "accepted" ? (
                <p>
                  Penjual tertarik nih dengan penawaran yang kamu berikan,
                  tolong tunggu sampai penjual menghubungi kamu untuk proses
                  transaksi selajutnya.
                </p>
              ) : (
                <p>
                  Penawaran kamu masih diproses, tolong tunggu sampai penjual
                  mengkonfirmasi penawaran kamu.
                </p>
              )}
            </ModalTextLight>
            <CardModal className="my-2">
              <Card.Body className={style.boxBody}>
                {/* Barang */}
                <div className={style.imgBox}>
                  <img
                    className={style.imgModals}
                    src={order.Product.picture}
                    alt=""
                  />
                </div>
                <div>
                  <ModalTextBold>{order.Product.name}</ModalTextBold>
                  <ModalText>Rp {order.Product.price}</ModalText>
                  <ModalText>Ditawar Rp {order.price}</ModalText>
                </div>
              </Card.Body>
            </CardModal>
          </Modal.Body>
          <ModalFooter>
            <BtnPrimary className="w-100" onClick={handleClose}>
              Kembali
            </BtnPrimary>
          </ModalFooter>
        </Modal>
      )}
    </>
  );
}

export default ModalOrderBuyer;
