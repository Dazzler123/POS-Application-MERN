import React from 'react';
import './App.css';
import {DashboardForm} from "./component/DashboardForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomerForm from "./component/customer/CustomerForm";
import ItemForm from "./component/item/ItemForm";

function App() {
  return (
      <>
          {/*<DashboardForm/>*/}
          {/*<CustomerForm/>*/}
          <ItemForm/>
      </>
  );
}

export default App;
