import React from 'react';
import { Link } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from './ReviewItem';
import UseCart from './UseCart';
import useProducts from './UseProducts';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = UseCart(products);

    const handleRemoveProduct = product => {
        const rest = cart.filter(pd =>pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id);
    }


    return (
        <div className='shop-container container'>
            <div className='review-items-container'>
                dsgta
                {
                    cart.map(product =><ReviewItem
                    key={product.id}
                    product={product}
                    handleRemoveProduct = {handleRemoveProduct}
                    ></ReviewItem>)
                }
            </div>
           {/*  <div className='cart-container'>
                <Cart cart={cart}>
                    <Link to='/inventory'> 
                    <button>Proceed Checkouthb</button>
                    </Link>
                </Cart>
            </div> */}

        </div>
    );
};

export default Orders;