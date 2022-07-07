import { Container} from "react-bootstrap";
import { Navbars, CardProduct, Carousels, Category, Footers } from "../../components";
import style from "./homepage.module.css";

function HomePage() {
    return (
        <div>
            <Navbars />
            <Carousels />
            <Container className="mt-2 mb-5">
                <Category />
                <div className={style.cardList}>
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                </div>
            </Container>
            <Footers />
        </div>
    )
}

export default HomePage;