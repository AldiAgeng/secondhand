import { useState, useEffect } from 'react';
import { Modal, Button, Card, Row, Col, Form } from 'react-bootstrap';
import { ModalHeader, ModalFooter, ModalTextBold, ModalTextLight, ModalText, ModalFoto } from './ModalElements';
import { FormControl } from '../Form/FormElements';
import { CardModal } from './CardElements';
import { BtnPrimary } from '../Buttons/ButtonElements';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import { toast, ToastContainer } from 'react-toastify';


function ModalTawar({ products }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [bid, setBid] = useState();
    console.log(localStorage.getItem('token'))
    const bidProduct = async () => {
        const data = {
            price: bid,
            status: "bid",
            id_product: products.id,
        }
        await axios.post(`https://tokoku-api.herokuapp.com/api/v1/buyer/order`, data, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },


        })
            .then(response => {
                swal({
                    title: "Berhasil!",
                    text: "Produk berhasil anda tawar!",
                    icon: "success",
                    button: "Uhuyy!",
                });
                console.log(response, "response");
            }).catch(error => {
                toast("Masukan data berupa angka dan valid", {
                    type: "error",
                });

            }
            )

    }

    console.log(products, "products");

    return (
        <>
            <ToastContainer />
            <BtnPrimary onClick={handleShow}>
                Ajukan Penawaran
            </BtnPrimary>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >

                <ModalHeader closeButton>

                </ModalHeader>
                <Modal.Body>
                    <ModalTextBold className='mb-2'>Masukkan Harga Tawarmu</ModalTextBold>
                    <ModalTextLight className='my-2'>Harga tawaranmu akan diketahui penual, jika penjual cocok kamu akan segera dihubungi penjual.</ModalTextLight>
                    <CardModal className='my-2'>
                        <Card.Body>
                            {/* Barang */}
                            <Row>
                                <Col md={4}>
                                    <ModalFoto />
                                </Col>
                                <Col md={6}>
                                    <ModalTextBold>{products.name}</ModalTextBold>
                                    <ModalText>{products.price}</ModalText>
                                </Col>
                            </Row>
                        </Card.Body>
                    </CardModal>
                    <Form.Group className='mt-4'>
                        <ModalTextBold className='mb-2'>Harga Tawar</ModalTextBold>
                        <FormControl
                            value={bid}
                            onChange={(e) => setBid(e.target.value)}
                            type="text"
                            placeholder="Rp. 0,-" />
                    </Form.Group>
                </Modal.Body>
                <ModalFooter>
                    <BtnPrimary className='w-100' onClick={bidProduct}>Kirim</BtnPrimary>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default ModalTawar;