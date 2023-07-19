import React, {useState} from "react";
import {Button, Form, Modal} from "react-bootstrap";

const DeleteItemModel = () => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <Button onClick={handleOpenModal} id="btn_Delete_Item" type="button" variant="outline-danger" className="col-5"
                    data-bs-toggle="modal" data-bs-target="#staticBackdrop6">
                - Delete Item
            </Button>

            {/* Delete item modal */}
            <Modal show={showModal}
                   onHide={handleCloseModal}
                   id="staticBackdrop6"
                   backdrop="static"
                   keyboard={false}
                   >
                <Modal.Dialog className="modal-dialog-top">
                    <Modal.Header className="bg-danger">
                        <Modal.Title id="staticBackdropLabel6">Delete Item</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className="mb-3">
                            <Form.Label>Are you sure you want to delete this item?</Form.Label>
                            <br />
                            <Form.Label className="fw-semibold">Code:</Form.Label>
                            <Form.Label id="lbl_Item_Code" className="fw-semibold"></Form.Label>
                            <br />
                            <Form.Label className="fw-semibold">Name:</Form.Label>
                            <Form.Label id="lbl_Item_Name" className="fw-semibold"></Form.Label>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            No
                        </Button>
                        <Button id="btn_Delete_Item_Details" variant="danger" onClick={() => {}}>
                            Yes
                        </Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>
        </>
    )
}

export default DeleteItemModel;