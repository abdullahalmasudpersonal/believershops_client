import React from 'react';
import UseAttars from '../../../../Hooks/UseAttars/UseAttars';
import Attar from '../../../Categories/Islamic/Attars/Attar/Attar';
import '../../Home/HomeProducts.css';

const HomeFeaturedProducts = () => {
    const [attars, setAttars] = UseAttars([]);

    return (
        <div className=''>
            <h5 className="homefeaturedCategore-title">FEATURED PRODUCTS</h5>
            <hr style={{ marginTop: '10px' }}></hr>
            <div className='homeProducts'>
                {
                    attars/* .filter(categore => categore.category === 'attar') */.slice(0, 24).map(attar => <Attar key={attar._id} attar={attar} />)
                }
            </div>
        </div>
    );
};

export default HomeFeaturedProducts;