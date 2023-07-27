import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBoxesStacked, faCartShopping, faList, faUser} from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from "react-router-dom";

import bgImage from '../assets/Woman cashier at checkout in shop or supermarket.jpg';

export const DashboardForm = () => {

    const [isHovered, setIsHovered] = React.useState(false);
    const navigate = useNavigate(); // Initialize useNavigate


    function btnCustomerOnClick() {
        // Navigate to the CustomerForm component when the "Customer" tile is clicked
        navigate('/customer');
    }

    function btnItemOnClick() {
        // Navigate to the ItemForm component when the "Item" tile is clicked
        navigate('/items');
    }

    function btnPlaceOrderOnClick() {
        // Navigate to the PlaceOrderForm component when the "Place Order" tile is clicked
        navigate('/place-order');
    }

    function btnManageOrdersOnClick() {
        // Navigate to the ManageOrderForm component when the "Manage Orders" tile is clicked
        navigate('/manage-order');
    }

    const styles = {
        // backgroundColor: '#e3f2fd',
        // fontSize: '48px'
        height:"75vh"
    };

    const btnDashboard = {
        fontSize: '48px'
    };

    const topMargin = {
        marginTop: '20%'
    }

    const btnGroupStyle = {
        cursor: 'pointer',
        transition: 'background 0.3s ease',
    }


    const btnGroupHoverStyle = {
        background: 'linear-gradient(45deg, rgba(29, 236, 197, 0.5), rgba(91, 14, 214, 0.5) 100%)'
    }

    return (
        <>
            {/*<Container fluid>*/}
            {/*    /!* Header *!/*/}
            {/*    <NavbarHeader/>*/}
            {/*</Container>*/}

            <Container fluid className="row me-0 pe-0 ms-0 ps-0 overflow-hidden mt-5">
                <Container className="col-md-6 col-sm-12 text-center">
                    <h3 className="fw-bold fs-4 col-12 mt-5">Hello There!</h3>
                    <h1 className="fw-bold fs-2 col-12 mb-5">Welcome to Dazzler's POS System</h1>

                    <Image
                        src={bgImage}
                        fluid
                        className="col-12"
                        alt="bg_image"
                    />
                </Container>

                <Row className="col-md-6 col-sm-12 row gap-4 mt-5 justify-content-center text-center
                pb-0 mb-0"
                style={styles}>
                    <Col id="btn_Customer" className="col-4 shadow bg-body rounded-5 "
                         style={{...btnGroupStyle, ...(isHovered && btnGroupHoverStyle)}}
                         onClick={btnCustomerOnClick}>
                        <FontAwesomeIcon icon={faUser} size="5x" style={topMargin}/>
                        <h3 className="display-6 fs-3 mt-3">Customer</h3>
                    </Col>

                    <Col id="btn_Item" className="col-4 shadow bg-body rounded-5"
                         style={btnGroupStyle}
                         onClick={btnItemOnClick}>
                        <FontAwesomeIcon icon={faBoxesStacked} size="5x" style={topMargin}/>
                        <h3 className="display-6 fs-3 mt-3">Item</h3>
                    </Col>

                    <Col id="btn_Place_Order" className="col-4 shadow bg-body rounded-5"
                         style={btnGroupStyle}
                         onClick={btnPlaceOrderOnClick}>
                        <FontAwesomeIcon icon={faCartShopping} size="5x" style={topMargin}/>
                        <h3 className="display-6 fs-3 mt-3">Place Order</h3>
                    </Col>

                    <Col id="btn_Manage_Orders" className="col-4 shadow bg-body rounded-5"
                         style={btnGroupStyle}
                         onClick={btnManageOrdersOnClick}>
                        <FontAwesomeIcon icon={faList} size="5x" style={topMargin}/>
                        <h3 className="display-6 fs-3 mt-3">Manage Orders</h3>
                    </Col>
                </Row>
                {/*<small className="col-12 fw-light fs-6 text-end pe-4 m-0">*/}
                {/*    Designed & Developed By Dasindu Hewagamage*/}
                {/*</small>*/}
            </Container>
        </>
    )
}

export default DashboardForm;