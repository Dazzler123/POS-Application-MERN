import React, {useState} from "react";
import { Button, Modal } from "react-bootstrap";

const DeleteCustomerModel = () => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

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
                            <label className="form-label fw-semibold">ID:</label>
                            <label id="lbl_Customer_ID" className="form-label fw-semibold">
                                {/* Add the customer ID here */}
                            </label>
                            <br />
                            <label className="form-label fw-semibold">Name:</label>
                            <label
                                id="lbl_Customer_Name"
                                className="form-label fw-semibold"
                            >
                                {/* Add the customer name here */}
                            </label>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            No
                        </Button>
                        <Button id="btn_Delete_Customer_Details" variant="danger">
                            Yes
                        </Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>
        </>
    )
}

export default DeleteCustomerModel;