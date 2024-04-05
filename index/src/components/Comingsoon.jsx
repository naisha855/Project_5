import React from 'react'
import { Col } from 'react-bootstrap';

const Comingsoon = (props) => {
    let { imgUrl, scale, title } = props.comingsoon;
    return (
        <Col>
            <img src={imgUrl} alt="" />
            <h5>{scale}</h5>
            <a href="">{title}</a>
        </Col>
    )
}

export default Comingsoon