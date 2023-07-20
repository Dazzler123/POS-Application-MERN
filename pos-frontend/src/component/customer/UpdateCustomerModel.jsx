import React, {useEffect, useState} from "react";
import { Button, Form, Modal } from "react-bootstrap";
import $ from "jquery";
import {updateCustomer} from "../controller/CustomerFormController";
import {showAlert} from "../Alerts";

const UpdateCustomerModel = ({ rowData, closeModal }) => {
    const [showModal, setShowModal] = useState(false);

    // State variables to store the updated customer data
    const [customerData, setCustomerData] = useState({
        objectId:"",
        id: "",
        name: "",
        address: "",
        contact: "",
    });

    // useEffect to update the fields with the row data when the rowData prop changes
    useEffect(() => {
        if (rowData) {
            setCustomerData({
                objectId: rowData?._id || '',
                id: rowData?.id || '',
                name: rowData?.name || '',
                address: rowData?.address || '',
                contact: rowData?.contact || '',
            });
        }
    }, [rowData]);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    function btnUpdateCustomerOnClick() {
        const newCustomer = {
            id: $('#txt_Update_Cus_ID').val(),
            name: $('#txt_Update_Cus_Name').val(),
            address: $('#txt_Update_Cus_Address').val(),
            contact: $('#txt_Update_Cus_Contact').val()
        };

        // console.log(newCustomer)
        console.log(customerData.objectId)
        // Check if objectId is not empty or null before updating
        if (updateCustomer(customerData.objectId, newCustomer)) {
            //trigger alert
            showAlert("center", "success", "Customer Updated Successfully!");
        } else {
            //trigger alert
            showAlert("center", "error", "Update customer process failed!");
        }
        // Close the modal after saving the customer
        handleCloseModal();
    }

    return (
        <>
            <Button onClick={handleOpenModal} id="btn_Update_Customer" type="button" variant="outline-warning"
                    className="btn col-5"
                    data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
                Update Customer
            </Button>

            {/* Update customer modal */}
            <Modal
                show={showModal}
                onHide={handleCloseModal}
                id="staticBackdrop2"
                backdrop="static"
                keyboard={false}
            >
                <Modal.Dialog centered>
                    <Modal.Header className="bg-warning">
                        <Modal.Title id="staticBackdropLabel2">Update Customer</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/* Update customer input form */}
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Customer ID:</Form.Label>
                                <Form.Control
                                    id="txt_Update_Cus_ID"
                                    type="text"
                                    placeholder="Ex: C001"
                                />
                                <Form.Text className="text-danger fw-light fs-6">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Customer Name:</Form.Label>
                                <Form.Control
                                    id="txt_Update_Cus_Name"
                                    type="text"
                                    placeholder="Enter Full Name"
                                />
                                <Form.Text className="text-danger fw-light fs-6">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Customer Address:</Form.Label>
                                <Form.Control
                                    id="txt_Update_Cus_Address"
                                    type="text"
                                    placeholder="Ex: 23, Alwis Town Road, Hendala, Wattala."
                                />
                                <Form.Text className="text-danger fw-light fs-6">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Customer Contact:</Form.Label>
                                <Form.Control
                                    id="txt_Update_Cus_Contact"
                                    type="text"
                                    placeholder="Ex: +94762027197"
                                />
                                <Form.Text className="text-danger fw-light fs-6">
                                </Form.Text>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Cancel
                        </Button>
                        <Button onClick={btnUpdateCustomerOnClick} id="btn_Update_Customer_Details"
                                variant="primary">
                            Update Customer
                        </Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>
        </>
    )
}

export default UpdateCustomerModel;