import React from 'react';
import UseDatess from '../../../../../Hooks/UseDatess/UseDetess';
import '../../AllIslamicsCss/AllIslamics.css';
import Dates from '../Dates/Dates';

const Datess = () => {
    const [datess, setDatess] = UseDatess([]);

    return (
        <div className='islamics-attars'>
       <div className='islamics-attars-dev'>
           {
               datess.map(dates => <Dates key={dates._id} dates={dates} /* handleAddToCard={handleAddToCard} */ />)
           }
       </div>
   </div>
    );
};

export default Datess;