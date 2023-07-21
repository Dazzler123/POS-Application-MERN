import React, {useState} from "react";
import {Container, Row, Col, Form, Button, Modal, Table, Card, Navbar} from "react-bootstrap";
import NavbarHeader from "../NavbarHeader";
import SelectItemCard from "./SelectItemCard";

const PlaceOrderForm = () => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleConfirmOrder = () => {
        // Handle logic for confirming the order here
        // e.g., calculating total, updating state, etc.
    };

    return (
        <>
            {/*// top navbar*/}
            <NavbarHeader/>

            <Container fluid className="bg-light p-0 mt-5 overflow-hidden">
                <Row className="pt-4 pb-2 ps-4">
                    <h4 className="fw-semibold fst-italic col-12">Place Order Form</h4>
                </Row>

                <Row className="p-0 m-0">
                    <Container className="card ps-0 pe-0 col-md-4 ms-3 row col-sm-12">
                        <Card>
                            <Card.Header className="bg-primary text-white">Invoice Details</Card.Header>
                            <Card.Body className="border-0 p-0">
                                <Container className="row g-2 mt-1 ms-2">
                                    <Form.Group as={Col} md={6}>
                                        <Form.Label>Date : </Form.Label>
                                        <Form.Control type="date" placeholder="" aria-label=""/>
                                    </Form.Group>
                                    <Form.Group as={Col} md={5}>
                                        <Form.Label>Order ID : </Form.Label>
                                        <Form.Control
                                            id="cbxSelectOrderID"
                                            className="form-control fw-semibold"
                                            type="text"
                                            value=""
                                            aria-label="Disabled input example"
                                            disabled
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} md={5}>
                                        <Form.Label>Enter Customer ID : </Form.Label>
                                        <Form.Control
                                            id="cbxSelectCustID"
                                            className="form-control fw-semibold"
                                            type="text"
                                            value=""
                                            aria-label="Disabled input example"
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} md={6}>
                                        <Form.Label>Customer Salary : </Form.Label>
                                        <Form.Control
                                            id="txtCusSalary"
                                            className="form-control text-danger"
                                            type="number"
                                            value=""
                                            aria-label="Disabled input example"
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} md={11}>
                                        <Form.Label>Customer Name : </Form.Label>
                                        <Form.Control
                                            id="txtCusName"
                                            className="form-control text-danger"
                                            type="text"
                                            value=""
                                            aria-label="Disabled input example"
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} md={11}>
                                        <Form.Label>Customer Address : </Form.Label>
                                        <Form.Control
                                            id="txtCusAddress"
                                            className="form-control text-danger"
                                            type="text"
                                            value=""
                                            aria-label="Disabled input example"
                                            disabled
                                            readOnly
                                        />
                                    </Form.Group>
                                </Container>
                            </Card.Body>
                        </Card>
                    </Container>

                    {/*/!* Select item *!/*/}
                    <SelectItemCard/>

                    {/* Confirm order */}
                    <Container className="card ps-0 pe-0 col-md-3 ms-5 row col-sm-12">
                        <Card.Body className="border-0 p-0">
                            <h5 className="mt-3 ms-4 col-5 text-danger text-start fs-3"
                                style={{display: "inline-block"}}>
                                Total :
                            </h5>
                            <h5 id="lblGrandTotal" className="mt-3 col-6 text-danger text-start fs-3"
                                style={{display: "inline-block"}}>
                                0 /=
                            </h5>
                            <h5 className="mt-1 ms-4 col-5 text-danger text-start fs-3"
                                style={{display: "inline-block"}}>
                                Sub Total :
                            </h5>
                            <h5 id="lblSubTotal" className="mt-1 col-5 text-danger text-start fs-3"
                                style={{display: "inline-block"}}>
                                0 /=
                            </h5>

                            <Row className="col-12 mt-2">
                                <Col xs={7} className="ms-3">
                                    <Form.Label>Cash : </Form.Label>
                                    <Form.Control id="txtCashAmt" type="number" placeholder="Ex: 5000.00"/>
                                </Col>
                                <Col xs={4}>
                                    <Form.Label>Discount : </Form.Label>
                                    <Form.Control id="txtDiscountGiven" type="number" placeholder="Ex: 15"/>
                                </Col>
                                <Col xs={11} className="ms-3 mt-3">
                                    <Form.Label>Balance : </Form.Label>
                                    <Form.Control id="txtBalanceAmt" type="number" placeholder="" disabled/>
                                </Col>
                                <Button
                                    id="btnConfirmOrder"
                                    type="button"
                                    className="btn btn-success btn-lg col-11 ms-4 mt-4 mb-3 h-50"
                                >
                                    Confirm Order
                                </Button>
                            </Row>
                        </Card.Body>
                    </Container>
                </Row>

                {/* Place order details table */}
                <Container className="mt-2">
                    <Table hover bordered>
                        <thead className="table-primary">
                        <tr>
                            <th scope="col" className="text-center">
                                Item Code
                            </th>
                            <th scope="col" className="text-center">
                                Item Name
                            </th>
                            <th scope="col" className="text-center">
                                Unit Price
                            </th>
                            <th scope="col" className="text-center">
                                Quantity Bought
                            </th>
                        </tr>
                        </thead>
                        <tbody>{/* ... Your table body content ... */}</tbody>
                    </Table>
                </Container>

                {/* Remove item from cart modal */}
                <Modal
                    fade
                    id="staticBackdrop9"
                    backdrop="static"
                    keyboard={false}
                    tabIndex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                >
                    <Modal.Dialog className="modal-dialog-top">
                        <Modal.Content>
                            <Modal.Header className="bg-danger">
                                <Modal.Title id="staticBackdropLabel9">Remove Item</Modal.Title>
                                <Button variant="secondary" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </Button>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="mb-3">
                                    <label htmlFor="formGroupExampleInput" className="form-label">
                                        Are you sure you want to remove this item from the cart?
                                    </label>
                                    <br/>
                                    <label htmlFor="formGroupExampleInput2" className="form-label fw-semibold">
                                        Code :{" "}
                                    </label>
                                    <label
                                        id="lbl_Cart_Remove_Item_Code"
                                        htmlFor="formGroupExampleInput"
                                        className="form-label fw-semibold"
                                    ></label>
                                    <br/>
                                    <label htmlFor="formGroupExampleInput" className="form-label fw-semibold">
                                        Name :{" "}
                                    </label>
                                    <label
                                        id="lbl_Cart_Remove_Item_Name"
                                        htmlFor="formGroupExampleInput"
                                        className="form-label fw-semibold"
                                    ></label>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" data-bs-dismiss="modal">
                                    No
                                </Button>
                                <Button id="btnDeleteFromCart" variant="danger">
                                    Yes
                                </Button>
                            </Modal.Footer>
                        </Modal.Content>
                    </Modal.Dialog>
                </Modal>
            </Container>
        </>
    );
};

export default PlaceOrderForm;
