import React from 'react'

const Bestfigure = (props) => {
    let { imgUrl, title, size, price } = props.product;

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div width={'120px'} height={'120px'}>
                <img src={imgUrl} alt="item" className='section3_img'
                />
            </div>
            <a href="">{title}</a>
            <h5>{size}</h5>
            <p>{price}</p>
        </div>
    );
}

export default Bestfigure