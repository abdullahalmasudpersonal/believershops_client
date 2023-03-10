import React, { useEffect, useState } from 'react';
import useAttar from '../../../../Hooks/UseAttars/UseAttars';
import { addToDb, getStoredCart } from '../../../../utilities/fakedb';
import Attar from './Attar';
import '../AllIslamicsCss/AllIslamics.css';
import UseCart from '../../../Cart/UseCart';
import CartQuantity from '../../../Shared/Header/Header/CartQuantity';

const Attars = () => {
    const [attars, setAttars] = useAttar([]);
    const [cart, setCart] = UseCart(attars);

    const handleAddToCard = (selectedAttar) => {
         console.log(selectedAttar);
         let newCart = [];
         const exists = cart.find(attar => attar._id === selectedAttar._id);
         if(!exists){
            selectedAttar.quantity = 1;
            newCart = [...cart, selectedAttar];
         }
         else{
            const rest = cart.filter(attar => attar._id !== selectedAttar._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
         }

        setCart(newCart);
        addToDb(selectedAttar._id);
    }
    
    return (
        <div className='islamics-attars'>
            <CartQuantity cart={cart}/>
            <div className='islamics-attars-dev'>
                {
                    attars.map(attar => <Attar key={attar._id} attar={attar} handleAddToCard={handleAddToCard} />)
                }
            </div>
        </div>
    );
};

export default Attars;