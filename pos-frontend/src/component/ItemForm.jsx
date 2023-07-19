import React from 'react';
import {Card, Form, Button, Modal, Table } from 'react-bootstrap';
import NavbarHeader from "./NavbarHeader";

const ItemForm = () => {
    return (
        <>
            {/* Header */}
            <NavbarHeader/>

            {/* Item form */}
            <main id="item_main_container" className="container-fluid bg-light row me-0 pe-0 ms-0 mt-5 ps-0 justify-content-around">
                {/* Heading */}
                <h4 className="fw-semibold fst-italic col-12 pt-4 pb-2 ps-4">Item Form</h4>

                {/* Search item */}
                <Card className="container card ps-0 pe-0 col-md-5 ms-3 row col-sm-12">
                    <Card.Header className="bg-primary text-white">Search Item</Card.Header>
                    <Card.Body className="border-0 p-0">
                        <div style={{ marginTop: '17px' }} className="d-flex col-8 ms-3" role="search">
                            <Form.Control id="txt_Search_Item_Code" className="me-2" type="search" placeholder="Search" aria-label="Search" />
                            <Button id="btn_Search_Item" variant="outline-success" type="submit">
                                Search
                            </Button>
                        </div>
                        <h6 className="fst-italic fw-normal col-4 ms-3" style={{ paddingTop: '16px' }}>
                            Search By
                        </h6>
                        <Form.Select className="form-select form-select-sm col-8 ms-3 w-50" style={{ marginBottom: '18px' }} aria-label=".form-select-sm example">
                            <option selected>Item Code</option>
                            <option value="1">Item Name</option>
                        </Form.Select>
                    </Card.Body>
                </Card>

                {/* CRUD buttons */}
                <div className="container row col-md-6 gap-3 mt-3 mb-3 justify-content-center col-sm-12">
                    <Button id="btn_Add_Item" type="button" variant="outline-success" className="col-5" data-bs-toggle="modal" data-bs-target="#staticBackdrop4">
                        + Add New Item
                    </Button>
                    <Button id="btn_Update_Item" type="button" variant="outline-warning" className="col-5" data-bs-toggle="modal" data-bs-target="#staticBackdrop5" disabled>
                        Update Item
                    </Button>
                    <Button id="btn_Delete_Item" type="button" variant="outline-danger" className="col-5" data-bs-toggle="modal" data-bs-target="#staticBackdrop6" disabled>
                        - Delete Item
                    </Button>
                    <Button id="btn_Get_All_Items" type="button" variant="outline-primary" className="col-5">
                        View All Items
                    </Button>
                </div>

                {/* Save item modal */}
                <Modal show={false} onHide={() => {}} id="staticBackdrop4" backdrop="static" keyboard={false} tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <Modal.Header className="bg-success">
                        <Modal.Title id="staticBackdropLabel4">+ Add New Item</Modal.Title>
                        <Button variant="secondary" onClick={() => {}}></Button>
                    </Modal.Header>
                    <Modal.Body>
                        {/* Save item input form */}
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Item Code:</Form.Label>
                                <Form.Control id="txt_Item_Code" type="text" placeholder="Ex: ITM-001" />
                                <span className="control-error fw-light fs-6 text-danger" id="lbl_Add_Item_Reg_ID"></span>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Item Name:</Form.Label>
                                <Form.Control id="txt_Item_Name" type="text" placeholder="Ex: Keerisamba 5kg" />
                                <span className="control-error fw-light fs-6 text-danger" id="lbl_Add_Item_Reg_Name"></span>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Price Per Unit:</Form.Label>
                                <Form.Control id="txt_Price_Per_Unit" type="text" placeholder="Ex: 2500.00" />
                                <span className="control-error fw-light fs-6 text-danger" id="lbl_Add_Item_Reg_PPU"></span>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Quantity On Hand:</Form.Label>
                                <Form.Control id="txt_QTY_On_Hand" type="text" placeholder="Ex: 500" />
                                <span className="control-error fw-light fs-6 text-danger" id="lbl_Add_Item_Reg_QOH"></span>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => {}}>
                            Cancel
                        </Button>
                        <Button id="btn_Add_New_Item" variant="primary" onClick={() => {}}>
                            Save Item
                        </Button>
                    </Modal.Footer>
                </Modal>

                {/* Update item modal */}
                <Modal show={false} onHide={() => {}} id="staticBackdrop5" backdrop="static" keyboard={false} tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <Modal.Header className="bg-warning">
                        <Modal.Title id="staticBackdropLabel5">Update Item</Modal.Title>
                        <Button variant="secondary" onClick={() => {}}></Button>
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
                        <Button variant="secondary" onClick={() => {}}>
                            Cancel
                        </Button>
                        <Button id="btn_Update_Item_Details" variant="primary" onClick={() => {}}>
                            Update Item
                        </Button>
                    </Modal.Footer>
                </Modal>

                {/* Delete item modal */}
                <Modal show={false} onHide={() => {}} id="staticBackdrop6" backdrop="static" keyboard={false} tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <Modal.Dialog className="modal-dialog-top">
                        <Modal.Content>
                            <Modal.Header className="bg-danger">
                                <Modal.Title id="staticBackdropLabel6">Delete Item</Modal.Title>
                                <Button variant="secondary" onClick={() => {}}></Button>
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
                                <Button variant="secondary" onClick={() => {}}>
                                    No
                                </Button>
                                <Button id="btn_Delete_Item_Details" variant="danger" onClick={() => {}}>
                                    Yes
                                </Button>
                            </Modal.Footer>
                        </Modal.Content>
                    </Modal.Dialog>
                </Modal>

                {/* Item details table */}
                <div className="container mt-5 justify-content-center col-md-12 col-sm-12">
                    <Table hover bordered>
                        <thead className="table-primary">
                        <tr>
                            <th className="text-center">Item Code</th>
                            <th className="text-center">Item Name</th>
                            <th className="text-center">Price Per Unit</th>
                            <th className="text-center">Quantity On Hand</th>
                        </tr>
                        </thead>
                        <tbody id="tbl_Item_Body"></tbody>
                    </Table>
                </div>
            </main>
        </>
    );
};

export default ItemForm;
