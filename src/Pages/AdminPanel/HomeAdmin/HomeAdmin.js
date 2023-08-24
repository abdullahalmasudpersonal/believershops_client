import React, { useEffect, useState } from 'react';
import './HomeAdmin.css';

const HomeAdmin = () => {

    const [visits, setVisits] = useState(0);

    // Loading from localStorage
    useEffect(() => {
        const storedVisits = Number(localStorage.getItem("visitCounter")) || 0;
        setVisits(storedVisits + 1);
    }, []);

    // Saving in localStorage
    useEffect(() => {
        localStorage.setItem("visitCounter", visits);
    }, [visits]);


    return (
        <div className='dashboard-dev2'>
            <div className='pt-4 px-4 d-flex justify-content-between'>
                <h4 className='fw-bold'>Admin Panel Home</h4>
            </div>
            <hr className='mb-0' />
            <div>
                <h5>Visitor {visits}</h5>
            </div>
        </div>
    );
};

export default HomeAdmin;