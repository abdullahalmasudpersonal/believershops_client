import { faStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UseCart from '../../../../Cart/UseCart';
import { removeFromDb } from '../../../../../utilities/fakedb';
import '../../AllIslamicsCss/AllIslamic.css';
import './Attar.css';


const Attar = ({ handleAddToCard, attar }) => {
    const [cart, setCart] = UseCart();
    const { _id, brand, name, image1, regularPrice, offerPrice } = attar;
    const navigate = useNavigate();

    const handleRemoveProduct = product => {
        const rest = cart.filter(pd => pd._id !== product._id);
        setCart(rest);
        removeFromDb(product._id);
    }

    const navigateToProductDetails = _id => {
        navigate(`/categore/products/${_id}`);
    }


    return (

        <div className='islamic-product-dev cart1'>
           <div className='p-3 pb-2'> <img src={image1} alt='' className='img-fluid' /></div>
            <h6 className='text-center islamic-product-dev-h6 mb-1' onClick={() => navigateToProductDetails(_id)}>{name}</h6>
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

                            <span style={{ fontSize: '13px', fontFamily: "Optima", fontWeight: 'bold', color: 'gray', textDecoration: 'line-through 1px' }}>৳ {regularPrice}.00</span>
                        </p>
                        :
                        <span><span style={{ fontSize: '15px', fontFamily: "Optima", fontWeight: 'bold' }}>৳</span>{regularPrice}.00</span>
                }
            </p>
        </div>
    );
};

export default Attar;

