import { useEffect, useState } from "react"

const UseAllOrders = () => {
    const [allOrders, setAllOrders] = useState({});
    useEffect(() => {
        fetch(`https://mahsez-server.onrender.com/allOrder`)
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, []);
    return [allOrders, setAllOrders];
}
export default UseAllOrders;