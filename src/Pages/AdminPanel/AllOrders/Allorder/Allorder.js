import React, { useEffect, useState } from 'react';
import auth from '../../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Allorder.css'
import { useNavigate } from 'react-router-dom';

const Allorder = () => {
    const [user] = useAuthState(auth);
    const [allOrders, setAllOrders] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`http://localhost:5000/allOrder`)
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, []);

    const productsName = (allOrders.map(allorder => allorder.productsName))
    console.log('productsName', productsName)

    // console.log(map)

    var array = [["A1", "B1", "C1"],
    ["A2", "B2", "C2"],
    ["A3", "B3", "C3"],
    ["A4", "B4", "C4"],
    ["A5", "B5", "C5"],
    ["A1", "B1", "C1"],
    ["A2", "B2", "C2"],
    ["A3", "B3", "C3"],
    ["A4", "B4", "C4"],
    ["A5", "B5", "C5"]];
    //  table = document.getElementById("table");

    const myArray = ['apple', 'banana', 'orange'];

    const myList = myArray.map((item) => <p>*{item}</p>)
    console.log(myList)

    const navigateToOrderDetail = _id => {
        navigate(`/admin/allOrder/${_id}`);
    }


    return (
        <div className='allorders mx-3'>
            <div className='pt-4 ps-4'>
                <h4 className='fw-bold side-header'>All Orders {allOrders.length}</h4>
            </div>
            <hr />
            <div className='px-3 table-responsive' >
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Sl</th>
                            <th scope="col">Coustomer</th>
                            <th scope="col">Email</th>
                            <th scope="col">Time</th>
                            <th scope="col">Porduct Name</th>
                            {/* <th scope="col">Model</th> */}
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                            <th scope="col">Total</th>
                            <th scope="col">{/* &nbsp; */}Payment</th>
                            <th scope="col">{/* &nbsp; */}Delivery</th>
                            <th scope="col">{/* &nbsp; */}Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allOrders.map((allOrder, index) =>
                            <tr key={allOrder._id}>
                                <th scope="row">{index + 1}</th>
                                <td>{allOrder.coustomerName}</td>
                                <td>{allOrder.email}</td>
                                <td><img src={allOrder.productsImage} width='100px' height='100px' alt='img' style={{ border: '1px solid gray', borderRadius: '3px' }} /></td>
                                <td>{allOrder.productsName.toString()}</td>

                                {/* const myList = myArray.map((item) => <p>{item}</p>) */}
                                {/* <td>{allOrder.productsName.toString()} 
                                {console.log( allOrder.productsName.toString())}</td> */}
                                <td>{allOrder.productsQuantity.toString()}</td>
                                <td>{allOrder.productsPrice.toString()}</td>
                                <td>{allOrder.grandTotal}</td>
                                <td className='text-end'>Cash</td>
                                <td className='text-end'>Home</td>
                                <td className='text-end'>
                                    <button onClick={() => navigateToOrderDetail(allOrder._id)}>
                                        View
                                    </button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allorder;