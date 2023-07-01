import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import UseCaps from '../../../../../Hooks/UseCaps/UseCaps';
import { addToDb, getStoredCart } from '../../../../../utilities/fakedb';
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
             toast.success('Added To Cart');
          }
          else{
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
       <div className='islamics-attars-dev'>
           {
               caps.filter(categore => categore.category === 'cap').map(cap => <Cap key={cap._id} cap={cap}  handleAddToCard={handleAddToCard} />)
           }
       </div>
   </div>
    );
};

export default Caps;