import { useEffect, useState } from "react"

const UseProductDetails = productId =>{
    const [productDetails, setProductDetails] = useState([]);
    useEffect( () =>{
        const url = `http://localhost:5000/product/${productId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProductDetails(data));
    }, [productId]);
    return [productDetails, setProductDetails];
}

export default UseProductDetails;