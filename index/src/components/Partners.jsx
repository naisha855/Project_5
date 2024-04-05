import React from 'react'
import { Col } from 'react-bootstrap';

const Partners = (props) => {
    let { logo } = props.partners;
    return (
        <Col>
            <img src={logo} alt="" />
        </Col>
    )
}

export default Partners