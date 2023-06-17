import { useEffect, useState } from "react"

const UseJainamazs = () => {
    const [jainamazs, setJainamazs] = useState([]);
    useEffect( () =>{
        fetch('https://mahsez-server.onrender.com/jainamazs')
        .then(res => res.json())
        .then(data => setJainamazs(data));
    }, []);
    return [jainamazs, setJainamazs];
}

export default UseJainamazs;