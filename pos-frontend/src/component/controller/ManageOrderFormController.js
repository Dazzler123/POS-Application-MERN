// import axios from "axios";
//
// //backend URI
// const baseURL = 'http://localhost:3000';
//
// // Function to fetch an order by ID
// export const searchOrderById = (orderId) => {
//     return new Promise((resolve, reject) => {
//         axios.get(`${baseURL}/api/v1/order/${orderId}`)
//             .then((response) => {
//                 // Resolve with the order data
//                 resolve(response.data);
//             })
//             .catch((error) => {
//                 // Reject with the error
//                 reject(error);
//             });
//     });
// };
//
//
// // Function to update an item in an order
// export const updateItemInOrder = (orderObjId, orderItemObjId, updatedQty) => {
//     return axios.put(`${baseURL}/api/v1/order/${orderObjId}`, itemData)
//         .then((response) => {
//             console.log("Order updated successfully :", response.data);
//             return true;
//         })
//         .catch((error) => {
//             console.error('Error updating order :', error);
//             return false;
//         });
// };
//
// // Function to delete a item
// export const deleteItem = (itemCode) => {
//     return axios.delete(`${baseURL}/api/v1/item/${itemCode}`)
//         .then((response) => {
//             console.log("Item deleted successfully:", response.data);
//             return true;
//         })
//         .catch((error) => {
//             console.error('Error deleting item:', error);
//             return false;
//         });
// };
