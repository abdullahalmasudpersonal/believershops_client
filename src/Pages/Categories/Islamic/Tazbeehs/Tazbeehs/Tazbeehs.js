import React from 'react';
import UseTazbeehs from '../../../../../Hooks/UseTazbeehs/UseTazbeehs';
import '../../AllIslamicsCss/AllIslamics.css';
import Tazbeeh from '../Tazbeeh/Tazbeeh';

const Tazbeehs = () => {
    const [tazbeehs, setTazbeehs] = UseTazbeehs([]);

    return (
        <div className='islamics-attars'>
       <div className='islamics-attars-dev'>
           {
               tazbeehs.map(tazbeeh => <Tazbeeh key={tazbeeh._id} tazbeeh={tazbeeh} /* handleAddToCard={handleAddToCard} */ />)
           }
       </div>
   </div>
    );
};

export default Tazbeehs;