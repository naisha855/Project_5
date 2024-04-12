import React from 'react'

// section6

const Comingsoon = (props) => {
    let { imgUrl, scale, title } = props.comingsoon;
    return (
        <div className='comingsoon'>
            <img src={imgUrl} alt="" />
            <div>
            <h5>{scale}</h5>
            <a href="">{title}</a>
            </div>
        </div>
    )
}

export default Comingsoon