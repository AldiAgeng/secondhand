import { Dropdown, NavDropdown } from "react-bootstrap";
import React from "react";
import style from "./Notifikasi.module.css";
import iconRed from "../../assets/icons/icon_red.svg";
import fi_bell from "../../assets/icons/fi_bell.svg";
import img from "../../assets/images/img1.png";

function Notifikasi() {
  const notif = <img src={fi_bell} alt="fi_bell" style={{ width: "24px" }} />;

  return (
    <>
      <Dropdown className="pt-0 mt-0">
        <Dropdown.Toggle
          className="bg-transparent border-0 pt-2"
          id="dropdown-basic"
        >
          <img src={fi_bell} alt="" />
        </Dropdown.Toggle>
        <Dropdown.Menu className={style.Menu} align="end">
          <div className={style.boxNotif}>
            <div className={style.imgBox}>
              <img className={style.img} src={img} alt="" />
            </div>
            <div className={style.boxContent}>
              <p className={style.textGray}>Penawaran produk</p>
              <h5 className={style.textContent}>Jam Tangan Casio</h5>
              <h5 className={style.textContent}>Rp 250.000</h5>
              <h5 className={style.textContent}>Ditawar Rp 200.000</h5>
              {/* <h5 className={style.textGray}>
                Kamu akan segera dihubungi penjual via whatsapp
              </h5> */}
            </div>
            <div className={style.time}>
              <p className={style.textGray}>
                <img className="float-end mb-1" src={iconRed} alt="" />
                20 Apr, 14:04
              </p>
            </div>
          </div>
          <div className={style.boxNotif}>
            <div className={style.imgBox}>
              <img className={style.img} src={img} alt="" />
            </div>
            <div className={style.boxContent}>
              <p className={style.textGray}>Penawaran produk</p>
              <h5 className={style.textContent}>Jam Tangan Casio</h5>
              <h5 className={style.textContent}>Rp 250.000</h5>
              <h5 className={style.textContent}>Ditawar Rp 200.000</h5>
              {/* <h5 className={style.textGray}>
                Kamu akan segera dihubungi penjual via whatsapp
              </h5> */}
            </div>
            <div className={style.time}>
              <p className={style.textGray}>
                <img className="float-end mb-1" src={iconRed} alt="" />
                20 Apr, 14:04
              </p>
            </div>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default Notifikasi;
