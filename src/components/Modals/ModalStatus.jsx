import React from "react";
import style from "./modals.module.css";
import { Button, Form } from "react-bootstrap";
import fi_x from "../../assets/icons/fi_x.svg";

function ModalStatus({ setOpenModal }) {
  return (
    <div className={style.modalBackground}>
      <div className={style.modalContainer}>
        <div className={style.titleCloseBtn}>
          <button
            className={style.closeBtn}
            onClick={() => {
              setOpenModal(false);
            }}
          >
            <img src={fi_x} alt="" />
          </button>
        </div>
        <div>
          <h3 className={style.title}>Perbarui status penjualan produkmu</h3>
        </div>
        <div className={style.body}>
          <Form.Check
            type="radio"
            aria-label="radio 1"
            name="kirim"
            label="&nbsp;Berhasil Terjual"
            className={style.form}
          />
          <p className={style.text}>
            Kamu telah sepakat menjual produk ini kepada pembeli
          </p>
          <Form.Check
            type="radio"
            aria-label="radio 1"
            name="kirim"
            label="&nbsp;Batalkan transaksi"
            className={style.form}
          />
          <p className={style.text}>
            Kamu membatalkan transaksi produk ini dengan pembeli
          </p>
        </div>
        <div className={style.footer}>
          <Button>Kirim</Button>
        </div>
      </div>
    </div>
  );
}

export default ModalStatus;
