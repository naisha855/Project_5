import React from 'react';
import Product from './Product'
import {
    Carousel, Container, Row, Col,
} from 'react-bootstrap';




const Home = (props) => {
    let { character } = props;
    return (

        <>
            {/* Slider */}
            <Carousel data-bs-theme="dark">
                <Carousel.Item className='slider1'>
                    <Carousel.Caption>
                        <h1>Well come! to the SIDESHOW</h1>
                        <p>30Years star wars action figure shop</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='slider2'>
                    <Carousel.Caption>
                        <h1>Star Wars Action Figures</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='slider3'>
                    <Carousel.Caption>
                        <h1>Third slide label</h1>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>



            <Container>
                {/* section1 */}
                <Row>
                    <Col lg={3}><img src="https://htmldemo.net/ecolife/ecolife/assets/images/banner-image/1.jpg" /></Col>
                    <Col lg={6}><img src="https://htmldemo.net/ecolife/ecolife/assets/images/banner-image/2.jpg" /></Col>
                    <Col lg={3}><img src="https://htmldemo.net/ecolife/ecolife/assets/images/banner-image/3.jpg" /></Col>
                </Row>

                {/* section2 */}
                <Row>
                    {
                        character.map((character, i) =>
                            <Product character={character} key={i} />)
                    }
                </Row>
  
                {/* section4 */}

            </Container>
        </>
    )
}




export default Home