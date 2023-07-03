import React from 'react';
import Attar from './Attar';
import '../../AllIslamicsCss/AllIslamic.css';
import { toast } from 'react-toastify';
import UseAttars from '../../../../../Hooks/UseAttars/UseAttars';
import { addToDb } from '../../../../../utilities/fakedb';
import UseCart from '../../../../../Hooks/UseCarts/UseCart';

const Attars = () => {
    const [attars, setAttars] = UseAttars([]);
    const [cart, setCart] = UseCart();

    return (
        <div className='islamics-attars'>
            <div className='islamics-attars-dev'>
                {
                    attars.filter(categore => categore.category === 'attar').map(attar => <Attar key={attar._id} attar={attar} />)
                }
            </div>
        </div>
    );
};

export default Attars;