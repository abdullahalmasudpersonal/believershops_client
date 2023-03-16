import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../../../utilities/fakedb';
import Attar from './Attar';
import '../AllIslamicsCss/AllIslamics.css';
import UseCart from '../../../Cart/UseCart';
import CartQuantity from '../../../Shared/Header/Header/CartQuantity';
import { useCart } from 'react-use-cart';
import UseAttars from '../../../../Hooks/UseAttars/UseAttars';

const Attars = () => {
    const [attars, setAttars] = UseAttars([]);
    const [cart, setCart] = useState([]);

      useEffect( () =>{
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
     }, [attars]) 

    const handleAddToCard = (selectedAttar) => {
        console.log(selectedAttar);
        let newCart = [];
        const exists = cart.find(attar => attar._id === selectedAttar._id);
        if (!exists) {
            selectedAttar.quantity = 1;
            newCart = [...cart, selectedAttar];
        }
        else {
            const rest = cart.filter(attar => attar._id !== selectedAttar._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setCart(newCart);
        addToDb(selectedAttar._id);
    }

    return (
        <div className='islamics-attars'>
            <div className='cartlength'>
                <CartQuantity cart={cart} />
            </div>
            <div className='islamics-attars-dev'>
                {
                    attars.map(attar => <Attar key={attar._id} attar={attar} handleAddToCard={handleAddToCard} />)
                }
            </div>
        </div>
    );
};

export default Attars;