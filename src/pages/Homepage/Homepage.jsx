import { useState, useEffect } from "react";
import { Container, Row, Col} from "react-bootstrap";
import { NavbarLogin, CardProduct, Carousels, Category, Footers } from "../../components";
// import style from "./homepage.module.css";

function HomePage() {
    const [products, setProducts] = useState([]);
    // const [category, setCategory] = useState([]);

    const getData = async () => {
      const response = await fetch(`http://localhost:8000/api/v1/buyer/product`);
      const data = await response.json();
      console.log(data.data);
      setProducts(data.data);
    };
  
    useEffect(() => {
      getData();
    }, []);

    // const getCategory = async () => {
    //     const response = await fetch(`http://localhost:8000/api/v1/buyer/category`);
    //     const data = await response.json();
    //     console.log(data.data);
    //     setCategory(data.data);
    // };

    return (
        <div>
            <NavbarLogin />
            <Carousels />
            <Container className="mt-2 mb-5">
                <Row>
                    <Col className="d-flex justify-content-center mb-3">
                        <Category />
                    </Col>
                </Row>
                <Row className="d-flex justify-content-start align-items-start">
                    {products.map((product) => (
                    <Col md={3} className="d-flex justify-content-center mb-4">
                            <CardProduct key={product.id} id={product.id} name={product.name} price={product.price} picture={product.picture} category={product.CategoryProduct.name} />
                    </Col>
                    ))}
                </Row>
            </Container>
            <Footers />
        </div>
    )
}

export default HomePage;