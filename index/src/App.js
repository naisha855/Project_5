import {
  Container, Navbar, Nav, NavDropdown, Form, Button, Offcanvas, Image
} from 'react-bootstrap';
import React, { useState } from 'react'
import data from './characterdata.js'
import data2 from './productdata.js'
import data3 from "./reviewdata.js"
import data4 from "./comingsoondata.js"
import data5 from "./userblogdata.js"
import data6 from "./partnersdata.js"
import info from "./shippinginfodata.js"
import Home from './components/Home'

// StyleSheet

import './scss/reset.scss'
import './scss/common.scss'
import './scss/home.scss'
import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/pagination'
import './styles.css'

function App() {
  let [shippinginfo, setShippinginfo] = useState(info);
  let [character, setChracter] = useState(data);
  let [product, setProduct] = useState(data2);
  let [review, setReview] = useState(data3);
  let [comingsoon, setComingsoon] = useState(data4);
  let [userblog, Setuserblog] = useState(data5);
  let [partners, setPartners] = useState(data6);

  return (
    <div className="App">
      <>
        {['md'].map((expand) => (
          <Navbar>
            <Container fluid>
              <Navbar.Brand href="#"><Image src="/img/logo.png" height={'50px'} /></Navbar.Brand>
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

        <Home shippinginfo={shippinginfo} character={character} product={product} review={review} comingsoon={comingsoon} userblog={userblog}
        partners={partners} />

        {/* Footer */}



      </>
    </div>
  );
}

export default App;