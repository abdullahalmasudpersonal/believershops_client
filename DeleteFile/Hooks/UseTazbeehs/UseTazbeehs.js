import { useEffect, useState } from "react"

const UseTazbeehs = () =>{
    const [tazbeehs, setTazbeehs] = useState([]);
    useEffect( () =>{
        fetch('http://localhost:5000/tazbeehs')
        .then(res => res.json())
        .then(data => setTazbeehs(data));
    }, []);
    return [tazbeehs, setTazbeehs];
}

export default UseTazbeehs;