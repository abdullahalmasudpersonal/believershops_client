import { useEffect, useState } from "react"

const useAttar = () => {
    const [attars, setAttars] = useState([]);
    useEffect( () =>{
        fetch('https://mahsez-server.onrender.com/attars')
        .then(res => res.json())
        .then(data => setAttars(data));
    }, []);
    return[attars, setAttars];
}

export default useAttar;