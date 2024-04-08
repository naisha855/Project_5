import React from 'react'
import { Col } from 'react-bootstrap';

// Section9

const Partners = (props) => {
    let { logo } = props.partners;
    return (
        <Col>
            <img src={logo} alt="" />
        </Col>
    )
}

export default Partners