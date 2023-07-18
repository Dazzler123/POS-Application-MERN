const CustomerForm = () => {

    return (
        <>
            {/* header */}
            <header id="header_container">
                <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: '#e3f2fd' }}>
                    <div className="container-fluid">
                        {/* heading & icon */}
                        <a className="navbar-brand" href="/">
                            <img src="../assets/point-of-sale-icon-7.png" alt="Logo" width="30" height="30" className="d-inline-block align-text-top" />
                            Dazzler's POS System
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {/* Home */}
                                <li className="nav-item">
                                    <a id="btn_To_Home" className="nav-link active link-primary" href="#">Home</a>
                                </li>
                                {/* Orders */}
                                <li className="nav-item">
                                    <a id="btn_To_Manage_Orders" className="nav-link active link-primary" href="#">Orders</a>
                                </li>
                                {/* Items */}
                                <li className="nav-item">
                                    <a id="btn_To_Items" className="nav-link active link-primary" href="#">Items</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            {/* customer form */}
            <main id="cust_main_container" className="container-fluid bg-light row me-0 pe-0 ms-0 mt-5 ps-0 justify-content-around">
                {/* heading */}
                <h4 className="fw-semibold fst-italic col-12 pt-4 pb-2 ps-4">Customer Form</h4>

                {/* search customer */}
                <div className="container card ps-0 pe-0 col-md-5 ms-3 row col-sm-12">
                    <h5 className="card-header bg-primary text-white">Search Customer</h5>
                    <div className="card-body border-0 p-0">
                        <div style={{ marginTop: '17px' }} className="d-flex col-8 ms-3" role="search">
                            <input id="txt_Search_Cus_ID" className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button id="btn_Search_Customer" className="btn btn-outline-success" type="submit">Search</button>
                        </div>
                        <h6 className="fst-italic fw-normal col-4 ms-3" style={{ paddingTop: '16px' }}>Search By</h6>
                        <select className="form-select form-select-sm col-8 ms-3 w-50" style={{ marginBottom: '18px' }} aria-label=".form-select-sm example">
                            <option selected>ID</option>
                            <option value="1">Name</option>
                        </select>
                    </div>
                </div>

                {/* crud btns */}
                <div className="container row col-md-6 gap-3 mt-3 mb-3 justify-content-center col-sm-12">
                    <button id="btn_Add_Customer" type="button" className="btn btn-outline-success col-5" data-bs-toggle="modal" data-bs-target="#staticBackdrop">+ Add New Customer</button>
                    <button id="btn_Update_Customer" type="button" className="btn btn-outline-warning col-5" data-bs-toggle="modal" data-bs-target="#staticBackdrop2" disabled>Update Customer</button>
                    <button id="btn_Delete_Customer" type="button" className="btn btn-outline-danger col-5" data-bs-toggle="modal" data-bs-target="#staticBackdrop3" disabled>- Delete Customer</button>
                    <button id="btn_Get_All_Customers" type="button" className="btn btn-outline-primary col-5">View All Customers</button>
                </div>

                {/* save customer modal */}
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    {/* Modal content */}
                </div>

                {/* update customer modal */}
                <div className="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    {/* Modal content */}
                </div>

                {/* delete customer modal */}
                <div className="modal fade" id="staticBackdrop3" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    {/* Modal content */}
                </div>

                {/* customer details table */}
                <div className="container mt-5 justify-content-center col-md-12 col-sm-12">
                    <table className="table table-hover table-bordered">
                        <thead className="table-primary">
                        <tr>
                            <th scope="col" className="text-center">Customer ID</th>
                            <th scope="col" className="text-center">Customer Name</th>
                            <th scope="col" className="text-center">Customer Address</th>
                            <th scope="col" className="text-center">Customer Salary</th>
                        </tr>
                        </thead>
                        <tbody id="tbl_Customer_Body">
                        {/* Table body content */}
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    );
}

export default CustomerForm;
