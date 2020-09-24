import { initializeApp } from "firebase";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
const DisplayInvoice = ({ billItem }) => {
  const [grandTotal, setGrandTotal] = useState(0);
  useEffect(() => {
    setGrandTotal(
      billItem.reduce((a, b) => a + Math.round(b.price * b.quantity), 0)
    );
  });

  return (
    <div>
      <h3> ShObha Hotels</h3>
      <table>
        <th>items</th> <th> Quantity</th> <th> Price</th> <th>Total</th>
        {billItem.map((item) => {
          var total = item.price * item.quantity;

          return (
            <tr>
              {" "}
              <td> {item.name}</td> <td> {item.quantity}</td>{" "}
              <td>{item.price}</td> <td>{total} </td>
            </tr>
          );
        })}
        <tr>
          {" "}
          <td>GrandTotal</td> <td> {grandTotal}</td>
        </tr>
      </table>
      <div>
        {" "}
        <button> Save Invoice</button>
        <button> Print Invoice</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    billItem: state.invoiceReducer.item,
  };
};
export default connect(mapStateToProps)(DisplayInvoice);
