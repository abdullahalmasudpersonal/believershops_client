import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const UseProductDetails = () =>{
    const { productId } = useParams();
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