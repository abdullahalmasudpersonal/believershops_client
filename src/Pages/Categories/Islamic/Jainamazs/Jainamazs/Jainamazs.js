import React from 'react';
import UseJainamazs from '../../../../../Hooks/UseJainamazs/UseJainamazs';
import '../../AllIslamicsCss/AllIslamics.css';
import Jainamaz from '../Jainamaz/Jainamaz';

const Jainamazs = () => {
    const [jainamazs, setJainamazs] = UseJainamazs([]);

    return (
        <div className='islamics-attars'>
       <div className='islamics-attars-dev'>
           {
               jainamazs.map(jainamaz => <Jainamaz key={jainamaz._id} jainamaz={jainamaz} /* handleAddToCard={handleAddToCard} */ />)
           }
       </div>
   </div>
    );
};

export default Jainamazs;