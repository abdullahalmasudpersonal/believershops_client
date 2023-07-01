import { useEffect, useState } from "react"

const UseAddressDetail = addressId => {
    const [addressDetail, setAddressDetail] = useState({});
    useEffect(() => {
        fetch(`https://mahsez-server.onrender.com/address/${addressId}`, {
            method: "GET",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => setAddressDetail(data));
    }, [addressId]);
    return [addressDetail,setAddressDetail];
}

export default UseAddressDetail;