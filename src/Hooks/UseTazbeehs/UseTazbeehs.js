import { useEffect, useState } from "react"

const UseTazbeehs = () =>{
    const [tazbeehs, setTazbeehs] = useState([]);
    useEffect( () =>{
        fetch('https://mahsez-server.onrender.com/tazbeehs')
        .then(res => res.json())
        .then(data => setTazbeehs(data));
    }, []);
    return [tazbeehs, setTazbeehs];
}

export default UseTazbeehs;