import { useEffect, useState } from "react"

const UseAttarDetail = attarId =>{
    const [attar, setAttar] = useState([]);
    useEffect( () =>{
        const url = `https://mahsez-server.onrender.com/attar/${attarId}`;

        fetch(url)
        .then(res => res.json())
        .then(data => setAttar(data));
    }, [attarId]);
    return [attar];
}

export default UseAttarDetail;