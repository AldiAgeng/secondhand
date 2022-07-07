import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../../assets/images/banner1.jpg';
import style from './carousels.module.css';

function Carousels() {
    return (
        <Carousel className={style.styleCarousel}>
            <Carousel.Item className={style.styleItem}>
                <img
                    className={style.styleImg}
                    src={banner1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item className={style.styleItem}>
                <img
                    className={style.styleImg}
                    src={banner1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item className={style.styleItem}>
                <img
                    className={style.styleImg}
                    src={banner1}
                    alt="First slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default Carousels;