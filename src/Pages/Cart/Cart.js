import React from 'react';
import UseAttars from '../../Hooks/UseAttars/UseAttars';
import CartQuantity from '../Shared/Header/Header/CartQuantity';
import './Cart.css';
import ViewCart from '../Cart/ViewCart';
import { removeFromDb } from '../../utilities/fakedb';
import UseCart from './UseCart';
import UseCaps from '../../Hooks/UseCaps/UseCaps';

const Cart = () => {
    const [attars, setAttars] = UseAttars([]);
    const [caps, setCaps] = UseCaps([]);
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