import React, {useState} from "react";
import { Button, Form, Modal } from "react-bootstrap";
import {saveCustomer} from "../controller/CustomerFormController";
import CustomerDTO from "../../dto/CustomerDTO";
import $ from 'jquery';
import { showAlert } from "../Alerts";

const AddNewCustomerModel = () => {
    const [showModal, setShowModal] = useState(false);

    let customer = new CustomerDTO();

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    function btnSaveCustomerOnClick() {
        const newCustomer = new CustomerDTO(
            $('#txt_Cus_ID').val(),
            $('#txt_Cus_Name').val(),
            $('#txt_Cus_Address').val(),
            $('#txt_Cus_Contact').val()
        );
        // pass newCustomer object to saveCustomer to send to backend
        saveCustomer(newCustomer);

        // Close the modal after saving the customer
        handleCloseModal();

        //trigger alert
        showAlert("center", "success", "Customer Saved Successfully!");
    }

    return (
        <>
            <Button onClick={handleOpenModal} id="btn_Add_Customer" type="button" variant="outline-success"
                    className="btn col-5"
                    data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                + Add New Customer
            </Button>

            {/* Save customer modal */}
            <Modal
                show={showModal}
                onHide={handleCloseModal}
                id="staticBackdrop"
                backdrop="static"
                keyboard={false}
            >
                <Modal.Dialog centered>
                    <Modal.Header className="bg-success">
                        <Modal.Title id="staticBackdropLabel">+ Add New Customer</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/* Save customer input form */}
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Customer ID:</Form.Label>
                                <Form.Control
                                    id="txt_Cus_ID"
                                    type="text"
                                    placeholder="Ex: C001"
                                />
                                <Form.Text className="text-danger fw-light fs-6">
                                    {/* Add the error message here using state or props */}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Customer Name:</Form.Label>
                                <Form.Control
                                    id="txt_Cus_Name"
                                    type="text"
                                    placeholder="Enter Full Name"
                                />
                                <Form.Text className="text-danger fw-light fs-6">
                                    {/* Add the error message here using state or props */}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Customer Address:</Form.Label>
                                <Form.Control
                                    id="txt_Cus_Address"
                                    type="text"
                                    placeholder="Ex: 23, Alwis Town Road, Hendala, Wattala."
                                />
                                <Form.Text className="text-danger fw-light fs-6">
                                    {/* Add the error message here using state or props */}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Customer Contact:</Form.Label>
                                <Form.Control
                                    id="txt_Cus_Contact"
                                    type="text"
                                    placeholder="Ex: +94762093856"
                                />
                                <Form.Text className="text-danger fw-light fs-6">
                                    {/* Add the error message here using state or props */}
                                </Form.Text>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Cancel
                        </Button>
                        <Button onClick={btnSaveCustomerOnClick} id="btn_Add_New_Customer" variant="primary">
                            Save Customer
                        </Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>
        </>
    )
}

export default AddNewCustomerModel;