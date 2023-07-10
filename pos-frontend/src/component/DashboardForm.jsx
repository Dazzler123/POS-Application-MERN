import {Container, Navbar, Nav, Button, Row, Col, Card, Image} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';

import bgImage from '../assets/Woman cashier at checkout in shop or supermarket.jpg';
import navbarIcon from '../assets/1892627.png';


export const DashboardForm = () => {
    const styles = {
        backgroundColor: '#e3f2fd',
        // fontSize: '48px'
    };

    const btnDashboard = {
        fontSize: '48px'
    };

    return (
        <>
            <Container fluid>
                <header id="header_container">
                    <Navbar expand="lg" fixed="top" style={styles}>
                        <Container fluid>
                            <Navbar.Brand href="#">
                                <Image src={navbarIcon} alt="Logo" width="30" height="30"
                                       className="d-inline-block align-text-top"/>{' '}
                                Dazzler's POS System
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarSupportedContent"/>
                            <Navbar.Collapse id="navbarSupportedContent">
                                <Nav className="me-auto mb-2 mb-lg-0">
                                    <Nav.Item>
                                        <Nav.Link id="btn_To_Home" href="#" active className="link-primary">
                                            Home
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link id="btn_To_Manage_Orders" href="#" active className="link-primary">
                                            Orders
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link id="btn_To_Items" href="#" active className="link-primary">
                                            Items
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </header>
            </Container>

            <Container fluid className="row me-0 pe-0 ms-0 ps-0 overflow-hidden">
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

                <Row className="col-md-6 col-sm-12 row gap-4 mt-5 mb-5 justify-content-center text-center">
                    <Col id="btn_Customer" className="col-4 shadow bg-body rounded-5 h-50">
                        <FontAwesomeIcon icon={faCoffee} size="5x"/>
                        <h3 className="display-6 fs-3 mt-3">Customer</h3>
                    </Col>

                    <Col id="btn_Item" className="col-4 shadow bg-body rounded-5 h-50">
                        <FontAwesomeIcon icon={faCoffee} size="5x"/>
                        <h3 className="display-6 fs-3 mt-3">Item</h3>
                    </Col>

                    <Col id="btn_Place_Order" className="col-4 shadow bg-body rounded-5 h-50">
                        <FontAwesomeIcon icon={faCoffee} size="5x"/>
                        <h3 className="display-6 fs-3 mt-3">Place Order</h3>
                    </Col>

                    <Col id="btn_Manage_Orders" className="col-4 shadow bg-body rounded-5 h-50">
                        <FontAwesomeIcon icon={faCoffee} size="5x"/>
                        <h3 className="display-6 fs-3 mt-3">Manage Orders</h3>
                    </Col>
                </Row>
                <small className="col-12 fw-light fs-6 text-end mt-3 pe-4">
                    Designed & Developed By Dasindu Hewagamage
                </small>
            </Container>
        </>
    )
}

export default DashboardForm;