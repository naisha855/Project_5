import React from 'react'
import { Col } from 'react-bootstrap'

// Section5

const Shippinginfo = (props) => {
    let { imgUrl, title, text } = props.shippinginfo;
    return (
        <Col xs={6} md={4}>
            <img src={imgUrl} alt="" />
            <div>
            <h3>{title}</h3>
            <p>{text}</p>
            </div>
        </Col>
    )
}

export default Shippinginfo