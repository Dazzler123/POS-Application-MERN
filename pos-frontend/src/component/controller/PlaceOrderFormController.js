import axios from "axios";

//backend URI
const baseURL = 'http://localhost:3000';

export const placeOrder = (orderObj) => {
    axios.post(`${baseURL}/api/v1/order`, orderObj)
        .then((response) => {
            console.log("Order placed successfully:", response.data);
            return true;
        })
        .catch((error) => {
            console.error('Place order failed :', error);
            return false;
        });
}
