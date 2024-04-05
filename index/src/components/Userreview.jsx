import React from 'react'
import { Col } from 'react-bootstrap';

const Userreview = (props) => {
    let { imgUrl, text, userID, Email } = props.review;
    return (
        <Col>
            <img src={imgUrl} alt="" />
            <p>{text}</p>
            <a href="">{userID}</a>
            <h5>{Email}</h5>
        </Col>
    )
}

export default Userreview