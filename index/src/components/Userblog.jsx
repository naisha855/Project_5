import React from 'react'
import { Col } from 'react-bootstrap'

// Section8

const Userblog = (props) => {
    let { title, text, link, imgUrl } = props.userblog;
    return (
        <Col className='section8'>
            <button></button>
            <h3>{title}</h3>
            <p>{text}</p>
            <a href={link}>Read More</a>
            <img src={imgUrl} alt="" />
        </Col>
    )
}

export default Userblog