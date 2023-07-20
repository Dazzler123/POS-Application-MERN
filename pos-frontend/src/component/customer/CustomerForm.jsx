import {Card, Form, Button, Table} from 'react-bootstrap';
import NavbarHeader from "../NavbarHeader";
import {loadAllCustomers, searchCustomerById} from "../controller/CustomerFormController";
import AddNewCustomerModel from "./AddNewCustomerModel";
import UpdateCustomerModel from "./UpdateCustomerModel";
import DeleteCustomerModel from "./DeleteCustomerModel";
import React, {useState} from "react";
import {showAlert} from "../Alerts";

export const CustomerForm = () => {
    const [tableData, setTableData] = useState([]);
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [selectedRowData, setSelectedRowData] = useState(null); // State to store the data of the clicked row
    const [searchCustomerID, setSearchCustomerID] = useState(""); // State to hold the entered customer ID

    // Function to handle "Load All Customers" button click
    const handleLoadAllCustomers = () => {
        loadAllCustomers(setTableData);
        setIsDataLoaded(true);
    };

    // Function to handle row click event
    const handleRowClick = (rowData) => {
        console.log(rowData)
        setSelectedRowData(rowData);
    };

    // Function to handle search button click
    const handleSearchCustomer = () => {
        if (searchCustomerID.trim() !== "") {
            searchCustomerById(searchCustomerID)
                .then((customerData) => {
                    console.log(customerData)
                    // Add the fetched customer data to the tableData state to display it as a row
                    setTableData([customerData]);
                    setIsDataLoaded(true); // Set isDataLoaded to true to display the table
                    //trigger alert
                    showAlert("center", "info", "Customer found!");
                })
                .catch((error) => {
                    console.error("Error fetching customer:", error);
                    //trigger alert
                    showAlert("center", "error", "Invalid id, No such customer found!");
                });
        }
    };

    // Function to handle enter key press in the search text field
    const handleEnterKeyPress = (event) => {
        if (event.key === "Enter") {
            handleSearchCustomer();
        }
    };

    return (
        <>
            {/* Header */}
            <NavbarHeader/>

            {/* Customer form */}
            <main id="cust_main_container"
                  className="container-fluid bg-light row me-0 pe-0 ms-0 mt-5 ps-0 justify-content-around">
                {/* Heading */}
                <h4 className="fw-semibold fst-italic col-12 pt-4 pb-2 ps-4">Customer Form</h4>

                {/* Search customer */}
                <Card className="container card ps-0 pe-0 col-md-5 ms-3 row col-sm-12">
                    <Card.Header className="bg-primary text-white">Search Customer</Card.Header>
                    <Card.Body className="border-0 p-0">
                        <div style={{marginTop: '17px'}} className="d-flex col-8 ms-3" role="search">
                            <Form.Control id="txt_Search_Cus_ID" className="me-2" type="search" placeholder="Search"
                                          aria-label="Search" value={searchCustomerID}
                                          onChange={(e) => setSearchCustomerID(e.target.value)}
                                          onKeyPress={handleEnterKeyPress} // Call the handleSearchCustomer function on
                                // enter key press
                            />
                            <Button id="btn_Search_Customer" variant="outline-success" type="submit"
                                    onClick={handleSearchCustomer} // Call the handleSearchCustomer function on button click
                            >
                                Search
                            </Button>
                        </div>
                        <h6 className="fst-italic fw-normal col-4 ms-3" style={{paddingTop: '16px'}}>
                            Search By
                        </h6>
                        <Form.Select className="form-select form-select-sm col-8 ms-3 w-50"
                                     style={{marginBottom: '18px'}} aria-label=".form-select-sm example">
                            <option selected>ID</option>
                            <option value="1">Name</option>
                        </Form.Select>
                    </Card.Body>
                </Card>

                {/* CRUD buttons */}
                <div className="container row col-md-6 gap-3 mt-3 mb-3 justify-content-center col-sm-12">
                    {/*add new customer button with model*/}
                    <AddNewCustomerModel/>
                    {/*update customer button with model*/}
                    <UpdateCustomerModel rowData={selectedRowData} />
                    {/*delete customer button with model*/}
                    <DeleteCustomerModel rowData={selectedRowData}/>
                    <Button onClick={handleLoadAllCustomers} id="btn_Get_All_Customers" type="button"
                            variant="outline-info" className="btn col-5">
                        View All Customers
                    </Button>
                </div>

                {/* Customer details table */}
                <div className="container mt-5 justify-content-center col-md-12 col-sm-12">
                    <Table hover bordered>
                        <thead className="table-primary">
                        <tr>
                            <th className="text-center">Customer ID</th>
                            <th className="text-center">Customer Name</th>
                            <th className="text-center">Customer Address</th>
                            <th className="text-center">Customer Contact</th>
                        </tr>
                        </thead>
                        {isDataLoaded && (
                            <tbody>
                            {tableData.map((customer) => (
                                <tr key={customer.objectId}
                                    onClick={() => handleRowClick(customer)} // Call the handleRowClick function on row click
                                    >
                                    <td>{customer.id}</td>
                                    <td>{customer.name}</td>
                                    <td>{customer.address}</td>
                                    <td>{customer.contact}</td>
                                </tr>
                            ))}
                            </tbody>
                        )}
                    </Table>
                </div>
            </main>
        </>
    );
};

export default CustomerForm;
