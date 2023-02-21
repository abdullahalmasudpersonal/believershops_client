import React from 'react';
import useAttar from '../../../../Hooks/UseAttars/UseAttars';
import Attar from './Attar';
import './Attars.css';

const Attars = () => {
    const [attars, setAttars] = useAttar([]);

    return (
        <div className='attars'>
            <div className='attars-dev'>
                {
                    attars.map(attar => <Attar key={attar._id} attar={attar} />)
                }
            </div>
        </div>
    );
};

export default Attars;