import React from 'react';
import Product from './Product'
import { Carousel, Container, Row, Col, Pagination, Image } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Navigation } from 'swiper/modules';
import Bestfigure from './Bestfigure';
import Userreview from './Userreview';
import Comingsoon from './Comingsoon';
import Partners from './Partners';
import Userblog from './Userblog';


const Home = (props) => {
    let { character, product, review, comingsoon, userblog, partners } = props;
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
                <Row className='section1'>
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
                    <Row style={{ height: 500 }}>
                        <Col className='left' md={5} xl={4}>
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
                                modules={[Grid, Navigation]}
                                className="leftmySwiper">

                                {
                                    product.map((product, i) =>
                                        <SwiperSlide>
                                            <Bestfigure product={product} key={i} />
                                        </SwiperSlide>)
                                }


                            </Swiper>
                        </Col>
                        <Col className='right' md={7} xl={8} style={{ height: '100%' }}>
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

            {/* Section4 */}

            <div className="section4">

                <Swiper
                    slidesPerView={2}
                    // centeredSlides={true}
                    spaceBetween={30}
                    grabCursor={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={Pagination}
                    className="reviewmySwiper"
                >

                    {
                        review.map((review, i) =>
                            <SwiperSlide key={i}>
                                <Userreview review={review} />
                            </SwiperSlide>
                        )
                    }

                </Swiper>
            </div>

            {/* Section5 */}

            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <Image src="holder.js/171x180" rounded />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src="holder.js/171x180" rounded />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src="holder.js/171x180" rounded />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src="holder.js/171x180" rounded />
                    </Col>
                </Row>
            </Container>

            {/* Section6 */}

            <div className='section6'>

                <Swiper
                    slidesPerView={3}
                    grid={{
                        rows: 2,
                    }}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    // modules={[Grid, Pagination]}
                    modules={Pagination}
                    className="comingsoonmySwiper"
                >
                    {
                        comingsoon.map((comingsoon, i) =>
                            <SwiperSlide key={i}>
                                <Comingsoon comingsoon={comingsoon} />
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>

            {/* section7 */}

            <Image src="/img/section_7.jpg" fluid />;

            {/* section8 */}

            {/* <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="userblogmySwiper"
            >
                {
                    userblog.map((userblog, i) =>
                        <SwiperSlide key={i}>
                            <Userblog userblog={userblog} />
                        </SwiperSlide>
                    )

                }
            </Swiper> */}

            {/* section9 */}
            <div className='section9'>
                <Swiper watchSlidesProgress={true} slidesPerView={3} className="partnersmySwiper">
                    {
                        partners.map((partners, i) =>
                            <SwiperSlide key={i}>
                                <Partners partners={partners} />
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </>
    )
}




export default Home