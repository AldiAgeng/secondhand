import { useState } from "react";
import { Modal, Button, Card, Row, Col } from "react-bootstrap";
import { ModalHeader, ModalFooter, ModalTextBold, ModalTextLight, ModalText, ModalFoto } from "./ModalElements";
import { CardModal, CardModalHeader } from "./CardElements";
import { BtnPrimary } from "../Buttons/ButtonElements";

function ModalInfoProduct({ orders }) {
  const [show, setShow] = useState(false);
  const [phone, setPhone] = useState(orders.User.phone_number);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <BtnPrimary className="ms-2 px-5" onClick={handleShow}>
        Hubungi di WA
      </BtnPrimary>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <ModalHeader closeButton></ModalHeader>
        <Modal.Body>
          <ModalTextBold className="mb-1">Yeay kamu berhasil mendapat harga yang sesuai</ModalTextBold>
          <ModalTextLight className="my-1">Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya</ModalTextLight>
          <CardModal className="mt-1">
            <CardModalHeader>
              <ModalTextBold className="text-center">Product Match</ModalTextBold>
            </CardModalHeader>
            <Card.Body>
              {/* Pembeli */}
              <Row>
                <Col md={4} className="mb-2">
                  <ModalFoto />
                </Col>
                <Col md={6} className="mb-2">
                  <ModalTextBold>{orders.User.name}</ModalTextBold>
                  <ModalTextLight>{orders.User.city}</ModalTextLight>
                </Col>
              </Row>
              {/* Barang */}
              <Row>
                <Col md={4} className="mt-2">
                  <ModalFoto />
                </Col>
                <Col md={6} className="mt-2">
                  <ModalText>{orders.Product.name}</ModalText>
                  <ModalText>
                    <s>Rp {orders.Product.price.toLocaleString("id-ID")}</s>
                  </ModalText>
                  <ModalText>Ditawar Rp {orders.price.toLocaleString("id-ID")}</ModalText>
                </Col>
              </Row>
            </Card.Body>
          </CardModal>
        </Modal.Body>
        <ModalFooter>
          <BtnPrimary target="_blank" href={`https://api.whatsapp.com/send?phone=62${phone.substring(1)}`} className="w-100">
            Contact to {orders.User.phone_number}
          </BtnPrimary>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default ModalInfoProduct;
