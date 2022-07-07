import { Container, ListGroup } from "react-bootstrap";
import { Navbars, CardProduct, Footers } from "../../components";
import { BtnPrimary } from "../../components/Buttons/ButtonElements";
import { Link } from "react-router-dom";
import imgProfile from "../../assets/images/profile1.png";
import fi_box from "../../assets/icons/fi_box.svg";
import fi_heart from "../../assets/icons/fi_heart.svg";
import fi_dollar from "../../assets/icons/fi_dollar-sign.svg";
import fi_chevron from "../../assets/icons/fi_chevron-right.svg";
import fi_plus from "../../assets/icons/fi_plus.svg";
import imgContent from "../../assets/images/imgContent.png";
import style from "./daftarjual.module.css";

function Daftarjual() {
    return (
        <div>
            <Navbars />
            <Container className={style.main}>
                <h3 className={style.titleText}>Daftar Jual Saya</h3>
                <div className={style.profileBox}>
                    <div className="d-flex flex-row justify-content-center align-items-center">
                        <img className={style.profileImg} src={imgProfile} />
                        <div className="pt-3 ps-3">
                            <h5 className={style.nameText}>Nama Penjual</h5>
                            <p className={style.addressText}>Kota</p>
                        </div>
                    </div>
                    <Link to="/edit-profile">
                        <BtnPrimary className={style.btnEdit}>Edit</BtnPrimary>
                    </Link>
                </div>
                <div className={style.content}>
                    <div className={style.categoryBox}>
                        <h5 className={style.categoryText}>Kategori</h5>
                        <ListGroup className={style.categoryList}>
                            <ListGroup.Item className="border-0 px-0 mb-3">
                                <a className={style.listText} href="#"><img src={fi_box} />&ensp;Semua Produk<img className="float-end" src={fi_chevron} /></a>
                            </ListGroup.Item>
                            <ListGroup.Item className="border-0 px-0 mb-3">                            
                                <a className={style.listText} href="#"><img src={fi_heart} />&ensp;Diminati<img className="float-end" src={fi_chevron} /></a>
                            </ListGroup.Item>
                            <ListGroup.Item className="border-0 px-0">                            
                                <a className={style.listText} href="#"><img src={fi_dollar} />&ensp;Terjual<img className="float-end" src={fi_chevron} /></a>
                            </ListGroup.Item>
                        </ListGroup>
                    </div>
                    <div className={style.cardList}>
                        <div className={style.addBox}>
                            <a href="/add-product" className={style.addBtn}>
                                <img src={fi_plus} alt="fi_plus" />
                                <p className="mt-2">Tambah Produk</p>
                            </a>
                        </div>
                        <CardProduct />
                        <CardProduct />
                        <CardProduct />
                        <CardProduct />
                        <CardProduct />
                        <CardProduct />
                    </div>
                    {/* <div className={style.contentDiv}>
                        <img className={style.imgContent} src={imgContent} alt="" />
                        <h5 className={style.contentText}>Belum ada produkmu yang diminati nih, <br />sabar ya rejeki nggak kemana kok</h5>
                    </div> */}
                </div>
            </Container>
            <Footers />
        </div>
    )
}

export default Daftarjual;