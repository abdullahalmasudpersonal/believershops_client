import { useEffect, useState } from "react"
import { getStoredCart } from "../../utilities/fakedb";

const UseCart = (attars) =>{
    const [cart, setCart] = useState([]);

    useEffect( () =>{
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const _id in storedCart){
            const addedAttar = attars.find(attar =>attar._id === _id);
            if(addedAttar){
                const quantity = storedCart[_id];
                addedAttar.quantity = quantity;
                savedCart.push(addedAttar);
            }
        }
        setCart(savedCart)
    }, [attars])
    return [cart, setCart];
}

export default UseCart;