import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../../../utilities/fakedb';
import Attar from './Attar';
import '../AllIslamicsCss/AllIslamics.css';
import UseAttars from '../../../../Hooks/UseAttars/UseAttars';
import UseCart from '../../../Cart/UseCart';
import { toast } from 'react-toastify';

const Attars = () => {
    const [attars, setAttars] = UseAttars([]);
     const [cart, setCart] = UseCart();

 /*      useEffect( () =>{
         const storedCart = getStoredCart();
         const savedCart = [];
         for(const _id in storedCart){
             const addedProduct = attars.find(product => product._id === _id);
             if(addedProduct){
                 const quantity = storedCart[_id];
                 addedProduct.quantity = quantity;
                 savedCart.push(addedProduct);
             }
         }
         setCart(savedCart);
     }, [attars])   */

    const handleAddToCard = (selectedAttar) => {
        let newCart = [];
        const exists = cart.find(attar => attar._id === selectedAttar._id);
        if (!exists) {
            selectedAttar.quantity = 1;
            newCart = [...cart, selectedAttar];
            toast.success('Added To Cart');
        }
        else {
            const rest = cart.filter(attar => attar._id !== selectedAttar._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
            toast.success('Added To Cart');
        }

        setCart(newCart);
        addToDb(selectedAttar._id);
    }

    return (
        <div className='islamics-attars'>
            {/*  <div className='cartlength'>
                <CartQuantity cart={cart} />
            </div>   */}
            <>{cart.length}</>
            <div className='islamics-attars-dev'>
                {
                    attars.map(attar => <Attar key={attar._id} attar={attar} handleAddToCard={handleAddToCard} />)
                }
            </div>
        </div>
    );
};

export default Attars;