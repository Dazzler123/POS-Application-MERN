import {Button, Form, Modal} from "react-bootstrap";
import React, {useEffect, useState} from 'react';
import $ from "jquery";
import {showAlert} from "../Alerts";
import {updateItem} from "../controller/ItemFormController";

const UpdateItemModel = ({ rowData, closeModal }) => {
    const [showModal, setShowModal] = useState(false);

    // State variables to store the updated customer data
    const [itemData, setItemData] = useState({
        objectId:"",
        item_code: "",
        item_name: "",
        unit_price: "",
        qty_on_hand: "",
    });

    // useEffect to update the fields with the row data when the rowData prop changes
    useEffect(() => {
        if (rowData) {
            setItemData({
                objectId: rowData?._id || '',
                item_code: rowData?.item_code || '',
                item_name: rowData?.item_name || '',
                unit_price: rowData?.unit_price || '',
                qty_on_hand: rowData?.qty_on_hand || '',
            });
        }
    }, [rowData]);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    function btnUpdateItemOnClick() {
        const newItem = {
            item_code: $('#txt_Update_Item_Code').val(),
            item_name: $('#txt_Update_Item_Name').val(),
            unit_price: $('#txt_Update_Price_Per_Unit').val(),
            qty_on_hand: $('#txt_Update_QTY_On_Hand').val()
        };

        // console.log(newItem)
        console.log(itemData.objectId)
        // Check if objectId is not empty or null before updating
        if (updateItem(itemData.objectId, newItem)) {
            //trigger alert
            showAlert("center", "success", "Item Updated Successfully!");
        } else {
            //trigger alert
            showAlert("center", "error", "Update item process failed!");
        }
        // Close the modal after saving the item
        handleCloseModal();
    }

    return (
        <>
            <Button onClick={handleOpenModal} id="btn_Update_Item" type="button" variant="outline-warning"
                    className="col-5" data-bs-toggle="modal" data-bs-target="#staticBackdrop5">
                Update Item
            </Button>

            <Modal show={showModal}
                   onHide={handleCloseModal}
                   id="staticBackdrop5"
                   backdrop="static"
                   keyboard={false}
                   centered
            >
                <Modal.Header className="bg-warning">
                    <Modal.Title id="staticBackdropLabel5">Update Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Update item input form */}
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Item Code:</Form.Label>
                            <Form.Control id="txt_Update_Item_Code" type="text" placeholder="Ex: ITM-001" />
                            <span className="control-error fw-light fs-6 text-danger" id="lbl_Update_Item_Reg_ID"></span>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Item Name:</Form.Label>
                            <Form.Control id="txt_Update_Item_Name" type="text" placeholder="Ex: Keerisamba 5kg" />
                            <span className="control-error fw-light fs-6 text-danger" id="lbl_Update_Item_Reg_Name"></span>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Price Per Unit:</Form.Label>
                            <Form.Control id="txt_Update_Price_Per_Unit" type="text" placeholder="Ex: 2500.00" />
                            <span className="control-error fw-light fs-6 text-danger" id="lbl_Update_Item_Reg_PPU"></span>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Quantity On Hand:</Form.Label>
                            <Form.Control id="txt_Update_QTY_On_Hand" type="text" placeholder="Ex: 500" />
                            <span className="control-error fw-light fs-6 text-danger" id="lbl_Update_Item_Reg_QOH"></span>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Cancel
                    </Button>
                    <Button onClick={btnUpdateItemOnClick} id="btn_Update_Item_Details" variant="primary">
                        Update Item
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default UpdateItemModel;