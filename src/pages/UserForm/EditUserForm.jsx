
import { FormLabel, FormControl, FormSelect } from '../../components/Form/FormElements';
import { UploadProfilePicture, BtnFormUser } from '../../components/Form/UsersFormElements';
import { Form } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { NavbarPlain } from "../../components";

function UserForm() {
    return (
        <>
            <div>
                <NavbarPlain title="Lengkapi Info Akun" />
                <Container className="mt-5 py-5">
                    <Form>
                        <Form.Group className='mt-4 mb-2'>
                            <UploadProfilePicture className='mx-auto'/>
                        </Form.Group>
                        <Form.Group className='my-2'>
                            <FormLabel>Nama*</FormLabel>
                            <FormControl type="text" placeholder="Nama" />
                        </Form.Group>
                        <Form.Group className='my-2'>
                            <FormLabel>Kota*</FormLabel>
                            <FormSelect>
                                <option>Kota</option>
                            </FormSelect>
                        </Form.Group>
                        <Form.Group className='mt-2'>
                            <FormLabel>Alamat*</FormLabel>
                            <FormControl as="textarea" placeholder="Contoh: Jalan Kaki 5" />
                        </Form.Group>
                        <Form.Group className='mb-2'>
                            <FormLabel>No. Handphone*</FormLabel>
                            <FormControl type="text" placeholder="Contoh: +628912345678" />
                        </Form.Group>
                        <BtnFormUser className='mt-2 mb-4' type="submit" href="/">Submit</BtnFormUser>
                    </Form>
                </Container>
            </div>
        </>
    )
}

export default UserForm;