// customerService.js
import axios from "axios";

//backend URI
const baseURL = 'http://localhost:3000';


// Function to fetch all customers data
export const loadAllCustomers = (setData) => {
    axios.get(`${baseURL}/api/v1/customer/all`)
        .then((response) => {
            // Handle the response and update the tableData state
            console.log(response.data)
            setData(response.data);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
};

// Function to fetch a customer by ID
export const searchCustomerById = (customerId) => {
    return new Promise((resolve, reject) => {
        axios.get(`${baseURL}/api/v1/customer/${customerId}`)
            .then((response) => {
                // Resolve with the customer data
                resolve(response.data);
            })
            .catch((error) => {
                // Reject with the error
                reject(error);
            });
    });
};

// Function to save a new customer
export const saveCustomer = (customerData) => {
    axios.post(`${baseURL}/api/v1/customer`, customerData)
        .then((response) => {
            console.log("Customer saved successfully:", response.data);
            return true;
        })
        .catch((error) => {
            console.error('Error saving customer:', error);
            return false;
        });
};

// Function to update a customer
export const updateCustomer = (customerId, customerData) => {
    return axios.put(`${baseURL}/api/v1/customer/${customerId}`, customerData)
        .then((response) => {
            console.log("Customer updated successfully :", response.data);
            return true;
        })
        .catch((error) => {
            console.error('Error updating customer :', error);
            return false;
        });
};

// Function to delete a customer
export const deleteCustomer = (customerId) => {
    return axios.delete(`${baseURL}/api/v1/customer/${customerId}`)
        .then((response) => {
            console.log("Customer deleted successfully:", response.data);
            return true;
        })
        .catch((error) => {
            console.error('Error deleting customer:', error);
            return false;
        });
};
