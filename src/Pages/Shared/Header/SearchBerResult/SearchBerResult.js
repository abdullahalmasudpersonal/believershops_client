import { faBorderNone, faHome, faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import PageTitle from '../../PageTitle/PageTitle';
import { Link } from 'react-router-dom';
import UseProducts from '../../../../Hooks/UseProducts/UseProducts';
import NestedProduct from '../../../Categories/Categore/NestedPorduct/NestedProduct';
import { ProductContext } from '../../../../App';

const SearchBerResult = () => {
    const [nestedProducts, setNestedProducts] = UseProducts([]);
    const [products, cart, handleAddToCard, handleRemoveProduct,searchValuse,setSearchValue] = useContext(ProductContext);

    

    let userSearch = products.slice(0).reverse().filter(order => {
        return Object.keys(order).some(key =>
            order[key].toString().toLowerCase().includes(searchValuse.toString().toLowerCase()));
    });
    

        const nestedProductsLength =userSearch.length;
   

    return (
        <div className='nestedProductsMain'>
             <PageTitle pageTitle={`${searchValuse} |`} />
            <div className='nestedProductsBreadcrumb'>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0 ">
                        <li class="breadcrumb-item"><Link to="/"><FontAwesomeIcon icon={faHome} className='breadcrumb-home-btn' /></Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Search Results</li>
                    </ol>
                </nav>
            </div>
            <div className='nestedProductsNamePart'>
                <div>
                    <h5 className='m-0 fw-bold'>Search Result ...</h5>
                </div>
                <div>
                    <p className='m-0'><span>Show:</span>&nbsp;
                        <select className=''>
                            <option value="">20</option>
                            <option value="">30</option>
                            <option value="">40</option>
                        </select>
                    </p>
                </div>
            </div>
            <div className='nestedProductsSortByViewPart'>
                <div>
                    <p className='m-0'>{
                        searchValuse ? <>{nestedProductsLength}</>:<>0</>
                    } Products Found In "{searchValuse}"</p>
                </div>
                <div className='nestedProductsSortByViewDev'>
                    <p className='m-0'><span>Sort By:</span>&nbsp;
                        <select>
                            <option value="">Default</option>
                            <option value="">A TO Z</option>
                            <option value="">Z TO A</option>
                            <option value="">Best Selling</option>
                            <option value="">Price Low to high</option>
                            <option value="">Price high to low</option>
                        </select>
                    </p> &nbsp;&nbsp;&nbsp;
                    <p className='m-0 d-flex justify-content-center align-items-center'><span>View As:</span> &nbsp;&nbsp;
                    <FontAwesomeIcon color='rgb(42, 42, 42))' fontSize='20px' style={{padding:'5px'}} icon={faBorderNone} /> &nbsp;
                        <FontAwesomeIcon fontSize='20px' style={{padding:'5px'}} icon={faList} />
                    </p> 
                </div>
            </div>
            <div className='nestedProducts'>
                { searchValuse ?
                    userSearch.map(nestedProduct => <NestedProduct key={nestedProduct._id} nestedProduct={nestedProduct}></NestedProduct>)
                    : <p className=''>No Porducts Found</p>
                }
            </div>
        </div>
    );
};

export default SearchBerResult;