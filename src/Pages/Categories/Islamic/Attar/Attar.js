import { faStar } from '@fortawesome/free-regular-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { removeFromDb } from '../../../../utilities/fakedb';
import UseCart from '../../../Cart/UseCart';
import '../AllIslamicsCss/AllIslamic.css';

const Attar = ({ handleAddToCard, attar }) => {
    const [cart, setCart] = UseCart();
    const { _id, brand, name, image, regularPrice, offerPrice } = attar;
    const navigate = useNavigate();

    const handleRemoveProduct = product => {
        const rest = cart.filter(pd => pd._id !== product._id);
        setCart(rest);
        removeFromDb(product._id);
    }

    const navigateToProductDetails = _id => {
        navigate(`/categore/islamic/attar/${_id}`);
    }


    return (

        <div className='islamic-product-dev cart1'>
            <img src={image} alt='' className='img-fluid mb-1' />
            <h6 className='text-center islamic-product-dev-h6 mb-1 mt-2' onClick={() => navigateToProductDetails(_id)}>{name}</h6>

            {/*  <a href='' >  <button onClick={() => handleAddToCard(attar)} >
                At To Cart
            </button> </a>  */}

            {/*  <button onClick={()=>addItem(attar)}>
                At To Cart
            </button>   */}
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
            <div className='d-flex justify-content-center'>
                {
                     cart.some((p) => p._id === attar._id) ?
                        /*  <button onClick={() => handleRemoveProduct(_id)} className='delete-btn'>dfs
                             <FontAwesomeIcon className='delete-icon' icon={_id}></FontAwesomeIcon>
                         </button> */

                       <div className='islamic-product-add-to-cart'>  <button  onClick={() => handleRemoveProduct(_id)} >
                            Revove
                        </button> </div> 
                        :
                         <div className='islamic-product-add-to-cart'>  <button onClick={() => handleAddToCard(attar)} >
                            Add to Cart
                        </button> </div> 
                }
            </div>
        </div>
    );
};

export default Attar;

