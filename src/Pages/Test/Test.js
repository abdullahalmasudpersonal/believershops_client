import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Product from './Product';
import './Test.css';
import useProducts from './UseProducts';

const Test = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useState([]);


    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedPorduct = products.find(product => product.id === id);
            if (addedPorduct) {
                const quantity = storedCart[id];
                addedPorduct.quantity = quantity;
                savedCart.push(addedPorduct);
            }
        }
        setCart(savedCart);
    }, [products])

    const handleAddToCard = (selectedProduct) => {
        console.log(selectedProduct);
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setCart(newCart);
        addToDb(selectedProduct.id);
    }

    return (
        <div className='container my-5' >
             <div className='product-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCard={handleAddToCard}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Test;