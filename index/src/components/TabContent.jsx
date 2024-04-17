import React from 'react'

const TabContent = (props) => {
  let { tab, selproduct } = props;
  // let { imgProduct1 } = props.product;
  if (tab === 0) {

    return (
      <div className='DetailProduct_img'>
        <img src={selproduct.imgProduct1} alt="" />
        <img src={selproduct.imgProduct2} alt="" />
        <img src={selproduct.imgProduct3} alt="" />
        <img src={selproduct.imgProduct4} alt="" />
        <img src={selproduct.imgProduct5} alt="" />
      </div>
    )} else if (tab === 1) {

    return <div className='Preview_text'><p>{selproduct.preview}</p></div>

  } else if (tab === 2) {

    return <div>Review</div>

  }
}

export default TabContent