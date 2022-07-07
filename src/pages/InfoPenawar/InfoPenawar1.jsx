import React, { Component } from 'react'
import { Container, Card, Button } from 'react-bootstrap';
import { Navbar2 } from "../../components";
import penjual from '../../assets/images/profile1.png';
import jam from '../../assets/images/img1.png';

export default class InfoPenawar1 extends Component {
    render() {
        return (
            <div className="App">
                <Navbar2 />
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
                        <Card className='cardinfopenawar' style={{ width: '50rem' }}>
                            <img className='mx-auto mt-3 jam' src={jam} alt="jam" />
                            <Card.Body>
                                <Card.Title>Jam Mahal</Card.Title>
                                <Card.Text>Aksesoris</Card.Text>
                                <Card.Title>Rp2.000.000</Card.Title>
                                <Button className='buybutton1' variant="primary">Tolak</Button>
                                <Button className='buybutton1' variant="primary">Terima</Button>
                            </Card.Body>
                        </Card><br />
                    </div>
                    
                </Container>
            </div>
        )
    }
}