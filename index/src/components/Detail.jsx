import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button, Nav, Alert } from 'react-bootstrap'
import { useParams, Navigate } from 'react-router-dom'
import TabContent from '../components/TabContent'
import { useDispatch } from 'react-redux'
import { addItem } from '../store'

const Detail = (props) => {
    const { id } = useParams();
    const { product } = props;
    let [tab, setTab] = useState(0);
    let [alert, setAlert] = useState(true);
    const dispatch = useDispatch();
    let selproduct = product.find((x) => x.id == id);

    const moveCart = () => {
        dispatch(addItem({ id: selproduct.id, imgUrl: selproduct.imgUrl, item: selproduct.title, price: selproduct.price, amount: 1 }));
        Navigate('/cart');
    }

    useEffect(() => {
        setTimeout(() => { setAlert(false) }, 30000)
    }, [])

    return (

        <Container>
            {
                alert === true ?
                    <Alert variant='warning' className='sale_warning'>
                        !Warning! 은하제국 습격 중! 30초 이내에 은하제국 피규어 구매 시, 15% 할인 !Warning!
                    </Alert>
                    : null
            }
            <Row className='Detail_productpage'>
                <Col md={6} className='Detail_imglayer'>
                    <img src={product[id].imgUrl} className='Detail_img'/>
                </Col>
                <Col md={6} className='Detail_page'>
                    <h4 className='pt-5'>{selproduct.title}</h4>

                    <ul>
                        <li><h3>Brand</h3>
                        <p>{selproduct.brand}</p></li>
                        <li><h3>Character</h3>
                        <p>{selproduct.character}</p></li>
                        <li><h3>Manufacturer</h3>
                        <p>{selproduct. manufacturer}</p></li>
                        <li><h3>Type</h3>
                        <p>{selproduct.type}</p></li>
                        <li><h3>Genre</h3>
                        <p>{selproduct.genre}</p></li>
                        <li><h3>Artists</h3>
                        <p>{selproduct.artists}</p></li>
                    </ul>
                    <p>{selproduct.price}</p>
                    <Button color='white' classvariant='sucess' onClick= {()=>{dispatch(addItem({id: selproduct.id,imgUrl: selproduct.imgUrl, item: selproduct.title, amount: 1}))}}>Add to cart</Button>
                </Col>
            </Row>
            <Nav variant="tabs" defaultActiveKey="link0">

                <Nav.Item>
                    <Nav.Link className='Detail_tag' onClick={() => { setTab(0) }} eventKey="link0">Product</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='Detail_tag' onClick={() => { setTab(1) }} eventKey="link1">Preview</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='Detail_tag' onClick={() => { setTab(2) }} eventKey="link2">REVIEWS</Nav.Link>
                </Nav.Item>
            </Nav>

            <TabContent tab={tab} selproduct={selproduct} />

        </Container>
    )
}

export default Detail