import {Card, Col, Container, Form} from "react-bootstrap";
import React, {useState} from "react";
import {searchCustomerById} from "../controller/CustomerFormController";
import {showAlert} from "../Alerts";

export const InvoiceDetails = () => {
    const [searchCustomerID, setSearchCustomerID] = useState(""); // State to hold the entered customer ID
    const [isDataLoaded, setIsDataLoaded] = useState(false);


    // Function to handle search button click
    const handleSearchCustomer = () => {
        if (searchCustomerID.trim() !== "") {
            searchCustomerById(searchCustomerID)
                .then((customerData) => {
                    console.log(customerData)

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
            <Container className="card ps-0 pe-0 col-md-4 ms-3 row col-sm-12">
                <Card>
                    <Card.Header className="bg-primary text-white">Invoice Details</Card.Header>
                    <Card.Body className="border-0 p-0">
                        <Container className="row g-2 mt-1 ms-2">
                            <Form.Group as={Col} md={6}>
                                <Form.Label>Date : </Form.Label>
                                <Form.Control type="date" placeholder="" aria-label=""/>
                            </Form.Group>
                            <Form.Group as={Col} md={5}>
                                <Form.Label>Order ID : </Form.Label>
                                <Form.Control
                                    id="cbxSelectOrderID"
                                    className="form-control fw-semibold"
                                    type="text"
                                    value=""
                                    aria-label="Disabled input example"
                                    disabled
                                />
                            </Form.Group>
                            <Form.Group as={Col} md={5}>
                                <Form.Label>Enter Customer ID : </Form.Label>
                                <Form.Control
                                    id="cbxSelectCustID"
                                    className="form-control fw-semibold"
                                    type="text"
                                    aria-label="Disabled input example"
                                    value={searchCustomerID}
                                    onKeyPress={handleEnterKeyPress}
                                    onChange={(e) => setSearchCustomerID(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md={6}>
                                <Form.Label>Customer Salary : </Form.Label>
                                <Form.Control
                                    id="txtCusSalary"
                                    className="form-control text-danger"
                                    type="number"
                                    value=""
                                    aria-label="Disabled input example"
                                    disabled
                                    readOnly
                                />
                            </Form.Group>
                            <Form.Group as={Col} md={11}>
                                <Form.Label>Customer Name : </Form.Label>
                                <Form.Control
                                    id="txtCusName"
                                    className="form-control text-danger"
                                    type="text"
                                    value=""
                                    aria-label="Disabled input example"
                                    disabled
                                    readOnly
                                />
                            </Form.Group>
                            <Form.Group as={Col} md={11}>
                                <Form.Label>Customer Address : </Form.Label>
                                <Form.Control
                                    id="txtCusAddress"
                                    className="form-control text-danger"
                                    type="text"
                                    value=""
                                    aria-label="Disabled input example"
                                    disabled
                                    readOnly
                                />
                            </Form.Group>
                        </Container>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default InvoiceDetails;