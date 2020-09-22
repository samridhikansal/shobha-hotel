import React, { useState } from "react";
import { connect } from "react-redux";
import uuid from "react-uuid";
import "./invoiceForm.css";

const InvoiceForm = ({ productList }) => {
  const [formSave, handleformSave] = useState(false);
  //console.log(productList);
  const handleSubmit = (e) => {
    e.preventDefault();
    handleformSave(true);
  };
  // const handlePrint = (e) => {
  //   e.preventDefault;
  // };
  return (
    <div className="form-wrapper">
      {" "}
      <h3 className="form-title"> Invoice</h3>
      <form className="form">
        <div className="form-header">
          {" "}
          <h4> Bill Id: {uuid()}</h4>
        </div>{" "}
        <div className=" form-body">hello i am form body</div>
        <div className="form-footer">
          <div className="btn-group">
            {" "}
            {/* <button> Save Bill</button> */}
            {formSave ? (
              <>
                {" "}
                <button style={{ cursor: "not-allowed" }}> Save Bill </button>
                <button
                  style={{ cursor: "pointer" }}
                  // onClick={(e) => handlePrint(e)}
                >
                  {" "}
                  Print Bill
                </button>
              </>
            ) : (
              <>
                <button
                  style={{ cursor: "pointer" }}
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                >
                  {" "}
                  Save Bill
                </button>
                <button style={{ cursor: "not-allowed" }}> Print Bill</button>
              </>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { productList: state.items };
};
export default connect(mapStateToProps, null)(InvoiceForm);
