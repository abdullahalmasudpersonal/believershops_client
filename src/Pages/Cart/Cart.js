import React, { useEffect, useState } from 'react';
import UseCart from '../../Hooks/UseCart/UseCart';
import { getStoredCart, removeFromDb } from '../../utilities/fakedb';
import './Cart.css';
import ViewCart from './ViewCart';

const Cart = () => {
    const [attars, setAttars] = useState([]);
    //const [cart, setCart] = UseCart(attars);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const _id in storedCart) {
            const addedAttar = attars.find(attar => attar._id === _id);

            if (addedAttar) {
                const quantity = storedCart[_id];
                addedAttar.quantity = quantity;
                savedCart.push(addedAttar);
            }
        }
        setCart(savedCart);
    }, [attars]);


  /*   const handleRemoveProduct = product => {
        const rest = cart.filter(pd => pd._id !== product._id);
        setCart(rest);
        removeFromDb(product._id);
    } */

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