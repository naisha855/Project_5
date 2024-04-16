import React from 'react'

const TabContent = (props) => {
    let { tab } = props;
    // let { imgProduct1 } = props.product;
    if(tab===0){
  
      return <div>내용0</div>
      // {imgProduct1}
    }else if(tab===1){
  
      return <div>내용1</div>
  
    }else if(tab===2){
  
      return <div>Review</div>

    }  
  }

  export default TabContent