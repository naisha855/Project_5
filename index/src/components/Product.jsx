import React from 'react'
import { Col } from 'react-bootstrap'

const Product = (props) => {
  let { title, content, imgUrl } = props.character;
  return (
    <Col md={4}>
      <img src={imgUrl} alt="" />
      <h4>{title}</h4>
      <p>{content}</p>
      <a href="#">Shop Now</a>
    </Col>
  )
}

export default Product