import { useEffect, useState } from "react"

const UseAttars = () => {
    const [attars, setAttars] = useState([]);
    useEffect( () =>{
        fetch('https://mahsez-server.onrender.com/products')
        .then(res => res.json())
        .then(data => setAttars(data));
    }, []);
    return[attars, setAttars];
}

export default UseAttars;