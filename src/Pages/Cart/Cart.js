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

            <div>
                <h6 className='text-end'>Sub Total: {subTotal}</h6>
                <h6 className='text-end'>Condition Charge: {conditionCharge}</h6>
                <h5 className='text-end'> Grand Total: {grandTotal}</h5>
            </div>

            <div className='d-flex flex-row-reverse'>
                <Link to='/checkout'>
                    <button disabled={quantity < 1 }>Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default Cart;