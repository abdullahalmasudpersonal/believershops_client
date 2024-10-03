import { useEffect, useState } from "react"

const UseProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect( () =>{
        fetch('https://mahsez-server.vercel.app/api/v1/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[]);
    return [products, setProducts];
}

export default UseProducts;
