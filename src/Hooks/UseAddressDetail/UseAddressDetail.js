import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const UseAddressDetail = () => {
    const { addressId } = useParams();
    const [addressDetail, setAddressDetail] = useState([]);
    useEffect(() => {
        fetch(`https://mahsez-server.vercel.app/api/v1/address/${addressId}`, {
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