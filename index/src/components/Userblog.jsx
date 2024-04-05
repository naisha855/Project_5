import React from 'react'
import { Col } from 'react-bootstrap'

const Userblog = (props) => {
    let { title, text, link, imgUrl } = props.character;
    return (
        <Col>
            <button></button>
            <h3>{title}</h3>
            <p>{text}</p>
            <a href={link}></a>
            <img src={imgUrl} alt="" />
        </Col>
    )
}

export default Userblog