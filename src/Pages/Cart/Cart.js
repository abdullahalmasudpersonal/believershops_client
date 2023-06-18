import React, { useState } from 'react';
import './Cart.css';
import { removeFromDb } from '../../utilities/fakedb';
import UseCart from './UseCart';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
const Cart = () => {
    const [cart, setCart] = UseCart();
    const [count, setCount] = useState(1);
    const navigate = useNavigate();

    const handleRemoveProduct = product => {
        const rest = cart.filter(pd => pd._id !== product._id);
        setCart(rest);
        removeFromDb(product._id);
    }

    let quantity = 0;
    let subTotal = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        subTotal = subTotal + product.regularPrice * product.quantity;
    }
    const conditionCharge = parseFloat((subTotal * 0.01).toFixed(2));
    const grandTotal = subTotal + conditionCharge;

    const disabled = quantity < 1;

    function increment() {
        //setCount(prevCount => prevCount+=1);
        setCount(function (prevCount) {
            if (prevCount < 10) {
                return (prevCount += 1);
            }
            else {
                return (prevCount = 10);
            }
        });
    }
    function decrement() {
        setCount(function (prevCount) {
            if (prevCount > 1) {
                return (prevCount -= 1);
            } else {
                return (prevCount = 1);
            }
        });
    };

    /* const navigateToProduct = _id =>{
        navigate(`/${_id}`)
    } */

    return (
        <div className='home-bg py-4'>
            <div className='container-xxl cart-bg p-3'>
                <h4 className='mb-4'>Shopping Cart</h4>
                <div className='table-responsive-sm'>
                    <table className="table  table-hover">
                        <thead className='cart-table-head'>
                            <tr>
                                <th scope="col" className='mobile-cart'>Image</th>
                                <th scope="col">Product Name</th>
                                <th scope="col" className='mobile-cart'>Model</th>
                                <th scope="col" className='text-center'>Quantity</th>
                                <th scope="col" className='text-center'>Remove</th>
                                <th scope="col" className='text-end mobile-cart'>Unit</th>
                                <th scope="col" className='text-end'>Total</th>
                            </tr>
                        </thead>
                        <tbody className='cart-table-body'>
                            {
                                cart.map(product =>

                                    <tr key={product._id}>

                                        <th scope="row" className='mobile-cart'>
                                            <img src={product.image1} alt='' width='50px' height='50px' />
                                        </th>
                                        <td>{product.name}</td>
                                        <td className='mobile-cart'>{product.model}</td>

                                        <td className=''>
                                            <div className='d-flex justify-content-center'>
                                                <div className='attar-detail-quantity-counter'>
                                                    <div className='attar-detail-quantity-counter-p'>
                                                        <p style={{ color: 'gray' }} className='m-0 fw-bold'>
                                                            <input />
                                                        </p>
                                                    </div>
                                                    <div className='d-grid attar-detail-quantity-counter-dev'>
                                                        <button onClick={increment} className='p-0'>
                                                            <i style={{ color: 'gray' }} className="fa fa-angle-up px-2 "></i>
                                                        </button>
                                                        <button onClick={decrement} classnamep='p-0'>
                                                            <i style={{ color: 'gray' }} className="fa fa-angle-down px-2"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>

                                        <td className='text-center'>
                                            <button style={{ border: 'none', background: 'none' }} onClick={() => handleRemoveProduct(product)}> <FontAwesomeIcon className='cart-product-remove' icon={faTrashAlt} /></button>
                                        </td>
                                        <td className='text-end mobile-cart'>{product.regularPrice}</td>
                                        <td className='text-end'>{product.quantity * product.regularPrice}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

                <div className=''>
                    <h6 className='justify-content-end h5 d-flex'> Sub Total: <article className='text-end' style={{ width: '150px', color: 'rgb(13, 0, 44)' }}>{subTotal}<span style={{fontFamily:"Sans-Serif", fontWeight:'bold',fontSize:'17px'}}>৳</span></article></h6>
                    <h6 className='justify-content-end h5 d-flex'> Condition Charge: <article className='text-end' style={{ width: '150px', color: 'rgb(13, 0, 44)' }}>{conditionCharge}<span style={{fontFamily:"Sans-Serif", fontWeight:'bold',fontSize:'17px'}}>৳</span></article></h6>
                    <h6 className='justify-content-end h5 d-flex'>  Grand Total: <article className='text-end' style={{ width: '150px', color: 'rgb(13, 0, 44)' }}>{grandTotal}<span style={{fontFamily:"Sans-Serif", fontWeight:'bold',fontSize:'17px'}}>৳</span></article></h6>
                </div>

                <div className='d-flex flex-row-reverse mt-4'>
                    <Link to='/checkout'>
                        <button className={disabled ? 'checkout-btn-disabled' : 'checkout-btn'} disabled={quantity < 1}>Checkout</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;