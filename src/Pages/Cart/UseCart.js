import { useEffect, useState } from "react";
import { getStoredCart } from "../../utilities/fakedb";

const UseCart =(attars)=>{
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        const storedCart =getStoredCart();
        const savedCart =[];
        for(const _id in storedCart){
            const addedProduct = attars.find(attar => attar._id === _id);
            if(addedProduct){
                const quantity = storedCart[_id];
                addedProduct.quantity =quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart)
    },[attars]);

    return [cart, setCart];
}

export default UseCart;