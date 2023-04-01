import { useEffect, useState } from "react"

const UseCaps = () => {
    const [caps, setCaps] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setCaps(data));
    }, []);
    return [caps, setCaps];
}

export default UseCaps;