import { useEffect, useState } from "react"

const UseAttarComboOffer = () =>{
    const [attarComboOffers, setAttarComboOffers] = useState([]);
    useEffect( () =>{
        fetch(`https://mahsez-server.onrender.com/products`)
        .then(res => res.json())
        .then(data => setAttarComboOffers(data));
    },[]);
    return [attarComboOffers, setAttarComboOffers];
}

export default UseAttarComboOffer;