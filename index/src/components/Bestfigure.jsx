import React from 'react'

// section3

const Bestfigure = (props) => {
    let { imgUrl, title, size, price } = props.product;

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div>
                <img src={imgUrl} alt="item" className='section3_img'
                />
            </div>
            <div className='best_figure'>
                <a href="">{title}</a>
                <h5>{size}</h5>
                <p>{price}</p>
            </div>
        </div>
    );
}

export default Bestfigure