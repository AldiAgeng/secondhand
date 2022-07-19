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

function ModalOrderBuyer() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  return (
    <>
      <ToastContainer />
      <BtnPrimary onClick={handleShow}>Status</BtnPrimary>

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
            Yahh, penjual tidak setuju dengan harga penawaran yang kamu berikan,
            jika kamu masih ingin membeli produk ini kamu bisa merubah harga
            penawaran.
          </ModalTextLight>
          <CardModal className="my-2">
            <Card.Body className={style.boxBody}>
              {/* Barang */}
              <div className={style.imgBox}>
                <img className={style.imgModals} src="" alt="" />
              </div>
              <div>
                <ModalTextBold>Nama Produk</ModalTextBold>
                <ModalText>Rp 1900303</ModalText>
              </div>
            </Card.Body>
          </CardModal>
          <Form.Group className="mt-4">
            <ModalTextBold className="mb-2">Harga Tawar</ModalTextBold>
            <FormControl
              //   value={bid}
              //   onChange={(e) => setBid(e.target.value)}
              type="text"
              placeholder="Rp. 0,-"
            />
          </Form.Group>
        </Modal.Body>
        <ModalFooter>
          <BtnPrimary className="w-100">Kirim</BtnPrimary>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default ModalOrderBuyer;
