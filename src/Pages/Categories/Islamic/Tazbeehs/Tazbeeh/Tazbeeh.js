import { faStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../AllIslamicsCss/AllIslamic.css';
import '../../../Categore/NestedPorductsCSS/NestedProduct.css';
import { ProductContext } from '../../../../../App';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Tazbeeh = ({ tazbeeh }) => {
    const { _id, brand, name, image1, availability, ragularPrice, offerPrice, weight1 } = tazbeeh;
    const navigate = useNavigate();
    const [products, cart, handleAddToCard] = useContext(ProductContext);

    const navigateToProductDetails = _id => {
        navigate(`/categore/products/${_id}`);
    }

    return (
        <div className='nestedProduct'>
            <div className='nestedProductImg'>
                <img src={image1} alt='' className='img-fluid' style={{ borderRadius: '2px 2px 0 0' }} />
            </div>
            <div className='px-2 pt-2'>
                <h6 className='nestedProductName text-center pb-1 m-0 p-0' onClick={() => navigateToProductDetails(_id)} data-toggle="tooltip" data-placement="right" title={name}>{name.length > 55 ? name.slice(0, 55) + '...' : name}</h6>
            </div>
            <div className='nestedProductReview'>
                <p className='text-center m-0'>
                    <small>4.5 </small>
                    <FontAwesomeIcon icon={faStar} style={{ color: 'rgb(255, 119, 0)', width: '13px' }} />
                    <FontAwesomeIcon icon={faStar} style={{ color: 'rgb(255, 119, 0)', width: '13px' }} />
                    <FontAwesomeIcon icon={faStar} style={{ color: 'rgb(255, 119, 0)', width: '13px' }} />
                    <FontAwesomeIcon icon={faStar} style={{ color: 'rgb(255, 119, 0)', width: '13px' }} />
                    <FontAwesomeIcon icon={faStar} style={{ color: 'rgb(255, 119, 0)', width: '13px' }} />
                    <small> (27)</small>
                </p>
            </div>
            <div className='nestedProductPrice'>
                <p className='text-center'>
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
            <div className='nestedProductAddCart'>
                <button onClick={() => handleAddToCard(tazbeeh)}>
                    <FontAwesomeIcon icon={faShoppingCart} />&nbsp;
                    Add to Cart</button>
            </div>
        </div>
    );
};

export default Tazbeeh;