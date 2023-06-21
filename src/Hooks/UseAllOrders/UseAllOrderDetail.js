import { useEffect, useState } from "react"

const UseAllOrderDetail = allOrderId =>{
    const [allOrder, setAllOrder] = useState({});
    useEffect( () =>{
        const url = `http://localhost:5000/allOrder/${allOrderId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setAllOrder(data));
    }, [allOrderId]);
    return [allOrder, setAllOrder];
}

export default UseAllOrderDetail;