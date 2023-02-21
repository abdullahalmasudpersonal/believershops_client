import { faStar } from '@fortawesome/free-regular-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Attar.css';

const Attar = ({ attar }) => {
    const { _id, brand, name, img, availability, ragularPrice, offerPrice, weight1 } = attar;
    const navigate = useNavigate();
    const userid = useParams();
   

    const navigateToProductDetails = _id =>{
        navigate(`/categore/islamic/attar/${_id}`); 
    }
    
    return (
        <div className='attar-dev'>

            <div className='product-dev'>
                <img src={img} alt='' className='img-fluid mb-1' />
                <h6 className='text-center product-dev-h6 mb-1 mt-2' onClick={() => navigateToProductDetails(_id)}>{name}</h6>
                <p className='text-center m-0'>
                    <small>4.5 </small>
                    <FontAwesomeIcon icon={faStar} style={{ color: 'gray', width: '13px' }} />
                    <FontAwesomeIcon icon={faStar} style={{ color: 'gray', width: '13px' }} />
                    <FontAwesomeIcon icon={faStar} style={{ color: 'gray', width: '13px' }} />
                    <FontAwesomeIcon icon={faStar} style={{ color: 'gray', width: '13px' }} />
                    <FontAwesomeIcon icon={faStar} style={{ color: 'gray', width: '13px' }} />
                    <small> (27)</small>
                </p>
                <p className='text-center product-dev-p'>
                    {
                        offerPrice ?
                            <p>
                                <span style={{ fontSize: '14px', fontFamily: "Optima", fontWeight: 'bold' }}>৳</span>
                                <span>{offerPrice}.00 &nbsp;</span>

                                <span style={{ fontSize: '13px', fontFamily: "Optima", fontWeight: 'bold', color: 'gray', textDecoration: 'line-through 1px' }}>৳ {ragularPrice}.00</span>
                            </p>
                            :
                            <span><span style={{ fontSize: '15px', fontFamily: "Optima", fontWeight: 'bold' }}>৳</span>{ragularPrice}.00</span>
                    }
                </p>
            </div>
        </div>

    );
};

export default Attar;

