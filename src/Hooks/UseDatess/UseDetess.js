import { useEffect, useState } from "react"

const UseDatess = () =>{
    const [datess, setDatess] = useState([]);
    useEffect(  () =>{
        fetch('http://localhost:5000/datess')
        .then(res => res.json())
        .then(data => setDatess(data));
    }, []);
    return [datess, setDatess];
}

export default UseDatess;