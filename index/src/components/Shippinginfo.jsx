import React from 'react'
import { Col } from 'react-bootstrap'

// Section5

const Shippinginfo = (props) => {
    let { imgUrl, title, text } = props.shippinginfo;
    return (
        <Col xs={6} md={4} className='section5_list'>
            <img src={imgUrl} alt="" width={'80px'} height={'80px'}/>
            <div className='section5_textpage'>
            <h3>{title}</h3>
            <p>{text}</p>
            </div>
        </Col>
    )
}

export default Shippinginfo