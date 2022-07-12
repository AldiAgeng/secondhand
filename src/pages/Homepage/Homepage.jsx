import React, { Component } from 'react';
import { useState, useEffect } from "react";
import { Container, Row, Col, Stack} from "react-bootstrap";
import { NavbarLogin, CardProduct, Carousels, Category, Footers, ModalInfo } from "../../components";
import { BtnPrimary } from "../../components/Buttons/ButtonElements";
import fi_search from "../../assets/icons/fi_search.svg";
import style from "./homepage.module.css";

function HomePage() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [buttons, setButtons] = useState([]);

    const getData = async () => {
      const response = await fetch(`http://localhost:8000/api/v1/buyer/product`);
      const data = await response.json();
      console.log(data.data);
      setProducts(data.data);
    };
  
    const getCategories = async () => {
        const response = await fetch(`http://localhost:8000/api/v1/category`);
        const data = await response.json();
        console.log(data.data, "data category");
        setCategories(data.data);
    };

    useEffect(() => {
      getData();
      getCategories();
    }, []);

    const semua = "semua";
    
    const handleButton = e => setButtons (e.target.innerText)
    console.log(buttons, "apa");

    return (
        <div>
            <NavbarLogin />
            <Carousels />
            <Container className="mt-2 mb-5">
                <Row>
                    <Col className="d-flex justify-content-center mb-3 mt-2">
                        <Stack className={style.categoryList} direction="horizontal" gap={3}>
                            <BtnPrimary onClick={handleButton}>
                                <p className={style.styleText}><img className={style.imgIcon} src={fi_search} alt="search" />Semua</p>
                            </BtnPrimary>
                        {categories.map((category) => (
                            <BtnPrimary key={category.id} onClick={handleButton}>
                                <p className={style.styleText}><img className={style.imgIcon} src={fi_search} alt="search" />{category.name}</p>
                            </BtnPrimary>
                        ))}
                        </Stack>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-start align-items-start mt-2">
                    {products.map((product) => {
                        if (buttons == product.CategoryProduct.name) {
                            return (
                                <Col md={3} className="d-flex justify-content-center mb-4">
                                    <CardProduct key={product.id} id={product.id} name={product.name} price={product.price} picture={product.picture} category={product.CategoryProduct.name} />
                                </Col>
                            )
                        } 
                        if (buttons == "Semua" || buttons == "") {
                            return (
                                <Col md={3} className="d-flex justify-content-center mb-4">
                                    <CardProduct key={product.id} id={product.id} name={product.name} price={product.price} picture={product.picture} category={product.CategoryProduct.name} />
                                </Col>
                            )
                        }
                    })}
                </Row>
            </Container>
            <Footers />
        </div>
    )
}

export default HomePage;