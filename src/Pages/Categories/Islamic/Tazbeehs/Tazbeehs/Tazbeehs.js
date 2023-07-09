import React from 'react';
import '../../AllIslamicsCss/AllIslamics.css';
import Tazbeeh from '../Tazbeeh/Tazbeeh';
import UseProducts from '../../../../../Hooks/UseProducts/UseProducts';
import '../../../Categore/NestedPorductsCSS/NestedProducts.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Tazbeehs = () => {
    const [tazbeehs, setTazbeehs] = UseProducts([]);

    return (
        <div className='nestedProductsMain'>
            <div className='nestedProductsBreadcrumb mb-3 ps-2'>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0 ">
                        <li class="breadcrumb-item"><Link to="/"><FontAwesomeIcon icon={faHome} className='breadcrumb-home-btn' /></Link></li>
                        <li class="breadcrumb-item active">Islamic</li>
                    </ol>
                </nav>
            </div>
            <div className='nestedProducts'>
                {
                    tazbeehs.filter(categore => categore.category === 'Tasbeeh').slice(0).reverse().map(tazbeeh => <Tazbeeh key={tazbeeh._id} tazbeeh={tazbeeh} />)
                }
            </div>
        </div>
    );
};

export default Tazbeehs;