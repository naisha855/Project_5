import React from 'react'
import { Col } from 'react-bootstrap'

// Section2

const Product = (props) => {
  let { title, content, imgUrl } = props.character;
  return (
    <Col md={4} className='character'>
      <img src={process.env.PUBLIC_URL + imgUrl} alt="" className='characterimage'/>
      <div className='Character_page'>
      <h4>{title}</h4>
      <p>{content}</p>
      <a href="#">Shop Now</a>
      </div>
    </Col>
  )
}

export default Product