import { useState } from 'react';
import { Modal, Button, Card, Row, Col, Form } from 'react-bootstrap';
import { ModalHeader, ModalFooter, ModalTextBold, ModalTextLight, ModalText, ModalFoto } from './ModalElements';
import { FormControl } from '../Form/FormElements';
import { CardModal } from './CardElements';
import { BtnPrimary } from '../Buttons/ButtonElements';

function ModalTawar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch static backdrop modal
            </Button>

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
                                    <ModalTextBold>Nama Barang</ModalTextBold>
                                    <ModalText>Harga Barang</ModalText>
                                </Col>
                            </Row>
                        </Card.Body>
                    </CardModal>
                    <Form.Group className='mt-4'>
                        <ModalTextBold className='mb-2'>Harga Tawar</ModalTextBold>
                        <FormControl type="text" placeholder="Rp. 0,-" />
                    </Form.Group>
                </Modal.Body>
                <ModalFooter>
                    <BtnPrimary className='w-100'>Kirim</BtnPrimary>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default ModalTawar;