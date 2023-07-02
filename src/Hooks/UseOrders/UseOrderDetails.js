import { useEffect, useState } from "react"

const UseOrderDetails = myOrderId =>{
    const [orderDetails, setOrderDetails] = useState({});
    useEffect( () =>{
        const url = `http://localhost:5000/${myOrderId}`;
        fetch(url, {
            method:'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => setOrderDetails(data));
    }, [myOrderId]);
    return [orderDetails, setOrderDetails];
}

export default UseOrderDetails;