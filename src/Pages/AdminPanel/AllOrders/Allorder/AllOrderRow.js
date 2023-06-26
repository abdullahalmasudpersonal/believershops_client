import React from 'react';
import { useNavigate } from 'react-router-dom';

const AllOrderRow = ({allOrder}) => {
    const navigate = useNavigate();

    const navigateToOrderDetail = _id => {
        navigate(`/admin/allOrder/${_id}`);
    };

    return (
        <div className='px-3 table-responsive' >
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Order_No</th>
                            <th scope="col">Coustomer</th>
                            <th scope="col">Email</th>
                            <th scope="col">Time</th>
                            <th scope="col">Porduct Name</th>
                            <th scope="col">Total</th>
                            <th scope="col">Payment</th>
                            <th scope="col">Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allOrder.map((allOrder) =>
                                <tr key={allOrder._id}>
                                    <th scope="row">{allOrder.orderNo}</th>
                                    <td>{allOrder.coustomerName}</td>
                                    <td>{allOrder.email}</td>
                                    <td>{allOrder.orderTime}&nbsp;{allOrder.orderDate}</td>
                                    <td>{allOrder.productsName}</td>
                                    <td>{allOrder.grandTotal}</td>
                                    <td className='text-end'>Cash</td>
                                    <td className='text-end'>
                                        <button type="button" class="btn btn-info" onClick={() => navigateToOrderDetail(allOrder._id)}>
                                            View
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
    );
};

export default AllOrderRow;