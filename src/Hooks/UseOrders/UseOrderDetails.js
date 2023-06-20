import { useEffect, useState } from "react"

const UseOrderDetails = myOrderId =>{
    const [orderDetails, setOrderDetails] = useState({});
    useEffect( () =>{
        const url = `https://mahsez-server.onrender.com/myOrder/${myOrderId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setOrderDetails(data));
    }, [myOrderId]);
    return [orderDetails, setOrderDetails];
}

export default UseOrderDetails;