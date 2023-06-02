import React from 'react';
import './Cart.css';
import { removeFromDb } from '../../utilities/fakedb';
import UseCart from './UseCart';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
const Cart = () => {
    const [cart, setCart] = UseCart();


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

    return (
        <div className='container-xxl py-5'>
            <h4>Shopping Cart</h4>

            <div className='table-responsive-sm'>
                <table className="table  table-striped">
                    <thead>
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
                    <tbody>
                        {
                            cart.map(product =>

                                <tr key={product._id}>

                                    <th scope="row" className='mobile-cart'>
                                        <img src={product.image1} alt='' width='80px' height='70px' />
                                    </th>
                                    <td>{product.name}</td>
                                    <td className='mobile-cart'>{product.model}</td>
                                    <td className='text-center'>
                                        <><FontAwesomeIcon icon={faMinus} /></>
                                        <input style={{ width: '60px', height: '35px' }} type='number' pattern="{3}" maxLength="4" defaultValue={product.quantity} name="productQuantity" />
                                        <><FontAwesomeIcon icon={faPlus} /></>
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
                <h6 className='justify-content-end h5 d-flex'> Sub Total: <article className='text-end' style={{ width: '150px', color: 'rgb(13, 0, 44)' }}>{subTotal}৳</article></h6>
                <h6 className='justify-content-end h5 d-flex'> Condition Charge: <article className='text-end' style={{ width: '150px', color: 'rgb(13, 0, 44)' }}>{conditionCharge}৳</article></h6>
                <h6 className='justify-content-end h5 d-flex'>  Grand Total: <article className='text-end' style={{ width: '150px', color: 'rgb(13, 0, 44)' }}>{grandTotal}৳</article></h6>
            </div>

            <div className='d-flex flex-row-reverse mt-4'>
                <Link to='/checkout'>
                    <button className={disabled ? 'checkout-btn-disabled' : 'checkout-btn'} disabled={quantity < 1}>Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default Cart;