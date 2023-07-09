import React from 'react';
import Jainamaz from '../Jainamaz/Jainamaz';
import UseProducts from '../../../../../Hooks/UseProducts/UseProducts';

const Jainamazs = () => {
    const [Jainamazs, setJainamazs] = UseProducts([]);

    return (
        <div className='nestedProducts'>
            {
                Jainamazs.filter(categore => categore.category === 'Jainamaz').slice(0).reverse().map(jainamaz => <Jainamaz key={jainamaz._id} jainamaz={jainamaz} />)
            }
        </div>
    );
};

export default Jainamazs;