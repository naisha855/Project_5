import {
  Container, Navbar, Nav, NavDropdown, Form, Button, Offcanvas, Row, Image, Col
} from 'react-bootstrap';
import React, { useRef, useState } from 'react';
import data from './characterdata.js';
import data2 from './productdata.js';
import Home from './components/Home';
import Bestfigure from './components/Bestfigure.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Navigation, Pagination } from 'swiper/modules';
// import Detail from './components/Detail.js';



// StyleSheet

import './scss/reset.scss'
import './scss/common.scss'
import './scss/home.scss'
import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/pagination'
import './styles.css'


function App() {

  let [character, setChracter] = useState(data);
  let [product, setProduct] = useState(data2);

  return (
    <div className="App">
      <>
        {['md'].map((expand) => (
          <Navbar>
            <Container fluid>
              <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'md'}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${'md'}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'md'}`}>
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Shop</Nav.Link>
                    <NavDropdown
                      title="Dropdown"
                      id={`offcanvasNavbarDropdown-expand-${'md'}`}
                    >
                      <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Something else here
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}

        <Home character={character} product={product}/>

        {/* Section4 */}

        <Swiper
          slidesPerView={2}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper> 





        {/* Section5 */}

        {/* <Container>
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
        </Container> */}


        {/* Section6 */}

        {/* <Swiper
        slidesPerView={3}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */}

        {/* section7 */}

        <Image src="/img/section_7.jpg" fluid />;

        {/* section8 */}



        {/* section9 */}
        <h3>
          Slider5 is visible when you slide to 2,3, or 4, and slider5 has
          "swiper-slide-visible" className
        </h3>{" "}
        <br />
        <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper">
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>

        {/* Footer */}

      </>
    </div>
  );
}

export default App;