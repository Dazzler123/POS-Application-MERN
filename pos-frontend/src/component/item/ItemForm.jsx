import React from 'react';
import {Card, Form, Button, Modal, Table } from 'react-bootstrap';
import NavbarHeader from "../NavbarHeader";
import AddItemModel from "./AddItemModel";
import UpdateItemModel from "./UpdateItemModal";
import DeleteItemModel from "./DeleteItemModel";

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
                            <Form.Control id="txt_Search_Item_Code" className="me-2" type="search" placeholder="Search"
                                          aria-label="Search" />
                            <Button id="btn_Search_Item" variant="outline-success" type="submit">
                                Search
                            </Button>
                        </div>
                        <h6 className="fst-italic fw-normal col-4 ms-3" style={{ paddingTop: '16px' }}>
                            Search By
                        </h6>
                        <Form.Select className="form-select form-select-sm col-8 ms-3 w-50 mb-4" s
                                     tyle={{ marginBottom: '18px' }} aria-label=".form-select-sm example">
                            <option selected>Item Code</option>
                            <option value="1">Item Name</option>
                        </Form.Select>
                    </Card.Body>
                </Card>

                {/* CRUD buttons */}
                <div className="container row col-md-6 gap-3 mt-3 mb-3 justify-content-center col-sm-12">
                    <AddItemModel/>
                    <UpdateItemModel/>
                    <DeleteItemModel/>
                    <Button id="btn_Get_All_Items" type="button" variant="outline-primary" className="col-5">
                        View All Items
                    </Button>
                </div>

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
