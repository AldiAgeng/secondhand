import { FormLabel, FormControl, FormSelect } from '../../components/Form/FormElements';
import { BtnFormProduct, UploadProductPicture } from '../../components/Form/ProductsFormElements';
import { Form, Row, Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { NavbarPlain } from "../../components";

function ProductForm() {
    return (
        <>
            <div>
                <NavbarPlain title="Lengkapi Info Produk" />
                <Container className="mt-5 py-5">
                    <Form>
                        <Form.Group className='mt-4 mb-2'>
                            <FormLabel>Nama Produk</FormLabel>
                            <FormControl type="text" placeholder="Nama Produk" />
                        </Form.Group>
                        <Form.Group className='my-2'>
                            <FormLabel>Harga Produk</FormLabel>
                            <FormControl type="text" placeholder="Rp. 0,00" />
                        </Form.Group>
                        <Form.Group className='my-2'>
                            <FormLabel>Kategori</FormLabel>
                            <FormSelect>
                                <option>Pilih Kategori</option>
                            </FormSelect>
                        </Form.Group>
                        <Form.Group className='my-2'>
                            <FormLabel>Deskripsi</FormLabel>
                            <FormControl as="textarea" placeholder="Contoh: Produk Penghilang Rorombeheun" />
                        </Form.Group>
                        <Form.Group className='my-2'>
                            <FormLabel>Foto Produk</FormLabel>
                            <UploadProductPicture className='mx-auto' />
                        </Form.Group>
                        <Form.Group>
                            <Row>
                                <Col>
                                    <BtnFormProduct className='mt-2 mb-4' type="submit">Cancel</BtnFormProduct>
                                </Col>
                                <Col>
                                    <BtnFormProduct className='mt-2 mb-4' type="submit" href="/daftar-jual">Submit</BtnFormProduct>
                                </Col>
                            </Row>
                        </Form.Group>
                    </Form>
                </Container>
            </div>
        </>
    )
}

export default ProductForm;