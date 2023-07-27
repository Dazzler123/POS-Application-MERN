import React, {useState} from 'react';
import {Card, Form, Button, Table} from 'react-bootstrap';
import NavbarHeader from "../NavbarHeader";
import UpdateItemModel from "../item/UpdateItemModal";
import DeleteItemModel from "../item/DeleteItemModel";
import {showAlert} from "../Alerts";
import {loadAllItems, searchItemById} from "../controller/ItemFormController";
import UpdateOrderModel from "./UpdateOrderModel";

const ManageOrderForm = () => {
    // const [tableData, setTableData] = useState([]);
    // const [isDataLoaded, setIsDataLoaded] = useState(false);
    // const [selectedRowData, setSelectedRowData] = useState(null); // State to store the data of the clicked row
    // const [searchOrderID, setSearchOrderID] = useState(""); // State to hold the entered order ID
    //
    // // // Function to handle "Load All Orders" button click
    // // const handleLoadAllItems = () => {
    // //     loadAllItems(setTableData);
    // //     setIsDataLoaded(true);
    // // };
    //
    // // Function to handle row click event
    // const handleRowClick = (rowData) => {
    //     console.log(rowData)
    //     setSelectedRowData(rowData);
    // };
    //
    // // Function to handle search button click
    // const handleSearchOrder = () => {
    //     if (searchOrderID.trim() !== "") {
    //         searchOrderById(searchOrderID)
    //             .then((itemData) => {
    //                 console.log(itemData)
    //                 // Add the fetched item data to the tableData state to display it as a row
    //                 setTableData([itemData]);
    //                 setIsDataLoaded(true); // Set isDataLoaded to true to display the table
    //                 //trigger alert
    //                 showAlert("center", "info", "Item found!");
    //             })
    //             .catch((error) => {
    //                 console.error("Error fetching item:", error);
    //                 //trigger alert
    //                 showAlert("center", "error", "Invalid item code, No such item found!");
    //             });
    //     }
    // };
    //
    // // Function to handle enter key press in the search text field
    // const handleEnterKeyPress = (event) => {
    //     if (event.key === "Enter") {
    //         handleSearchItem();
    //     }
    // };

    return (
        <>
            {/*/!* Header *!/*/}
            {/*/!*<NavbarHeader/>*!/*/}

            {/*/!* Item form *!/*/}
            {/*<main id="item_main_container"*/}
            {/*      className="container-fluid bg-light row me-0 pe-0 ms-0 mt-5 ps-0 justify-content-around">*/}
            {/*    /!* Heading *!/*/}
            {/*    <h4 className="fw-semibold fst-italic col-12 pt-4 pb-2 ps-4">Manage Order Form</h4>*/}

            {/*    /!* Search order *!/*/}
            {/*    <Card className="container card ps-0 pe-0 col-md-5 ms-3 row col-sm-12">*/}
            {/*        <Card.Header className="bg-primary text-white">Search Order</Card.Header>*/}
            {/*        <Card.Body className="border-0 p-0">*/}
            {/*            <div style={{marginTop: '17px'}} className="d-flex col-8 ms-3" role="search">*/}
            {/*                <Form.Control id="txt_Search_Item_Code" className="me-2" type="search" placeholder="Search"*/}
            {/*                              aria-label="Search" value={searchItemID}*/}
            {/*                              onChange={(e) => setSearchItemID(e.target.value)}*/}
            {/*                              onKeyPress={handleEnterKeyPress} // Call the handleSearchItem function on*/}
            {/*                    // enter key press*/}
            {/*                />*/}
            {/*                <Button id="btn_Search_Item" variant="outline-success" type="submit"*/}
            {/*                        onClick={handleSearchItem} // Call the handleSearchCustomer function on button click*/}
            {/*                >*/}
            {/*                    Search*/}
            {/*                </Button>*/}
            {/*            </div>*/}
            {/*            <h6 className="fst-italic fw-normal col-4 ms-3" style={{paddingTop: '16px'}}>*/}
            {/*                Search By*/}
            {/*            </h6>*/}
            {/*            <Form.Select className="form-select form-select-sm col-8 ms-3 w-50 mb-4" s*/}
            {/*                         tyle={{marginBottom: '18px'}} aria-label=".form-select-sm example">*/}
            {/*                <option selected>Order ID</option>*/}
            {/*                <option value="1">Date</option>*/}
            {/*            </Form.Select>*/}
            {/*        </Card.Body>*/}
            {/*    </Card>*/}

            {/*    /!* CRUD buttons *!/*/}
            {/*    <div className="container row col-md-6 gap-3 mt-3 mb-3 justify-content-center col-sm-12">*/}
            {/*        /!*update item button with model*!/*/}
            {/*        <UpdateOrderModel rowData={selectedRowData}/>*/}
            {/*        /!*delete item button with model*!/*/}
            {/*        <DeleteItemModel rowData={selectedRowData}/>*/}
            {/*    </div>*/}

            {/*    /!* Item details table *!/*/}
            {/*    <div className="container mt-5 justify-content-center col-md-12 col-sm-12">*/}
            {/*        <Table hover bordered>*/}
            {/*            <thead className="table-primary">*/}
            {/*            <tr>*/}
            {/*                <th className="text-center">Item Code</th>*/}
            {/*                <th className="text-center">Item Name</th>*/}
            {/*                <th className="text-center">Unit Price</th>*/}
            {/*                <th className="text-center">Quantity Bought</th>*/}
            {/*            </tr>*/}
            {/*            </thead>*/}
            {/*            {isDataLoaded && (*/}
            {/*                <tbody>*/}
            {/*                {tableData.map((item) => (*/}
            {/*                    <tr key={item.objectId}*/}
            {/*                        onClick={() => handleRowClick(item)} // Call the handleRowClick function on row click*/}
            {/*                    >*/}
            {/*                        <td>{item.item_code}</td>*/}
            {/*                        <td>{item.item_name}</td>*/}
            {/*                        <td>{item.unit_price}</td>*/}
            {/*                        <td>{item.qty_on_hand}</td>*/}
            {/*                    </tr>*/}
            {/*                ))}*/}
            {/*                </tbody>*/}
            {/*            )}*/}
            {/*        </Table>*/}
            {/*    </div>*/}
            {/*</main>*/}
        </>
    );
};

export default ManageOrderForm;
