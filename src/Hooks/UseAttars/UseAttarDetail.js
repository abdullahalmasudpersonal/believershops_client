import { useEffect, useState } from "react"

const UseAttarDetail = attarId =>{
    const [attar, setAttar] = useState([]);
    useEffect( () =>{
        const url = `https://mahsez-server.onrender.com/product/${attarId}`;
        console.log(url)
        fetch(url)
        .then(res => res.json())
        .then(data => setAttar(data));
    }, [attarId]);
    return [attar];
}

export default UseAttarDetail;