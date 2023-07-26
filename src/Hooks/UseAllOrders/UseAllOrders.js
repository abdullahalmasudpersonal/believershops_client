import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const UseAllOrders = () => {
    const [user] = useAuthState(auth);
    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        fetch(`https://mahsez-server.onrender.com/allOrder?email=${user.email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setAllOrders(data))

    }, [allOrders]);

    return [allOrders, setAllOrders];
}
export default UseAllOrders;