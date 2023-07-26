import axios from "axios";

//backend URI
const baseURL = 'http://localhost:3000';


// Function to fetch all item data
export const loadAllItems = (setData) => {
    axios.get(`${baseURL}/api/v1/item/all`)
        .then((response) => {
            // Handle the response and update the tableData state
            console.log(response.data)
            setData(response.data);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
};


export const loadAllItemCodes = () => {
    let itemCodes = [];
    axios.get(`${baseURL}/api/v1/item/all`)
        .then((response) => {
            // get item codes from the response and add them to an array
            let items = response.data;
            items.forEach((item) => {
                itemCodes.push(item)
            });
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    return itemCodes;
};

// Function to fetch a item by ID
export const searchItemById = (itemCode) => {
    return new Promise((resolve, reject) => {
        axios.get(`${baseURL}/api/v1/item/${itemCode}`)
            .then((response) => {
                // Resolve with the item data
                resolve(response.data);
            })
            .catch((error) => {
                // Reject with the error
                reject(error);
            });
    });
};

// Function to save a new item
export const saveItem = (itemData) => {
    axios.post(`${baseURL}/api/v1/item`, itemData)
        .then((response) => {
            console.log("Item saved successfully:", response.data);
            return true;
        })
        .catch((error) => {
            console.error('Error saving item:', error);
            return false;
        });
};

// Function to update an item
export const updateItem = (itemCode, itemData) => {
    return axios.put(`${baseURL}/api/v1/item/${itemCode}`, itemData)
        .then((response) => {
            console.log("Item updated successfully :", response.data);
            return true;
        })
        .catch((error) => {
            console.error('Error updating item :', error);
            return false;
        });
};

// Function to delete a item
export const deleteItem = (itemCode) => {
    return axios.delete(`${baseURL}/api/v1/item/${itemCode}`)
        .then((response) => {
            console.log("Item deleted successfully:", response.data);
            return true;
        })
        .catch((error) => {
            console.error('Error deleting item:', error);
            return false;
        });
};
