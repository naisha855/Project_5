import React from 'react'
import { Col } from 'react-bootstrap';

// Section4

const Userreview = (props) => {
    let { imgUrl, text, userID, Email } = props.review;
    return (
        <Col className='userreview'>
            <img src={imgUrl} alt="" className='profileimage' />
            <div className='textpage'>
                <p>{text}</p>
                <div className='reviewlog'>
                    <img src="../public/img/review_icon" className='double_quotes' alt="" />
                    <a href="">{userID}</a>
                    <h5>{Email}</h5>
                </div>
            </div>
        </Col>
    )
}

export default Userreview