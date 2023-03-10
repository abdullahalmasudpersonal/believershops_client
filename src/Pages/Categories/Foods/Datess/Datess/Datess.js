import React from 'react';
import UseDatess from '../../../../../Hooks/UseDatess/UseDetess';
import '../../AllFoodsCss/AllFoods.css';
import Dates from '../Dates/Dates';

const Datess = () => {
    const [attars, setAttars] = UseDatess([]);
 
    
    return (
        <div className='islamics-attars'>
            <div className='islamics-attars-dev'>
                {
                    attars.map(dates => <Dates key={dates._id} dates={dates} />)
                }
            </div>
        </div>
    );
};

export default Datess;