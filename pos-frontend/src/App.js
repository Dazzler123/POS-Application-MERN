import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import {DashboardForm} from "./component/DashboardForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomerForm from "./component/customer/CustomerForm";
import ItemForm from "./component/item/ItemForm";
import ManageOrderForm from "./component/manage-order/ManageOrderForm";
import PlaceOrderForm from "./component/place-order/PlaceOrderForm";
import NavbarHeader from "./component/NavbarHeader";

function App() {
    return (
        <>
            {/*<DashboardForm/>*/}
            {/*<CustomerForm/>*/}
            {/*<ItemForm/>*/}
            {/*<PlaceOrderForm/>*/}
            <NavbarHeader/>

            <Routes>
                <Route path="/" element={<DashboardForm/>}/>
                <Route path="/customer" element={<CustomerForm/>}/>
                <Route path="/items" element={<ItemForm/>}/>
                <Route path="/place-order" element={<PlaceOrderForm/>}/>
                <Route path="/manage-order" element={<ManageOrderForm/>}/>
            </Routes>
        </>
    );
}

export default App;
