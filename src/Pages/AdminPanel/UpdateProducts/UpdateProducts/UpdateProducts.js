import React, { useEffect, useState } from 'react';
import UseProducts from '../../../../Hooks/UseProducts/UseProducts';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../../../Shared/PageTitle/PageTitle';
import './UpdateProducts.css';

const UpdateProducts = () => {
   /*  const [products, setProducts] = UseProducts([]); */
    const [searchUProduct, setSearchUProduct] = useState('');
    const navigate = useNavigate();
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [products, setProducts] = useState([]);

    useEffect( () =>{
        fetch(`http://localhost:5000/products?page=${page}&pageSize${pageSize}`)
        .then(res => res.json())
        .then(data => setProducts(data));
    },[]);

    useEffect(() => {
        fetch(`http://localhost:5000/productCount`)
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 10);
                setPageCount(pages);
            })
    })

    const navigateToUpdateProduct = _id => {
        navigate(`/admin/update_product/${_id}`);
    };
    const navigateToProductDetali = _id => {
        navigate(`/categore/products/${_id}`)
    }

    /* start search product */
    const search = (event) => {
        setSearchUProduct(event.target.value);
    };
    let productSearch = products.filter(order => {
        return Object.keys(order).some(key =>
            order[key].toString().toLowerCase().includes(searchUProduct.toString().toLowerCase()));
    });
    /* end search product */

    return (
        <div className='dashboard-dev2' style={{ background: 'white' }}>
            <PageTitle pageTitle={'Update Product |'} />
            <div className='pt-4 px-4 d-flex justify-content-between'>
                <h4 className='fw-bold'>Update Products ({products.length})</h4>
                <input className='allorder-search-ber' placeholder='Search Order' value={searchUProduct}
                    onChange={search.bind(this)} />
            </div>
            <hr className='mb-0' />
            <div class="table-responsive p-3" >

                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                        {
                            [...Array(pageCount).keys()]
                                .map(number =>
                                    <li class="page-item"><a className={page === number ? 'page-link  selectPageBtn' : 'page-link '} href="#" onClick={() => setPage(number)} >{number + 1}</a></li>
                                )}
                        <li class="page-item"><a class="page-link" href="#">Next</a></li>
                        <select onChange={e=> setPageSize(e.target.value)}>
                            <option value="10">10</option>
                            <option selected value="20">20</option>
                            <option value="25">25</option>
                            <option value="30">30</option>
                        </select>
                    </ul>
                </nav>

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col" className='ps-0'>Sl</th>
                            <th scope="col">Product_Name</th>
                            <th scope="col" className='text-center'>Image</th>
                            <th scope="col" className='text-center'>Category</th>
                            <th scope="col" className='text-center'>Quantity</th>
                            <th scope="col" className='text-end pe-0'>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            productSearch.map((product, index) =>
                                <tr>
                                    <th scope="row" className='ps-0'>{index + 1}</th>
                                    <td><span style={{ cursor: 'pointer' }} onClick={() => navigateToProductDetali(product._id)}>{product.name}</span></td>
                                    <td className='text-center'><img src={product.image1} width='37px' height='37px' /></td>
                                    <td className='text-center'>{product.category}</td>
                                    <td className='text-center'>{product.availableQuantity}</td>
                                    <td className='text-end pe-0'><button className='btn btn-warning' onClick={() => navigateToUpdateProduct(product._id)}>Update</button></td>
                                </tr>)
                        }
                    </tbody>
                </table>
                <>
                    {
                        [...Array(pageCount).keys()]
                            .map(number => <button className='px-2'>{number + 1}</button>)
                    }
                </>
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                        {
                            [...Array(pageCount).keys()]
                                .map(number =>
                                    <li class=""><a class="page-link" href="#" onClick={() => setPage(number)} >{number + 1}</a></li>
                                )}
                        <li class="page-item"><a class="page-link" href="#">Next</a></li>
                    </ul>
                </nav>

                {/*    {
                    [...Array(pageCount).keys()]
                        .map(number =>
                            <nav aria-label="Page navigation example">
                                <ul class="pagination">
                                    <li class="page-item"><a class="page-link" href="#">{number}</a></li>
                                </ul>
                            </nav>
                        )
                }

                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">Next</a></li>
                    </ul>
                </nav> */}

            </div>
        </div>
    );
};

export default UpdateProducts;