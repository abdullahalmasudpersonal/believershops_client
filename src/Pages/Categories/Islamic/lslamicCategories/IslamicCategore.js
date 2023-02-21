import React from 'react';
import useAttar from '../../../../Hooks/UseAttars/UseAttars';
import Attar from '../Attar/Attar';
import './IslamicCategore.css';

const IslamicCategore = () => {
    const [attars, setAttars] = useAttar([]);


    return (
        <div>
            <div>
                <h4>Islamic Items</h4>
                 {
                    attars.map(attar => <Attar key={attar._id} attar={attar}></Attar>)
                } 
            </div>
        </div>
    );
};

export default IslamicCategore;