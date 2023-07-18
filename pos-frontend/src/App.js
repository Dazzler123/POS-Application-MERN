import React from 'react';
import './App.css';
import {DashboardForm} from "./component/DashboardForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomerForm from "./component/CustomerForm";

function App() {
  return (
      <>
          {/*<DashboardForm/>*/}
          <CustomerForm/>
      </>
  );
}

export default App;
