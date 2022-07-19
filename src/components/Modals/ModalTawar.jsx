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

function ModalTawar({ users, products }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [bid, setBid] = useState();
  const navigate = useNavigate();

  console.log(users, "user tawar");

  const imgProduct =
    "https://tokoku-api.herokuapp.com/uploads/products/" + products.picture;

  const bidProduct = async () => {
    if (
      users.city === null ||
      users.address === null ||
      users.phone_number === null ||
      users.picture === null
    ) {
      swal({
        title: "Perhatian!",
        text: "Anda belum melengkapi info profile, mohon lengkapi terlebih dahulu!",
        icon: "warning",
        button: "Uhuyy!",
      });
      return navigate("/edit-profile");
    } else {
      const data = {
        price: bid,
        status: "bid",
        id_product: products.id,
      };
      await axios
        .post(`https://tokoku-api.herokuapp.com/api/v1/buyer/order`, data, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((response) => {
          setTimeout(() => {
            window.location.reload();
          }, 1000);
          swal({
            title: "Berhasil!",
            text: "Produk berhasil anda tawar!",
            icon: "success",
            button: "Uhuyy!",
          });
          console.log(response, "response");
        })
        .catch((error) => {
          toast("Masukan data berupa angka dan valid", {
            type: "error",
          });
        });
    }
  };

  console.log(products, "products");

  return (
    <>
      <ToastContainer />
      <BtnPrimary className="w-100 mt-3" onClick={handleShow}>
        Ajukan Penawaran
      </BtnPrimary>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <ModalHeader closeButton></ModalHeader>
        <Modal.Body>
          <ModalTextBold className="mb-2">Masukkan Harga Tawarmu</ModalTextBold>
          <ModalTextLight className="my-2">
            Harga tawaranmu akan diketahui penual, jika penjual cocok kamu akan
            segera dihubungi penjual.
          </ModalTextLight>
          <CardModal className="my-2">
            <Card.Body className={style.boxBody}>
              {/* Barang */}
              <div className={style.imgBox}>
                <img
                  className={style.imgModals}
                  src={products.picture}
                  alt={products.picture}
                />
              </div>
              <div>
                <ModalTextBold>{products.name}</ModalTextBold>
                <ModalText>Rp {products.price}</ModalText>
              </div>
            </Card.Body>
          </CardModal>
          <Form.Group className="mt-4">
            <ModalTextBold className="mb-2">Harga Tawar</ModalTextBold>
            <FormControl
              value={bid}
              onChange={(e) => setBid(e.target.value)}
              type="text"
              placeholder="Rp. 0,-"
            />
          </Form.Group>
        </Modal.Body>
        <ModalFooter>
          <BtnPrimary className="w-100" onClick={bidProduct}>
            Kirim
          </BtnPrimary>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default ModalTawar;
