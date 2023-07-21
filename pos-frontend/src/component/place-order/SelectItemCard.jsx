import {Button, Card, Col, Container, Form} from "react-bootstrap";
import React, {useState} from "react";
import {loadAllItemCodes} from "../controller/PlaceOrderFormController";
import {searchItemById} from "../controller/ItemFormController";

export const SelectItemCard = () => {
    const [selectedItem, setSelectedItem] = useState('None');
    const [comboBoxData, setComboBoxData] = useState([]);
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    // load all item codes to the combo box at initialization state
    const loadItemCodes = () => {
        loadAllItemCodes(setComboBoxData);
        setIsDataLoaded(true);
    }

    // Function to handle the selection change
    const handleSelectionChange = async (event) => {
        const selectedItemValue = event.target.value;
        setSelectedItem(selectedItemValue);

        // Accessing the data text of the selected option
        const selectedOptionText = event.target.options[event.target.selectedIndex].text;
        console.log('Selected Option Text:', selectedOptionText);

        //search item and get details
        try {
            // Search item and get details using the selectedOptionText as the itemCode
            const itemData = await searchItemById(selectedOptionText);
            // Set the item data to the corresponding fields
            document.getElementById('txtAvailableQTYOnHand').value = itemData.qty_on_hand;
            document.getElementById('txtItemName').value = itemData.item_name;
            document.getElementById('txtUnitPrice').value = itemData.unit_price;
        } catch (error) {
            console.error('Error fetching item data:', error);
            // You can handle errors here
        }
    };

    return (
        <>
            {/* Select item */}
            <Container className="card ps-0 pe-0 col-md-4 ms-4 row col-sm-12">
                <Card>
                    <Card.Header className="bg-primary text-white">Select Item</Card.Header>
                    <Card.Body className="border-0 p-0">
                        <Container className="row g-2 mt-1 ms-2">
                            <Form.Group as={Col} md={5}>
                                <Form.Label>Select Item Code : </Form.Label>
                                <Form.Select id="cbxSelectItemCode" onClick={loadItemCodes} aria-label=""
                                             onChange={handleSelectionChange}>
                                    <option selected>None</option>
                                    {isDataLoaded && comboBoxData.map((item) => (
                                        <option key={item.item_code}>{item.item_code}</option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                            <Form.Group as={Col} md={6}>
                                <Form.Label>Available Quantity On Hand : </Form.Label>
                                <Form.Control
                                    id="txtAvailableQTYOnHand"
                                    className="form-control text-danger"
                                    type="number"
                                    value=""
                                    aria-label="Disabled input example"
                                    disabled
                                    readOnly
                                />
                            </Form.Group>
                            <Form.Group as={Col} md={11}>
                                <Form.Label>Item Name : </Form.Label>
                                <Form.Control
                                    id="txtItemName"
                                    className="form-control text-danger"
                                    type="text"
                                    value=""
                                    aria-label="Disabled input example"
                                    disabled
                                    readOnly
                                />
                            </Form.Group>
                            <Form.Group as={Col} md={4}>
                                <Form.Label>Unit Price : </Form.Label>
                                <Form.Control
                                    id="txtUnitPrice"
                                    className="form-control text-danger"
                                    type="number"
                                    value=""
                                    aria-label="Disabled input example"
                                    disabled
                                    readOnly
                                />
                            </Form.Group>
                            <Form.Group as={Col} md={3}>
                                <Form.Label>Select Quantity : </Form.Label>
                                <Form.Control
                                    id="selectQTY"
                                    type="number"
                                    className="form-control text-danger"
                                    placeholder=""
                                    aria-label=""
                                />
                            </Form.Group>
                            <Form.Group as={Col} md={5} style={{marginTop: "8%"}}>
                                <Button id="btnAddToCart" type="button" className="btn btn-warning">
                                    + Add To Cart
                                </Button>
                            </Form.Group>
                            <Container className="col-12 row justify-content-end gap-2"
                                       style={{marginTop: "8%"}}>
                                <Button
                                    id="btnRemoveItemFromCart"
                                    type="button"
                                    className="btn btn-danger col-4"
                                    data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop9"
                                    disabled
                                >
                                    - Remove Item
                                </Button>
                            </Container>
                        </Container>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default SelectItemCard;