import {Button, Form, Modal} from "react-bootstrap";
import React, {useState} from 'react';
import ItemDTO from "../../dto/ItemDTO";
import $ from "jquery";
import {showAlert} from "../Alerts";
import {saveItem} from "../controller/ItemFormController";

const AddItemModel = () => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    function btnSaveItemOnClick() {
        const newItem = new ItemDTO(
            $('#txt_Item_Code').val(),
            $('#txt_Item_Name').val(),
            $('#txt_Price_Per_Unit').val(),
            $('#txt_QTY_On_Hand').val()
        );
        // pass newItem object to saveItem to send to backend
        saveItem(newItem);

        // Close the modal after saving the item
        handleCloseModal();

        //trigger alert
        showAlert("center", "success", "Item Saved Successfully!");
    }

    return (
        <>
            <Button onClick={handleOpenModal} id="btn_Add_Item" type="button" variant="outline-success"
                    className="col-5" data-bs-toggle="modal" data-bs-target="#staticBackdrop4">
                + Add New Item
            </Button>

            <Modal
                id="staticBackdrop4"
                backdrop="static"
                keyboard={false}
                centered
                show={showModal} // Set the value of "show"
                onHide={handleCloseModal}
            >
                <Modal.Header className="bg-success">
                    <Modal.Title>+ Add New Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Save item input form */}
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Item Code:</Form.Label>
                            <Form.Control
                                id="txt_Item_Code"
                                type="text"
                                placeholder="Ex: ITM-001"
                            />
                            <Form.Text className="text-danger fw-light fs-6">
                                {/* Add the error message here using state or props */}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Item Name:</Form.Label>
                            <Form.Control
                                id="txt_Item_Name"
                                type="text"
                                placeholder="Ex: Keerisamba 5kg"
                            />
                            <Form.Text className="text-danger fw-light fs-6">
                                {/* Add the error message here using state or props */}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Price Per Unit:</Form.Label>
                            <Form.Control
                                id="txt_Price_Per_Unit"
                                type="text"
                                placeholder="Ex: 2500.00"
                            />
                            <Form.Text className="text-danger fw-light fs-6">
                                {/* Add the error message here using state or props */}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Quantity On Hand:</Form.Label>
                            <Form.Control
                                id="txt_QTY_On_Hand"
                                type="text"
                                placeholder="Ex: 500"
                            />
                            <Form.Text className="text-danger fw-light fs-6">
                                {/* Add the error message here using state or props */}
                            </Form.Text>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" data-bs-dismiss="modal" onClick={handleCloseModal}>
                        Cancel
                    </Button>
                    <Button onClick={btnSaveItemOnClick} id="btn_Add_New_Item" variant="primary">
                        Save Item
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddItemModel;