import React, { useState } from "react";
import { connect } from "react-redux";
import uuid from "react-uuid";
import "./invoiceForm.css";

const InvoiceForm = ({ productList }) => {
  const [formSave, handleformSave] = useState(false);
  const [formData, setFormData] = useState({});

  const handleformDataChange = (e) => {};

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
        <div className=" form-body">
          <label htmlFor="fullName"> Full Name:</label>
          <input id="fullName" type="text" value={formData.fullName}></input>
          <label htmlFor="phone"> Full Name:</label>
          <input id="phone" type="text" value={formData.phone}></input>
          <label htmlFor="food-type"> Select food category </label>
          <select
            name="food-type"
            id="food-type"
            className="food-type"
            value={formData.cat}
          >
            {productList.map((item) => {
              return (
                <option
                  key={uuid()}
                  value={item.cat}
                  className=" food-type-cat"
                >
                  {" "}
                  {item.cat}
                </option>
              );
            })}
          </select>
          {formData.cat !== null ? (
            <ul>
              {productList.map((item) => {
                return (
                  <ul>
                    {item.itemList.map((itemlist) => {
                      return <li>{itemlist.item}</li>;
                    })}
                  </ul>
                );
              })}
            </ul>
          ) : null}
        </div>
        <div className="form-footer">
          <div className="btn-group">
            {" "}
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
