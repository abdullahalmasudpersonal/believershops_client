import { useEffect, useState } from "react"

const UseProductDetails = productId =>{
    const [products, setProducts] = useState([]);
    useEffect( () =>{
        const url = `https://mahsez-server.onrender.com/product/${productId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [productId]);
    return [products];
}

export default UseProductDetails;