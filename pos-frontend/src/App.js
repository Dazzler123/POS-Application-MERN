import React from 'react';
import './App.css';
import {DashboardForm} from "./component/DashboardForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomerForm from "./component/customer/CustomerForm";
import ItemForm from "./component/item/ItemForm";
import PlaceOrderForm from "./component/place-order/PlaceOrderForm";
import ManageOrderForm from "./component/manage-order/ManageOrderForm";

function App() {
  return (
      <>
          {/*<DashboardForm/>*/}
          {/*<CustomerForm/>*/}
          {/*<ItemForm/>*/}
          <PlaceOrderForm/>
          {/*<ManageOrderForm/>*/}
      </>
  );
}

export default App;
