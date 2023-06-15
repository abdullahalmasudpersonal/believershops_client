import { useEffect, useState } from "react"

const UseBlgos = () =>{
    const [blgos, setBlogs] = useState([]);
    useEffect( () =>{
        fetch(`Blogs.json`)
        .then(res => res.json())
        .then(data => setBlogs(data));
    }, []);
    return [blgos,setBlogs];
}

export default UseBlgos;
/* http://localhost:5000/blogs */