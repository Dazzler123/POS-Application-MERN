import React, {useEffect, useState} from "react";
import { Button, Modal } from "react-bootstrap";
import {deleteCustomer, loadAllCustomers} from "../controller/CustomerFormController";
import {showAlert} from "../Alerts";

const DeleteCustomerModel = ({ rowData, closeModal }) => {
    const [showModal, setShowModal] = useState(false);
    const [customerId, setCustomerId] = useState(false);
    const [customerName, setCustomerName] = useState(false);

    // State variables to store the updated customer data
    const [customerData, setCustomerData] = useState({
        objectId:"",
        id: "",
        name: "",
    });

    // useEffect to update the fields with the row data when the rowData prop changes
    useEffect(() => {
        if (rowData) {
            setCustomerData({
                objectId: rowData?._id || '',
                id: rowData?.id || '',
                name: rowData?.name || '',
            });
        }
    }, [rowData]);

    const handleOpenModal = () => {
        setShowModal(true);
        //show customer's id and name in the model
        setCustomerId(customerData.id);
        setCustomerName(customerData.name);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    function btnDeleteCustomerOnClick() {
        console.log(customerData.objectId)

        // Check if objectId is not empty or null before deleting
        if (deleteCustomer(customerData.objectId)) {
            //trigger alert
            showAlert("center", "success", "Customer Deleted Successfully!");
            //reload all customers to the table
            loadAllCustomers();
        } else {
            //trigger alert
            showAlert("center", "error", "Delete customer process failed!");
        }
        // Close the modal after deleting the customer
        handleCloseModal();
    }

    return (
        <>
            <Button onClick={handleOpenModal} id="btn_Delete_Customer" type="button" variant="outline-danger" className="btn col-5"
                    data-bs-toggle="modal" data-bs-target="#staticBackdrop3">
                - Delete Customer
            </Button>

            {/* Delete customer modal */}
            <Modal
                show={showModal}
                onHide={handleCloseModal}
                id="staticBackdrop3"
                backdrop="static"
                keyboard={false}
            >
                <Modal.Dialog dialogClassName="modal-dialog-top">
                    <Modal.Header className="bg-danger">
                        <Modal.Title id="staticBackdropLabel3">Delete Customer</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="mb-3">
                            <label className="form-label">
                                Are you sure you want to delete this customer?
                            </label>
                            <br />
                            <label className="form-label fw-semibold">ID&nbsp;:&nbsp;</label>
                            <label id="lbl_Customer_ID" className="form-label fw-semibold">
                                {customerId}
                            </label>
                            <br />
                            <label className="form-label fw-semibold">Name&nbsp;:&nbsp;&nbsp;</label>
                            <label
                                id="lbl_Customer_Name"
                                className="form-label fw-semibold"
                            >
                                {customerName}
                            </label>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            No
                        </Button>
                        <Button onClick={btnDeleteCustomerOnClick} variant="danger">
                            Yes
                        </Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>
        </>
    )
}

export default DeleteCustomerModel;