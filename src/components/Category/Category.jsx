import { Stack } from "react-bootstrap";
import { BtnPrimary } from "../Buttons/ButtonElements";
import style from "./category.module.css";
import fi_search from "../../assets/icons/fi_search.svg";

function Category() {
    return (
        <div className="ms-0 my-4">
            <Stack className={style.styleContainer} direction="horizontal" gap={3}>
                <BtnPrimary>
                    <p className={style.styleText}><img className={style.imgIcon} src={fi_search} alt="search" />Semua</p>
                </BtnPrimary>
                <BtnPrimary>
                    <p className={style.styleText}><img className={style.imgIcon} src={fi_search} alt="search" />Hobi</p>
                </BtnPrimary>
                <BtnPrimary>
                    <p className={style.styleText}><img className={style.imgIcon} src={fi_search} alt="search" />Kendaraan</p>
                </BtnPrimary>
                <BtnPrimary>
                    <p className={style.styleText}><img className={style.imgIcon} src={fi_search} alt="search" />Baju</p>
                </BtnPrimary>
                <BtnPrimary>
                    <p className={style.styleText}><img className={style.imgIcon} src={fi_search} alt="search" />Elektronik</p>
                </BtnPrimary>
                <BtnPrimary>
                    <p className={style.styleText}><img className={style.imgIcon} src={fi_search} alt="search" />Kesehatan</p>
                </BtnPrimary>
            </Stack>
        </div>
    )
}

export default Category;