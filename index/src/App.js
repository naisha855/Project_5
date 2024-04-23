import React, { useState } from 'react'
import {
  Container, Navbar, Nav, NavDropdown, Form, Button, Offcanvas, Image
} from 'react-bootstrap';
import { Routes, Route, useNavigate } from 'react-router-dom'
import data from './characterdata.js'
import data2 from './productdata.js'
import data3 from "./reviewdata.js"
import data4 from "./comingsoondata.js"
import data5 from "./userblogdata.js"
import data6 from "./partnersdata.js"
import info from "./shippinginfodata.js"
import Home from './components/Home'
import Detail from './components/Detail'
import Cart from './components/Cart'


// StyleSheet

import './scss/reset.scss'
import './scss/common.scss'
import './scss/home.scss'
import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/pagination'
import './styles.css'
import Login from './components/Login.jsx';

function App() {
  let [shippinginfo] = useState(info);
  let [character] = useState(data);
  let [product] = useState(data2);
  let [review] = useState(data3);
  let [comingsoon] = useState(data4);
  let [userblog] = useState(data5);
  let [partners] = useState(data6);
  let [no] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  let navigate = useNavigate();

  return (
    <div className="App" >
      <>
        {['md'].map((expand, i) => (
          <Navbar key={i}>
            <Container fluid>
              <Navbar.Brand onClick={() => { navigate('/') }}><Image src="/img/logo.png" height={'50px'} /></Navbar.Brand>
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
                    <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
                    <Nav.Link onClick={() => { navigate('/detail/0') }}>Shop</Nav.Link>
                    <Nav.Link onClick={() => { navigate('/cart') }}>Cart</Nav.Link>
                    <NavDropdown
                      title="My page"
                      id={`offcanvasNavbarDropdown-expand-${'md'}`}
                    >
                      <NavDropdown.Item href="/Login">login</NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Find ID & Password
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Create An Account
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

        <Routes>

          <Route path="/" element={<Home shippinginfo={shippinginfo} character={character} product={product} review={review} comingsoon={comingsoon} userblog={userblog}
            partners={partners} no={no} />} />
          <Route path="/detail/:id" element={<Detail product={product} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>





        {/* Footer */}

        <footer>
          <div className='footer_main'>
            <div className='footer_about'>
              <h6>about us</h6>
              <ul>
                <li>our story</li>
                <li>Affiliate Program</li>
                <li>Wholesale Program</li>
                <li>Press Inquiries</li>
                <li>Careers</li>
              </ul>
            </div>
            <div className='footer_customer'>
              <h6>customer support</h6>
              <ul>
                <li>Returns & Exchanges</li>
                <li>Shipping Information</li>
                <li>Track Your Order</li>
                <li>Promo Code Lookup</li>
                <li>Gift Card Lookup</li>
                <li>Earn Rewards</li>
                <li>Payment Plans</li>
                <li>Retail Store Locator</li>
                <li>Help Center</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div className='Footer_connect'>
              <h6>connect with us</h6>
              <div className='footer_span'>
                <span><img src='../img/Facebook_icon.png' /></span>
                <span><img src='../img/Twitter_icon.jpg' /></span>
                <span><img src='../img/Youtube_icon.png' /></span>
                <span><img src='../img/Sideshow_icon.png' /></span>
                <span><img src='../img/Instergream_icon.png' /></span>
                <span><img src='../img/Phinterest_icon.png' /></span>
                <span><img src='../img/Tiktok_icon.png' /></span>
              </div>
              <p>Want $20 Off? Sign up for our Newsletter.<br />
                Sign up for SMS alerts and be the first to know!</p>
              <button>Get in the loop</button>
            </div>
          </div>
          <br /><br /><br /><br /><br />
          <div className='footer_colphon'>
            <ul className='colphon_links'>
              <img src='/img/accredited_business.png' />
              <li>Privacy Policy</li>
              <span>|</span>
              <li>Terms & Conditions</li>
              <span>|</span>
              <li>Accessibility Statement</li>
            </ul>
            <div className='colphon_colyright'>
              <p>Series content, product specifications, release dates and pricing are subject to change. Sideshow Collectibles is the registered <br />trademark and copyright of Sideshow Inc. All Rights Reserved.</p>
            </div>
          </div>
        </footer>
      </>
    </div>
  );
}

export default App;