import { useState, useEffect } from "react";
import { Container, Row, Col, Stack} from "react-bootstrap";
import { NavbarLogin, CardProduct, Carousels, Footers } from "../../components";
import { BtnPrimary } from "../../components/Buttons/ButtonElements";
import fi_search from "../../assets/icons/fi_search.svg";
import style from "./homepage.module.css";

function HomePage() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [buttons, setButtons] = useState('');

    const getData = async () => {
      const response = await fetch(`https://tokoku-api.herokuapp.com/api/v1/buyer/product`);
      const data = await response.json();
      console.log(data, "product");
      setProducts(data.data);
    };
  
    const getCategories = async () => {
        const response = await fetch(`https://tokoku-api.herokuapp.com/api/v1/category`);
        const data = await response.json();
        console.log(data.data, "category");
        setCategories(data.data);
    };

    useEffect(() => {
      getData();
      getCategories();
    }, []);
    
    const handleButton = e => setButtons (e.target.innerText)
    console.log(buttons, "btn");

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
                            <div key={category.id}>
                                <BtnPrimary onClick={handleButton}>
                                    <p className={style.styleText}><img className={style.imgIcon} src={fi_search} alt="search" />{category.name}</p>
                                </BtnPrimary>
                            </div>
                        ))}
                        </Stack>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-start align-items-start mt-2">
                    <Stack className={style.cardList} direction="horizontal" gap={3}>
                    {products.map((product) => {
                        if (buttons === product.CategoryProduct.name) {
                            return (
                                <div key={product.id}>
                                    <CardProduct id={product.id} name={product.name} price={product.price} picture={product.picture} category={product.CategoryProduct.name} />
                                </div>
                            )
                        } 
                        if (buttons === "Semua" || buttons === "") {
                            return (
                                <div key={product.id}>
                                    <CardProduct id={product.id} name={product.name} price={product.price} picture={product.picture} category={product.CategoryProduct.name} />
                                </div>
                            )
                        }
                    })}
                    </Stack>
                </Row>
            </Container>
            <Footers />
        </div>
    )
}

export default HomePage;