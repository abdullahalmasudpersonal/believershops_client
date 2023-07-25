import React from 'react';
import './Graphs.css';
import { Bar, BarChart, Brush, CartesianGrid, Legend, ReferenceLine, Tooltip, XAxis, YAxis } from 'recharts';
import UseGetAllOrder from '../../../Hooks/UseAdminOrders/UseGetAllOrder';

const Graphs = () => {
    const [allOrder, setAllOrder] = UseGetAllOrder([]);

    /* date width month */
    var today = new Date();
    var optionss = { year: 'numeric', month: 'long', day: 'numeric' };
    var cDates = today.toLocaleString('en-US', optionss);
    const cDate = cDates;
    console.log(typeof(cDate))


    const data = [
        { name: '1', uv: 300, pv: 456 },
        { name: '2', uv: -145, pv: 230 },
        { name: '3', uv: -100, pv: 345 },
        { name: '4', uv: -8, pv: 450 },
        { name: '5', uv: 100, pv: 321 },
        { name: '6', uv: 9, pv: 235 },
        { name: '7', uv: 53, pv: 267 },
        { name: '8', uv: 252, pv: -378 },
        { name: '9', uv: 79, pv: -210 },
        { name: '10', uv: 294, pv: -23 },
        { name: '12', uv: 43, pv: 45 },
        { name: '13', uv: -74, pv: 90 },
        { name: '14', uv: -71, pv: 130 },
        { name: '15', uv: -117, pv: 11 },
        { name: '16', uv: -186, pv: 107 },
        { name: '17', uv: -16, pv: 926 },
        { name: '18', uv: -125, pv: 653 },
        { name: '19', uv: 222, pv: 366 },
        { name: '20', uv: 372, pv: 486 },
        { name: '21', uv: 182, pv: 512 },
        { name: '22', uv: 164, pv: 302 },
        { name: '23', uv: 316, pv: 425 },
        { name: '24', uv: 131, pv: 467 },
        { name: '25', uv: 291, pv: -190 },
        { name: '26', uv: -47, pv: 194 },
        { name: '27', uv: -415, pv: 371 },
        { name: '28', uv: -182, pv: 376 },
        { name: '29', uv: -93, pv: 295 },
        { name: '30', uv: -99, pv: 322 },
        { name: '31', uv: -52, pv: 246 },
    ];

    return (
        <div className='dashboard-dev2'>
            <div className='pt-4 px-4 d-flex justify-content-between'>
                <h4 className='fw-bold'>Graphs</h4>
            </div>
            <hr className='mb-0' />

            <div>
                {allOrder.filter(confirmOrder => confirmOrder.confirmOrderDate ===cDate).slice(0).reverse().map(todayOrder => <p>
                {todayOrder.coustomerName} &nbsp; {todayOrder.email} &nbsp; {todayOrder.confirmOrderDate}
                </p>)}
            </div>

            <div className='p-3'>
                <h6>Selce VS Revinew</h6>
                <BarChart
                    width={998}
                    height={500}
                    data={data}
                    margin={0}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
                    <ReferenceLine y={0} stroke="#000" />
                    <Brush dataKey="name" height={30} stroke="#8884d8" />
                    <Bar dataKey="pv" fill="#8884d8" />
                    <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </div>
        </div>
    );
};

export default Graphs;