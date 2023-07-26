import { useEffect, useState } from "react"

const UseBlgos = () =>{
    const [blgos, setBlogs] = useState([]);
    useEffect( () =>{
        fetch(`https://mahsez-server.onrender.com/blogs`)
        .then(res => res.json())
        .then(data => setBlogs(data));
    }, []);
    return [blgos,setBlogs];
}

export default UseBlgos;
/* https://mahsez-server.onrender.com/blogs */