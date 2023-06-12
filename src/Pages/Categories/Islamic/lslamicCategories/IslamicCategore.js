import React from 'react';
import './IslamicCategore.css';
import UseAttars from '../../../../Hooks/UseAttars/UseAttars';
import Attar from '../Attars/Attar/Attar';

const IslamicCategore = () => {
    const [attars, setAttars] = UseAttars([]);


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