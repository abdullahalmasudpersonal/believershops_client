import React from 'react';
import './Cart.css';
import ViewCart from '../Cart/ViewCart';
import { removeFromDb } from '../../utilities/fakedb';
import CartQuantity from './CartQuantity';
import UseCart from './UseCart';

const Cart = () => {
    const [cart, setCart] = UseCart();

    const handleRemoveProduct = product => {
        const rest = cart.filter(pd =>pd._id !== product._id);
        setCart(rest);
        removeFromDb(product._id);
    }

    return (
        <div className='container-xxl py-5'>
            <h4>Your Cart</h4>
            <div className='review-items-container'>
                <CartQuantity cart={cart} />
                {
                    cart.map(product => <ViewCart
                        key={product._id}
                        product={product}
                        handleRemoveProduct={handleRemoveProduct}
                    ></ViewCart>)
                }
            </div>
        </div>
    );
};

export default Cart;