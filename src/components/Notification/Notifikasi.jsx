import { Dropdown } from "react-bootstrap";
import { useState, useEffect } from "react";
import style from "./Notifikasi.module.css";
import iconRed from "../../assets/icons/icon_red.svg";
import fi_bell from "../../assets/icons/fi_bell.svg";
import img from "../../assets/images/img1.png";
import axios from "axios";

function Notifikasi() {
  const [notif, setNotif] = useState(0);
  const [notifSeller, setNotifSeller] = useState([]);
  const [notifBuyer, setNotifBuyer] = useState([]);

  const getNotif = () => {
    axios
      .get(`https://tokoku-api-2.herokuapp.com/api/v1/notification`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setNotifBuyer(response.data.data.buyer);
        setNotifSeller(response.data.data.seller);
      });
  };

  const checkNotifBuyer = () => {
    notifBuyer.map((data) => {
      if (data.is_read === false && data.Order !== null) {
        axios
          .get(`https://tokoku-api-2.herokuapp.com/api/v1/notification/${data.id}`, {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          })
          .then((response) => {
            setNotif(notif + 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  const checkNotifSeller = () => {
    notifSeller.map((data) => {
      if (data.is_read === false && data.Order !== null) {
        axios
          .get(`https://tokoku-api-2.herokuapp.com/api/v1/notification/${data.id}`, {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          })
          .then((response) => {
            setNotif(notif + 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  useEffect(() => {
    getNotif();
    checkNotifBuyer();
    checkNotifSeller();
  }, [notifBuyer, notifSeller]);

  return (
    <>
      <Dropdown className="pt-0 mt-0">
        <Dropdown.Toggle className="bg-transparent border-0 pt-2" id="dropdown-basic">
          {notif === 0 ? (
            <img src={fi_bell} alt="" />
          ) : (
            <div>
              <img src={fi_bell} alt="" />
              <img src={iconRed} alt="" />
            </div>
          )}
        </Dropdown.Toggle>
      </Dropdown>
    </>
  );
}

export default Notifikasi;
