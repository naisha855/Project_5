import React from 'react';
import Product from './Product'
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Navigation } from 'swiper/modules';
import Bestfigure from './Bestfigure';


const Home = (props) => {
    let { character, product } = props;
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
                    <Col lg={3}><img src="/img/section1_1.jpg" /></Col>
                    <Col lg={6}><img src="/img/section1_2.jpg" /></Col>
                    <Col lg={3}><img src="/img/section1_3.jpg" /></Col>
                </Row>

                {/* section2 */}
                <Row>
                    {
                        character.map((character, i) =>
                            <Product character={character} key={i} />)
                    }
                </Row>


            </Container>


            {/* section3 */}
            <div className='section3'>
                <Container>
                    <Row style={{height: 500}}>
                        <Col md={5} xl={4} style={{height: '100%'}}>
                            <Swiper
                                slidesPerView={2}
                                spaceBetween={20}
                                navigation={true}
                                // grid={{
                                //     rows: 1,
                                // }}
                                breakpoints={{
                                    768: {
                                        slidesPerView: 1,
                                        spaceBetween: 0,
                                    }
                                }}
                                modules={[Grid,Navigation]}
                                className="leftmySwiper">
                             
                                {
                                    product.map((product, i) =>
                                        <SwiperSlide style={{height: '500px'}}>
                                            <Bestfigure product={product} key={i} />
                                        </SwiperSlide>)
                                }


                            </Swiper>
                        </Col>
                        <Col md={7} xl={8} style={{height: '100%'}}>
                            <Swiper
                                slidesPerView={2}
                                grid={{
                                    rows: 2,
                                }}
                                spaceBetween={20}
                                navigation={true}
                                breakpoints={{
                                    768: {
                                        slidesPerView: 3,
                                        spaceBetween: 20,
                                    },
                                    1200: {
                                        slidesPerView: 4,
                                        spaceBetween: 20,
                                    },
                                }}
                                modules={[Grid, Navigation]}
                                className="rightmySwiper"
                            >
                                {
                                    product.map((product, i) =>
                                    <SwiperSlide>
                                <Bestfigure product={product} key={i} />
                                </SwiperSlide>)}
                            </Swiper>
                        </Col>

                    </Row>
                </Container>
            </div>

            {/* <Container>
                <Row>
                    {
                        product.map((product, i) =>
                            <Bestfigure product={product}
                                key={i} />)
                    }
                </Row>
            </Container> */}
            {/* section4 */}

        </>
    )
}




export default Home