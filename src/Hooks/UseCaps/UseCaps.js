import { useEffect, useState } from "react"

const UseCaps = () => {
    const [caps, setCaps] = useState([]);
    useEffect(() => {
        fetch('https://mahsez-server.onrender.com/caps')
            .then(res => res.json())
            .then(data => setCaps(data));
    }, []);
    return [caps, setCaps];
}

export default UseCaps;