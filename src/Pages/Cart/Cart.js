import React from 'react';
import UseProducts from '../../Hooks/UseProducts';
import { removeFromDb } from '../../utilities/fakedb';
import './Cart.css';
import UseCart from './UseCart';
import ViewCart from './ViewCart';

const Cart = () => {
    const [products, setProducts] = UseProducts();
    const [cart, setCart] = UseCart(products);

    const handleRemoveProduct = product => {
        const rest = cart.filter(pd =>pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id);
    }


    return (
        <div className='container-xxl py-5'>
            <h4>Your Cart</h4>
            <div className='review-items-container'>
                {
                    cart.map(product => <ViewCart
                        key={product.id}
                        product={product}
                        handleRemoveProduct={handleRemoveProduct}
                    ></ViewCart>)
                }
            </div>
        </div>
    );
};

export default Cart;