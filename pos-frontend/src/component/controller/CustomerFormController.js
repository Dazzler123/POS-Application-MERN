import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const LoadAllCustomers = () => {
    const loadAllCustomers = () => {

    }
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        const backendURL = 'http://localhost:3000';

        axios.get(`${backendURL}/api/v1/customer/all`)
            .then((response) => {
                // Handle the response and update the tableData state
                console.log(response.data)
                setTableData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <tbody>
        {tableData.map((customer) => (
            <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.address}</td>
                <td>{customer.contact}</td>
            </tr>
        ))}
        </tbody>
    )
}

export default {LoadAllCustomers};