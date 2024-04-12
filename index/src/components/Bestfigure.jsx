import React from 'react'
import { Nav } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

// section3

const Bestfigure = (props) => {
    let navigate = useNavigate();
    let { imgUrl, title, size, price } = props.product;
    let { i , no } = props;

    return (
        <div    className='Section3_page' style={{ display: 'flex', flexDirection: 'column' }}>
            <Nav.Link onClick={()=>navigate('/detail/' + no[i])}>
            <div>
                <img src={imgUrl} alt="item" className='section3_img'
                />
            </div>
            <div className='best_figure'>
                <a href="">{title}</a>
                <h5>{size}</h5>
                <p>{price}</p>
            </div>
            </Nav.Link>
        </div>
    );
}

export default Bestfigure