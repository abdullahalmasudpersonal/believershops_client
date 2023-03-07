import React, { useEffect, useState } from 'react';
import UseCaps from '../../../../../Hooks/UseCaps/UseCaps';
import '../../AllIslamics.css';
import Cap from '../Cap/Cap';

const Caps = () => {
     const [caps, setCaps] = UseCaps([]); 
  /*  const [caps, setCaps] = useState([]);
   useEffect( () =>{
    fetch('products.json')
    .then(res => res.json())
    .then(data => setCaps(data));
   }, []) */

    return (
        <div className='islamics-attars'>
       <div className='islamics-attars-dev'>
           {
               caps.map(cap => <Cap key={cap._id} cap={cap} /* handleAddToCard={handleAddToCard} */ />)
           }
       </div>
   </div>
    );
};

export default Caps;