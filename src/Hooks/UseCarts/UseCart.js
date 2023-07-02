import { useEffect, useState } from "react";
import { getStoredCart } from "../../utilities/fakedb";

const UseCart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        const keys = Object.keys(storedCart);

        /*       async function init() {
                  try {
                      const results = await Promise.all([
                          fetch('http://localhost:5000/attarsByKeys').then(response => response.json()),
                          fetch('http://localhost:5000/capsByKeys').then(response => response.json())
                      ].map(promise => promise.catch(error => error)));
                      console.log('masud',results);
                  } catch (error) {
                      console.log(error)
                  }
              }
              init(); */

        /*    const url1 = fetch('http://localhost:5000/attarsByKeys');
           const url2 = fetch('http://localhost:5000/attarsByKeys');
           Promise.all([url1, url2]).then(values =>{
               console.log('masuds',values)
               return Promise.all(values.map(r => r.json()));
           }).then(values => {
               console.log(values)
           });
    */
        /*   const url = [
              'http://localhost:5000/attarsByKeys',
              'http://localhost:5000/capsByKeys',
          ]; */

        fetch('http://localhost:5000/productsByKeys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(keys)
        })
            .then(res => res.json())
            .then(attars => {
                for (const _id in storedCart) {
                    const addedProduct = attars.find(attar => attar._id === _id);
                    if (addedProduct) {
                        const quantity = storedCart[_id];
                        addedProduct.quantity = quantity;
                        savedCart.push(addedProduct);
                    }
                }
                setCart(savedCart)
            })
    }, []);

    return [cart, setCart];
}

export default UseCart;