import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import UseProducts from '../../../../Hooks/UseProducts/UseProducts';

const PcSearchber = () => {
    const [products, setProducts] = UseProducts([]);
    const [searchValuse, setSearchValue] = useState('');
    const onChange = (event) => {
        setSearchValue(event.target.value);
    };

    const onSearch = (searchTerm) => {
        setSearchValue(searchTerm);
        console.log('search', searchTerm)
    };

    return (
        <div className='search d-flex'>
            <input className='search-ber' placeholder='Looking your products' type='text' value={searchValuse} onChange={onChange} />

            <FontAwesomeIcon onClick={() => onSearch(searchValuse)} className='header2-part-2-search-icon-pc' icon={faSearch} />
            <div className='bg-success'>
                {
                    products.filter(item => {
                        const searchTerm = searchValuse.toLowerCase();
                        const name = item.name.toLowerCase();

                        return searchTerm && name.startsWith(searchTerm) && name !== searchTerm;
                    }).slice(0, 10)
                        .map((item) =>
                            <p onClick={() => onSearch(item.name)}>
                                {item.name}
                            </p>
                        )
                }
            </div>
        </div>
    );
};

export default PcSearchber;