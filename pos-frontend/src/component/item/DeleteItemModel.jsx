import React, {useEffect, useState} from "react";
import {Button, Form, Modal} from "react-bootstrap";
import {showAlert} from "../Alerts";
import {deleteItem, loadAllItems} from "../controller/ItemFormController";

const DeleteItemModel = ({rowData, closeModal}) => {
    const [showModal, setShowModal] = useState(false);
    const [itemCode, setItemCode] = useState(false);
    const [itemName, setItemName] = useState(false);

    // State variables to store the updated item data
    const [itemData, setItemData] = useState({
        objectId: "",
        item_code: "",
        item_name: "",
    });

    // useEffect to update the fields with the row data when the rowData prop changes
    useEffect(() => {
        if (rowData) {
            setItemData({
                objectId: rowData?._id || '',
                item_code: rowData?.item_code || '',
                item_name: rowData?.item_name || '',
            });
        }
    }, [rowData]);


    const handleOpenModal = () => {
        setShowModal(true);
        //show customer's id and name in the model
        setItemCode(itemData.item_code);
        setItemName(itemData.item_name);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    function btnDeleteItemOnClick() {
        console.log(itemData.objectId)

        // Check if objectId is not empty or null before deleting
        if (deleteItem(itemData.objectId)) {
            //trigger alert
            showAlert("center", "success", "Item Deleted Successfully!");
            //reload all items to the table
            loadAllItems();
        } else {
            //trigger alert
            showAlert("center", "error", "Delete item process failed!");
        }
        // Close the modal after deleting the item
        handleCloseModal();
    }

    return (
        <>
            <Button onClick={handleOpenModal} id="btn_Delete_Item" type="button" variant="outline-danger"
                    className="col-5"
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
                            <br/>
                            <Form.Label className="fw-semibold">Code&nbsp;:&nbsp;</Form.Label>
                            <Form.Label id="lbl_Item_Code" className="fw-semibold">
                                {itemCode}
                            </Form.Label>
                            <br/>
                            <Form.Label className="fw-semibold">Name&nbsp;:&nbsp;</Form.Label>
                            <Form.Label id="lbl_Item_Name" className="fw-semibold">
                                {itemName}
                            </Form.Label>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            No
                        </Button>
                        <Button onClick={btnDeleteItemOnClick} id="btn_Delete_Item_Details" variant="danger">
                            Yes
                        </Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>
        </>
    )
}

export default DeleteItemModel;