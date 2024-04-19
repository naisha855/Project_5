import React from 'react'

const TabContent = (props) => {
  let { tab, selproduct } = props;
  if (tab === 0) {

    return (
      <div className='DetailProduct_img'>
        <img src={selproduct.imgProduct1} alt="" />
        <img src={selproduct.imgProduct2} alt="" />
        <img src={selproduct.imgProduct3} alt="" />
        <img src={selproduct.imgProduct4} alt="" />
        <img src={selproduct.imgProduct5} alt="" />
      </div>
    )
  } else if (tab === 1) {

    return <div className='Preview_text'><p>{selproduct.preview}</p></div>

  } else if (tab === 2) {

    return (
      <>
        <div className='Review_title'>
          <h4>Review</h4>
        </div>
        <div className='Review_info'>
          <div>(5.0)</div>
          <a href="" className='review_list'> 0 ratings</a>
          <a href="" className='write_a_review'>Write a Review</a>
        </div>
      </>
    )


  }
}

export default TabContent