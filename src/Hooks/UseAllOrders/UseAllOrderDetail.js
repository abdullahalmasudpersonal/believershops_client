import { useEffect, useState } from "react"

const UseAllOrderDetail = allOrderId =>{
    const [allOrder, setAllOrder] = useState({});
    useEffect( () =>{
        const url = `https://mahsez-server.onrender.com/allOrder/${allOrderId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setAllOrder(data));
    }, [allOrderId]);
    return [allOrder, setAllOrder];
}

export default UseAllOrderDetail;