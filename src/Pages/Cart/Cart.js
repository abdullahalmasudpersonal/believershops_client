import React, { useState } from 'react';
import UseAttars from '../../Hooks/UseAttars/UseAttars';
import { getStoredCart, removeFromDb } from '../../utilities/fakedb';
import './Cart.css';
import UseCart from './UseCart';
import ViewCart from './ViewCart';

const Cart = () => {
    const [attars, setAttars] = UseAttars([]);
    const [cart, setCart] = UseCart(attars);


    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }


    return (
        <div className='container-xxl py-5'>
            <h4>Your Cart</h4>
            <div className='review-items-container'>
                <p>{quantity}</p>
                <p>{cart.length}</p>

               {/*  {
                    cart.map(product => <ViewCart
                        key={product.id}
                        product={product}
                        handleRemoveProduct={handleRemoveProduct}
                    ></ViewCart>)
                } */}
            </div>
        </div>
    );
};

export default Cart;