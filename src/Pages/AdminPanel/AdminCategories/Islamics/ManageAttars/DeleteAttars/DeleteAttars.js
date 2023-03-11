import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import UseAttars from '../../../../../../Hooks/UseAttars/UseAttars';
import './DeleteAttars.css';

const DeleteAttars = () => {
    const [attars, setAttars] = UseAttars();

    const handleDelete = _id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://mahsez-server.onrender.com/attars/${_id}`;
            console.log('url', url);
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = attars.filter(attar => attar._id !== _id)
                    setAttars(remaining);
                })
        }
    }

    
    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            availability: event.target.availability.value,
        }
        axios.post('http://localhost:5000/attars', order)
            .then(response => {
                console.log(response)
                const { data } = response;
                if (data.insertedId) {
                    toast.success('Your order is placed !!!');
                   // event.target.reset();
                }
            })
    }

    return (
        <div className='m-4 col'>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">SL</th>
                        <th scope="col">Name</th>
                        <th scope="col">Image</th>
                        <th scope="col">Remove</th>
                    </tr>
                </thead>
                <tbody>
                   
                    {
                        attars.map((attar, index) =>
                            <tr key={attar._id}>
                                <th scope="row">{index + 1}</th>
                                <td>{attar.name}</td>

                                
                                    <td><input onSubmit={handlePlaceOrder}defaultValue={attar.availability} name='availability' /></td>

                                <td><img width='50px' src={attar.img} alt='' /></td>
                                <td><button onClick={() => handleDelete(attar._id)} className=' order-calcel-btn'>Delete</button></td>
                            </tr>)
                    } 
                </tbody>
            </table>
        </div>
    );
};

export default DeleteAttars;