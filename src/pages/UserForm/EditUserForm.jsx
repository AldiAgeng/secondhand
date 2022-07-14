import { useState, useEffect} from "react";
import { FormLabel, FormControl, FormSelect } from '../../components/Form/FormElements';
import { UploadProfilePicture, BtnFormUser } from '../../components/Form/UsersFormElements';
import { Form, Image, Container } from 'react-bootstrap';
import { NavbarPlain } from "../../components";
import axios from "axios";
import style from "./editUserForm.module.css";

function UserForm() {
    const [users, setUsers] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [image, setImage] = useState("");

    const formEdit = (e) => {
        axios({
            method: "put",
            url: "https://tokoku-api.herokuapp.com/api/v1/auth/user",
            data : {
                name: name,
                address: address,
                phone_number: phone,
                picture: image, 
            },
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then((response) => {
            console.log(response.data, "data");
            console.log(localStorage.getItem('token'));
        })
    }


    const imgUrl = "https://tokoku-api.herokuapp.com/uploads/users/" + users.picture;

    console.log(imgUrl);

    const whoami = () => {
        axios.get(`https://tokoku-api.herokuapp.com/api/v1/auth/user`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then((response) => {
            console.log(response, "data");
            setUsers(response.data.data);
            console.log(response.data.data);
            console.log(localStorage.getItem('token'));
        })
    }

    useEffect(() => {
        whoami();
    },[])

    return (
        <>
            <div>
                <NavbarPlain title="Lengkapi Info Akun" />
                <Container className="mt-5 py-5">
                    <Form enctype="multipart/form-data">
                        <Form.Group className='mt-4 mb-2'>
                        {users.picture == null ? (
                                <UploadProfilePicture className="mx-auto" />
                            ) : (
                                <div className="d-flex justify-content-center">
                                    <Image className="imgPreview" src={imgUrl} />
                                </div>
                            )
                        }
                        </Form.Group>
                        <Form.Group className='my-2'>
                            <FormLabel>Nama*</FormLabel>
                            <FormControl 
                                type="text" 
                                placeholder="Nama Kamu"
                                value={name} 
                                onChange={(e) => setName(e.target.value)}
                                defaultValue={users.name}
                            />
                        </Form.Group>
                        {/* <Form.Group className='my-2'>
                            <FormLabel>Kota*</FormLabel>
                            <FormControl type="text" placeholder="Kota" value={users.address} />
                        </Form.Group> */}
                        <Form.Group className='mt-2'>
                            <FormLabel>Alamat*</FormLabel>
                            <FormControl 
                                as="textarea" 
                                placeholder="Contoh: Jalan Kaki 5"
                                value={address} 
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className='mb-2'>
                            <FormLabel>No. Handphone*</FormLabel>
                            <FormControl 
                                type="text" 
                                placeholder="Contoh: +628912345678"
                                value={phone} 
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>    
                            <FormLabel>Picture</FormLabel>
                            <FormControl
                                type="file"
                                value={image} 
                                onChange={(e) => setImage(e.target.value)}
                            />
                        </Form.Group>
                        <BtnFormUser className='mt-2 mb-4' onClick={formEdit}>Submit</BtnFormUser>
                    </Form>
                </Container>
            </div>
        </>
    )
}

export default UserForm;