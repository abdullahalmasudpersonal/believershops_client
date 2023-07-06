import React from 'react';
import '../../AllIslamicsCss/AllIslamics.css';
import Tazbeeh from '../Tazbeeh/Tazbeeh';
import UseProducts from '../../../../../Hooks/UseProducts/UseProducts';
import '../../../Categore/NestedPorductsCSS/NestedProducts.css';

const Tazbeehs = () => {
    const [tazbeehs, setTazbeehs] = UseProducts([]);

    return (
        <div className='nestedProducts'>
            {
                tazbeehs.slice(0).reverse().map(tazbeeh => <Tazbeeh key={tazbeeh._id} tazbeeh={tazbeeh} />)
            }
        </div>
    );
};

export default Tazbeehs;