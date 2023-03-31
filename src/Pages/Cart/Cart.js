import React, { useState } from 'react';
import './Cart.css';
import ViewCart from '../Cart/ViewCart';
import { removeFromDb } from '../../utilities/fakedb';
import CartQuantity from './CartQuantity';
import UseCart from './UseCart';
import Loading from '../Shared/Loading/Loading';
import UseAttars from '../../Hooks/UseAttars/UseAttars';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const [attars, setAttars] = UseAttars();
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
        subTotal = subTotal + product.regular_price * product.quantity;
    }
    const conditionCharge = parseFloat((subTotal * 0.01).toFixed(2));
    const grandTotal = subTotal + conditionCharge;

    return (
        <div className='container-xxl py-5'>
            <h4>Shopping Cart</h4>

            <table class="table table-responsive-sm table-striped">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Model</th>
                        <th scope="col">Quantity</th>
                        <th scope="col" className='text-right'>Unit Price</th>
                        <th scope="col" className='text-right'>Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map(product =>

                            <tr>

                                <th scope="row">
                                    <img src={product.img} alt='' width='80px' height='70px' />
                                </th>
                                <td>{product.name}</td>
                                <td>{product.model}</td>
                                <td>
                                    <input style={{ width: '60px', height: '35px' }} type='number' pattern="{3}" maxLength="4" defaultValue={product.quantity} name="title" />
                                    <span onClick={() => handleRemoveProduct(product)} > X</span>
                                </td>
                                <td className='text-right'>{product.regular_price}</td>
                                <td className='text-right'>{product.quantity * product.regular_price}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <div>
                <h6 className='text-end'>Sub Total: {subTotal}</h6>
                <h6 className='text-end'>Condition Charge: {conditionCharge}</h6>
                <h5 className='text-end'> Grand Total: {grandTotal}</h5>
            </div>

            <div className='d-flex flex-row-reverse'>
                <Link to='/checkout'>
                    <button>Checkout</button>
                </Link>
            </div>
            {/*  <div className=''>
                <CartQuantity cart={cart} />
                {
                    cart.map(product => <ViewCart
                        key={product._id}
                        product={product}
                        handleRemoveProduct={handleRemoveProduct}
                    ></ViewCart>)
                }
            </div> */}
        </div>
    );
};

export default Cart;