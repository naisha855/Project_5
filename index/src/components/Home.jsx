import React from 'react';
import Product from './Product'
import { Carousel, Container, Row, Col, Image } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Navigation, Pagination } from 'swiper/modules';
import Shippinginfo from './Shippinginfo'
import Bestfigure from './Bestfigure';
import Userreview from './Userreview';
import Comingsoon from './Comingsoon';
import Partners from './Partners';
import Userblog from './Userblog';

const Home = (props) => {
    let { character, product, review, comingsoon, userblog, partners, shippinginfo, no } = props;
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

                <div className='title'>
                    <h2>Star Wars Character</h2>
                    <p>A long time ago in a galaxy far, far away....</p>
                </div>
                <Row>
                    {
                        character.map((character, i) =>
                            <Product character={character} key={i} />)
                    }
                </Row>

            </Container>

            {/* section3 */}
            <Container>
                <div className='title'>
                    <h2>Action Figures</h2>
                    <p>Are you one with the Force, young Padawan? With our epic range of Star Wars action figures, your local star system will be bursting with legendary favorites. Whether you’re a Rebel at heart or you have a soft spot for the dark side, we've got the droids, Wookiees, and Jedi Masters to boost your shelf’s interstellar style. To explore the galaxy far, far away in greater depth, check out our Star Wars collectibles. Then, if you think your collection can handle more, your next adventure lies within our entire action figures collection. May the Force (of collecting) be with you!</p>
                </div>
            </Container>
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
                                            <Bestfigure product={product} key={i} i={i} no={no}/>
                                        </SwiperSlide>)}
                            </Swiper>
                        </Col>

                    </Row>
                </Container>
            </div>

            <Container>

                {/* Section4 */}

                <div className="section4">

                    <div className='title'>
                        <h2>Review</h2>
                        <p>Show off your force.</p>
                    </div>

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

                <Row className='section5'>
                    {
                        shippinginfo.map((shippinginfo, i) =>
                            <Shippinginfo shippinginfo={shippinginfo} key={i} />
                        )
                    }
                </Row>

                {/* Section6 */}

                <div className='section6'>

                    <div className='title'>
                        <h2>Comingsoon</h2>
                        <p>Look forward to it.</p>
                    </div>

                    <Swiper
                        slidesPerView={3}
                        grid={{
                            rows: 2,
                        }}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Grid, Pagination]}
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

                <Image src="/img/section_7.jpg" width={'100%'} fluid />;



                {/* section8 */}

                <div className='title'>
                    <h2>SiDESHoW recommend</h2>
                    <p>Welcome to my site</p>
                </div>

                {<Swiper
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
                </Swiper>}

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
            </Container>
        </>
    )
}




export default Home