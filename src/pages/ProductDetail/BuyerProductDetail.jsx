import React, { Component } from 'react';
import jam from '../../assets/images/img1.png';
import { Container, Carousel, Card } from 'react-bootstrap';
import { NavbarMenu } from "../../components";
import { BtnPrimary } from "../../components/Buttons/ButtonElements";
import profile from '../../assets/images/profile1.png';

export default class BuyerProductDetail extends Component {
    render() {
        return (
            <div className="App">
                <NavbarMenu />
                <Container className="mt-5 py-5">
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <img className='fotopenjual' src={profile} alt="background" />
                            <Card.Title>Violencia</Card.Title>
                            <Card.Text>
                            Sulawesi Tenggara
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Carousel className='mt-4 carousel1'>
                        <Carousel.Item>
                            <img className='jam' src={jam} alt="jam" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className='jam' src={jam} alt="jam" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className='jam' src={jam} alt="jam" />
                        </Carousel.Item>
                    </Carousel>
                    <Card className='mt-4 card1' style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Jam Mahal</Card.Title>
                            <Card.Text>
                                aksesoris <br />
                                <b>Rp2.000.000</b>
                            </Card.Text>
                            <BtnPrimary className='buybutton'>Ajukan Penawaran</BtnPrimary>
                        </Card.Body>
                    </Card><br />
                    <div className='desc'>
                        <h2>Description</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas quasi sit fuga facilis quam tenetur. Nulla commodi, excepturi quae ut numquam tempora sint possimus vitae delectus voluptate. Inventore, cumque ut?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, temporibus?Quisquam modi esse iste corporis perspiciatis quia quae beatae in id quas porro, voluptatum fugiat, rerum veniam ducimus hic maiores Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem consectetur, animi perferendis quisquam voluptate maxime sit, laborum omnis minima dignissimos similique eius itaque beatae molestias quaerat dolorem. Necessitatibus, eos ab..</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas quasi sit fuga facilis quam tenetur. Nulla commodi, excepturi quae ut numquam tempora sint possimus vitae delectus voluptate. Inventore, cumque ut?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, temporibus?Quisquam modi esse iste corporis perspiciatis quia quae beatae in id quas porro, voluptatum fugiat, rerum veniam ducimus hic maiores Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem consectetur, animi perferendis quisquam voluptate maxime sit, laborum omnis minima dignissimos similique eius itaque beatae molestias quaerat dolorem. Necessitatibus, eos ab..</p>
                    </div>
                </Container>
          </div>
        )
    }
}