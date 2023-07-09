import React from 'react';
import UseProducts from '../../../../../Hooks/UseProducts/UseProducts';
import Tupi from '../Tupi/Tupi';

const Tupis = () => {
    const [tupis, setTupis] = UseProducts([]);

    return (
        <div className='nestedProducts'>
        {
            tupis.filter(categore => categore.category === 'Tupi').slice(0).reverse().map(tupi => <Tupi key={tupi._id} tupi={tupi} />)
        }
    </div>
    );
};

export default Tupis;