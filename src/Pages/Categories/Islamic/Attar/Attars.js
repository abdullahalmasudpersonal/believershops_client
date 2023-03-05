import React, { useEffect, useState } from 'react';
import useAttar from '../../../../Hooks/UseAttars/UseAttars';
import { addToDb, getStoredCart } from '../../../../utilities/fakedb';
import Attar from './Attar';
import './Attars.css';

const Attars = () => {
    const [attars, setAttars] = useAttar([]);
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

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    } 
    return (
        <div className='attars'>
             <p>{quantity}</p> 
             <p>{cart.length}</p> 
            <div className='attars-dev'>
                {
                    attars.map(attar => <Attar key={attar._id} attar={attar} handleAddToCard={handleAddToCard} />)
                }
            </div>
        </div>
    );
};

export default Attars;