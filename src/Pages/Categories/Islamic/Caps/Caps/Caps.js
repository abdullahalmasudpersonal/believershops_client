import React, { useEffect, useState } from 'react';
import UseCaps from '../../../../../Hooks/UseCaps/UseCaps';
import { addToDb, getStoredCart } from '../../../../../utilities/fakedb';
import CartQuantity from '../../../../Cart/CartQuantity';
import '../../AllIslamicsCss/AllIslamics.css';
import Cap from '../Cap/Cap';

const Caps = () => {
     const [caps, setCaps] = UseCaps([]); 
     const [cart, setCart] = useState([]);

      useEffect( () =>{
         const storedCart = getStoredCart();
         const savedCart = [];
         for(const _id in storedCart){
             const addedProduct = caps.find(product => product._id === _id);
             if(addedProduct){
                 const quantity = storedCart[_id];
                 addedProduct.quantity = quantity;
                 savedCart.push(addedProduct);
             }
         }
         setCart(savedCart);
     }, [caps]) 

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
             <CartQuantity cart={cart} />
       <div className='islamics-attars-dev'>
           {
               caps.map(cap => <Cap key={cap._id} cap={cap}  handleAddToCard={handleAddToCard} />)
           }
       </div>
   </div>
    );
};

export default Caps;