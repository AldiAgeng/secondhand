import { useState, useEffect } from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { NavbarMenu, CardProduct, Footers } from "../../components";
import { BtnPrimary } from "../../components/Buttons/ButtonElements";
import { Link } from "react-router-dom";
import imgProfile from "../../assets/images/profile1.png";
import imgContent from "../../assets/images/imgContent.png";
import fi_box from "../../assets/icons/fi_box.svg";
import fi_heart from "../../assets/icons/fi_heart.svg";
import fi_dollar from "../../assets/icons/fi_dollar-sign.svg";
import fi_chevron from "../../assets/icons/fi_chevron-right.svg";
import fi_plus from "../../assets/icons/fi_plus.svg";
import style from "./daftarjual.module.css";

function Daftarjual() {
    const [products, setProducts] = useState([]);
    const [buttons, setButtons] = useState([]);

    const getData = async () => {
        const response = await fetch(`http://localhost:8000/api/v1/buyer/product`);
        const data = await response.json();
        console.log(data.data, "data");
        setProducts(data.data);
      };
    
      useEffect(() => {
        getData();
      }, []);

    const handleButton = e => setButtons (e.target.innerText)
    console.log(buttons, "data btn");
  
    return (
        <>
            <NavbarMenu />
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
                <Row>
                    <Col md={3} className="mt-4 me-3">
                        <div className={style.categoryBox}>
                            <h5 className={style.categoryText}>Kategori</h5>
                            <ListGroup className={style.categoryList}>
                                <ListGroup.Item className="border-0 px-0 mb-3" onClick={handleButton} type="button">
                                    <p className={style.listText}><img className="me-2" src={fi_box} />Semua Produk<img className="float-end" src={fi_chevron} /></p>
                                </ListGroup.Item>
                                <ListGroup.Item className="border-0 px-0 mb-3" onClick={handleButton} type="button">
                                    <p className={style.listText}><img className="me-2" src={fi_heart} />Diminati<img className="float-end" src={fi_chevron} /></p>
                                </ListGroup.Item>
                                <ListGroup.Item className="border-0 px-0" onClick={handleButton} type="button">
                                    <p className={style.listText}><img className="me-2" src={fi_dollar} />Terjual<img className="float-end" src={fi_chevron} /></p>
                                </ListGroup.Item>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg className="mx-auto mt-4">
                    {
                        (() => {
                            if (buttons == "Semua Produk" || buttons == "" ) {
                                return (
                                    <div className={style.cardList}>
                                        <div className={style.addBox}>
                                            <a href="/add-product" className={style.addBtn}>
                                                <img src={fi_plus} alt="fi_plus" />
                                                <p className="mt-2">Tambah Produk</p>
                                            </a>
                                        </div>
                                        {products.map((product) => {
                                            return (
                                                <CardProduct key={product.id} id={product.id} name={product.name} price={product.price} picture={product.picture} category={product.CategoryProduct.name} />
                                            )
                                        })}
                                    </div>
                                )
                            } if (buttons == "Diminati") {
                                return (
                                    <div className={style.contentDiv}>
                                        <img className={style.imgContent} src={imgContent} alt="" />
                                        <h5 className={style.contentText}>Belum ada produkmu yang diminati nih, <br />sabar ya rejeki nggak kemana kok</h5>
                                    </div>
                                )
                            } if (buttons == "Terjual") {
                                return (
                                    <div className={style.contentDiv}>
                                        <img className={style.imgContent} src={imgContent} alt="" />
                                        <h5 className={style.contentText}>Belum ada produkmu yang terjual nih, <br />sabar ya rejeki nggak kemana kok</h5>
                                    </div>
                                )
                            }
                        })()
                    }
                    </Col>
                </Row>
            </Container>
            <Footers />
        </>
    )
}

export default Daftarjual;