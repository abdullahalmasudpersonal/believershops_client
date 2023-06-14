import React, { useEffect, useState } from 'react';
import UseAttarComboOffer from '../../../../../../Hooks/UseAttars/UseAttarComboOffer';
import AttarComboOffer from '../AttarComboOffer/AttarComboOffer';

const AttarComboOffers = () => {
    const [attarComboOffers, setAttarComboOffers] = UseAttarComboOffer([]);

    return (
        <div className='islamics-attars'>
            <div className='islamics-attars-dev'>
                {
                    attarComboOffers.filter(categore => categore.category === 'AttarComboOffer').map(attarComboOffer => <AttarComboOffer key={attarComboOffer._id} attarComboOffer={attarComboOffer} />)
                }
            </div>
        </div>
    );
};

export default AttarComboOffers;