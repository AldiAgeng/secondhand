import { useState } from "react";
import { Modal, Card, Row, Col, Form, InputGroup } from "react-bootstrap";
import {
  ModalHeader,
  ModalFooter,
  ModalTextBold,
  ModalTextLight,
} from "./ModalElements";
import { FormControl } from "../Form/FormElements";
import { CardModal } from "./CardElements";
import { BtnPrimary } from "../Buttons/ButtonElements";
import axios from "axios";
import swal from "sweetalert";
import { toast, ToastContainer } from "react-toastify";

function ModalStatusOrder({ products, orders }) {
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const updateStatus = () => {
    if (status === "sold") {
      const data = {
        status: status,
      };
      axios
        .put(
          `https://tokoku-api.herokuapp.com/api/v1/seller/product/${products.id}`,
          data,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
        .then((response) => {
          console.log(response, "res product");
          swal({
            title: "Berhasil!",
            text: "Selamat produk anda telah terjual!",
            icon: "success",
            button: "Uhuyy!",
          });
        })
        .catch((error) => {
          toast("please fill required fields", {
            type: "error",
          });
        });
    } else {
      const data = {
        status: status,
      };
      axios
        .put(
          `https://tokoku-api.herokuapp.com/api/v1/seller/order/${orders.id}`,
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
            text: "Transaksi telah anda batalkan!",
            icon: "success",
            button: "Uhuyy!",
          });
        })
        .catch((error) => {
          toast("please fill required fields", {
            type: "error",
          });
        });
    }
  };
  console.log(status, "status");

  return (
    <>
      <BtnPrimary className="ms-2 px-5" onClick={handleShow}>
        Status
      </BtnPrimary>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <ToastContainer />
        <ModalHeader closeButton></ModalHeader>
        <Modal.Body>
          <ModalTextBold className="mb-2">Masukkan Harga Tawarmu</ModalTextBold>
          <ModalTextLight className="my-2">
            Perbarui status penjualan produkmu
          </ModalTextLight>
          <CardModal className="my-2">
            <Card.Body>
              {/* Barang */}
              <Row>
                <Col md={6}>
                  <InputGroup>
                    <InputGroup.Radio
                      value="sold"
                      name="test"
                      aria-label="Radio 1"
                      onChange={(e) => setStatus(e.target.value)}
                    />
                    Berhasil Terjual
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <InputGroup>
                    <InputGroup.Radio
                      value="bid"
                      name="test"
                      aria-label="Radio 2"
                      onChange={(e) => setStatus(e.target.value)}
                    />
                    Batalkan Transaksi
                  </InputGroup>
                </Col>
              </Row>
            </Card.Body>
          </CardModal>
        </Modal.Body>
        <ModalFooter>
          <BtnPrimary className="w-100" onClick={updateStatus}>
            Kirim
          </BtnPrimary>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default ModalStatusOrder;
