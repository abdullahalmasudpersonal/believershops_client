import { faStar } from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../AllFoodsCss/AllFood.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Dates = ({handleAddToCard, dates}) => {
    const { _id, brand, name, img, availability, ragularPrice, offerPrice, weight1 } = dates;
    const navigate = useNavigate();

    const navigateToProductDetails = _id => {
        navigate(`/categore/islamic/attar/${_id}`);
    }

    return (
        <div className='islamic-product-dev'>
            <img src={img} alt='' className='img-fluid mb-1' />
            <h6 className='text-center islamic-product-dev-h6 mb-1 mt-2' onClick={() => navigateToProductDetails(_id)}>{name}</h6>
             <button onClick={() => handleAddToCard(dates)} >
                At To Cart
            </button> 
             <p className='text-center m-0'>
                    <small>4.5 </small>
                    <FontAwesomeIcon icon={faStar} style={{ color: 'gray', width: '13px' }} />
                    <FontAwesomeIcon icon={faStar} style={{ color: 'gray', width: '13px' }} />
                    <FontAwesomeIcon icon={faStar} style={{ color: 'gray', width: '13px' }} />
                    <FontAwesomeIcon icon={faStar} style={{ color: 'gray', width: '13px' }} />
                    <FontAwesomeIcon icon={faStar} style={{ color: 'gray', width: '13px' }} />
                    <small> (27)</small>
                </p>
                <p className='text-center islamic-product-dev-p'>
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
    );
};

export default Dates;