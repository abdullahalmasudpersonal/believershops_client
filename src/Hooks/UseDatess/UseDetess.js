import { useEffect, useState } from "react"

const UseDatess = () =>{
    const [datess, setDatess] = useState([]);
    useEffect(  () =>{
        fetch('https://mahsez-server.onrender.com/datess')
        .then(res => res.json())
        .then(data => setDatess(data));
    }, []);
    return [datess, setDatess];
}

export default UseDatess;