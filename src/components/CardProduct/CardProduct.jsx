import toRupiah from '@develoka/angka-rupiah-js';
import { Card } from "react-bootstrap";
import style from "./cardproduct.module.css";
import img1 from "../../assets/images/img1.png";

function CardProduct({id, name, price, picture, category}) {
    return (
      <>
          <Card className={style.productCard} key={id}>
            <Card.Img className={style.imgCard} variant="top" src={picture} alt={picture} />
            <Card.Body className="px-1 py-0">
              <Card.Text className={style.titleText}>{name}</Card.Text>
              <Card.Text className={style.categoryText}>{category}</Card.Text>
              <Card.Text className={style.titleText}>Rp {toRupiah(price.toString(),{symbol: false, floatingPoint: 0, spaceBeforeUnit: true})}</Card.Text>
            </Card.Body>
          </Card>
      </>
    )
}

export default CardProduct;