import React, { Component } from 'react'
import { Container, Card } from 'react-bootstrap';
import { NavbarPlain } from "../../components";
import { BtnPrimary } from "../../components/Buttons/ButtonElements";
import jam from '../../assets/images/img1.png';
import penjual from '../../assets/images/profile1.png';


export default class InfoPenawar2 extends Component {
    render() {
        return (
            <div className="App">
                <NavbarPlain title="Info Penawar" />
                <Container className='my-5 pt-5'>
                    <Card className='mt-2 mb-5 profileinfopenawar' style={{ width: '18rem' }}>
                        <Card.Body>
                            <img className='fotopenjual' src={penjual} alt="background" />
                            <Card.Title>Violencia</Card.Title>
                            <Card.Text>
                            Sulawesi Tenggara
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <div className="d-flex flex-column align-items-center">
                        <h5 className="mb-3">Daftar Produkmu yang ditawarkan</h5>
                        <Card className='mb-5' style={{ width: '50rem' }}>
                            <img className='mx-auto mt-3 jam' src={jam} alt="jam" />
                            <Card.Body>
                                <Card.Title>Jam Mahal</Card.Title>
                                <Card.Text>Aksesoris</Card.Text>
                                <Card.Text>Rp2.000.000</Card.Text>
                                <BtnPrimary className='buybutton1'>Status</BtnPrimary>
                                <BtnPrimary className='buybutton1'>Hubungi melalui Whatsapp</BtnPrimary>
                            </Card.Body>
                        </Card>
                    </div>
                </Container>
            </div>
            )
        }
      }