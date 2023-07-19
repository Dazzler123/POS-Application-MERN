import React from 'react';
import {Card, Form, Button, Modal, Table} from 'react-bootstrap';
import {LoadAllCustomers} from "./controller/CustomerFormController";
import NavbarHeader from "./NavbarHeader";

const CustomerForm = () => {
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
                                          aria-label="Search"/>
                            <Button id="btn_Search_Customer" variant="outline-success" type="submit">
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
                    <Button id="btn_Add_Customer" type="button" variant="outline-success" className="btn col-5"
                            data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        + Add New Customer
                    </Button>
                    <Button id="btn_Update_Customer" type="button" variant="outline-warning" className="btn col-5"
                            data-bs-toggle="modal" data-bs-target="#staticBackdrop2" disabled>
                        Update Customer
                    </Button>
                    <Button id="btn_Delete_Customer" type="button" variant="outline-danger" className="btn col-5"
                            data-bs-toggle="modal" data-bs-target="#staticBackdrop3" disabled>
                        - Delete Customer
                    </Button>
                    <Button id="btn_Get_All_Customers" type="button" variant="outline-info" className="btn col-5">
                        View All Customers
                    </Button>
                </div>

                {/* Save customer modal */}
                <Modal show={false} onHide={() => {
                }} id="staticBackdrop" backdrop="static" keyboard={false} tabIndex="-1"
                       aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    {/* Modal content */}
                </Modal>

                {/* Update customer modal */}
                <Modal show={false} onHide={() => {
                }} id="staticBackdrop2" backdrop="static" keyboard={false} tabIndex="-1"
                       aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    {/* Modal content */}
                </Modal>

                {/* Delete customer modal */}
                <Modal show={false} onHide={() => {
                }} id="staticBackdrop3" backdrop="static" keyboard={false} tabIndex="-1"
                       aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    {/* Modal content */}
                </Modal>

                {/* Customer details table */}
                <div className="container mt-5 justify-content-center col-md-12 col-sm-12">
                    <Table hover bordered>
                        <thead className="table-primary">
                        <tr>
                            <th className="text-center">Customer ID</th>
                            <th className="text-center">Customer Name</th>
                            <th className="text-center">Customer Address</th>
                            <th className="text-center">Customer Salary</th>
                        </tr>
                        </thead>
                        {LoadAllCustomers()}
                    </Table>
                </div>
            </main>
        </>
    );
};

export default CustomerForm;
