import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button, Nav, Alert } from 'react-bootstrap'
import { useParams, Navigate } from 'react-router-dom'
import TabContent from '../components/TabContent'
import styled from 'styled-components'
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
                    <Alert variant='warning'>
                        !Warning! 은하제국 습격 중! 30초 이내에 은하제국 피규어 구매 시, 15% 할인 !Warning!
                    </Alert>
                    : null
            }
            <Row>
                <Col md={6}>
                    <img src={product[id].imgUrl} width="100%" />
                </Col>
                <Col md={6}>
                    <h4 className='pt-5'>{selproduct.title}</h4>
                    <p>{selproduct.text}</p>
                    <p>{selproduct.price} $</p>
                    <Button variant='sucess' onClick= {()=>{dispatch(addItem({id: selproduct.id, item: selproduct.title, amount: 1}))}}>Add to cart</Button>
                </Col>
            </Row>
            <Nav variant="tabs" defaultActiveKey="link0">

                <Nav.Item>
                    <Nav.Link onClick={() => { setTab(0) }} eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => { setTab(1) }} eventKey="link1">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => { setTab(2) }} eventKey="link2">버튼2</Nav.Link>
                </Nav.Item>
            </Nav>

            <TabContent tab={tab} />

        </Container>
    )
}

export default Detail