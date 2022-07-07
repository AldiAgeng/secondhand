import { Card } from "react-bootstrap";
import style from "./cardproduct.module.css";
import img1 from "../../assets/images/img1.png";

function CardProduct() {
    return (
        <Card className={style.productCard}>
          <Card.Img className={style.imgCard} variant="top" src={img1} />
          <Card.Body className="px-1 py-0">
            <Card.Text className={style.titleText}>Jam Tangan Casio</Card.Text>
            <Card.Text className={style.categoryText}>Aksesoris</Card.Text>
            <Card.Text className={style.titleText}>Rp. 250.000</Card.Text>
          </Card.Body>
        </Card>
    )
}

export default CardProduct;