import React from 'react';
import UseProducts from '../../../../Hooks/UseProducts/UseProducts';

const UpdateProducts = () => {
    const [products, setProducts] = UseProducts([]);

    return (
        <div className='dashboard-dev2' style={{ background: 'white' }}>
            <div className='pt-4 ps-4'>
                <h4 className='fw-bold'>Update Products ({products.length})</h4>
            </div>
            <hr className='mb-0' />
            <div class="table-responsive p-3" >
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
                            products.map((product,index) =>
                                <tr>
                                    <th scope="row" className='ps-0'>{index + 1}</th>
                                    <td>{product.name}</td>
                                    <td className='text-center'><img src={product.img} width='37px' height='37px' /></td>
                                    <td className='text-center'>{product.category}</td>
                                    <td className='text-center'>{product.availableQuantity}</td>
                                    <td className='text-end pe-0'><button className='btn btn-warning'>Update</button></td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UpdateProducts;