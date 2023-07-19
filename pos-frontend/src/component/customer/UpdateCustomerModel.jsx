import React, {useState} from "react";
import { Button, Form, Modal } from "react-bootstrap";

const UpdateCustomerModel = () => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

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
                                    {/* Add the error message here using state or props */}
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
                                    {/* Add the error message here using state or props */}
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
                                    {/* Add the error message here using state or props */}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Customer Salary:</Form.Label>
                                <Form.Control
                                    id="txt_Update_Cus_Salary"
                                    type="text"
                                    placeholder="Ex: 25000"
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
                        <Button id="btn_Update_Customer_Details" variant="primary">
                            Update Customer
                        </Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>
        </>
    )
}

export default UpdateCustomerModel;