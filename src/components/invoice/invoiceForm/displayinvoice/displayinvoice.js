import React from "react";

const DisplayInvoice = () => {
  return (
    <div>
      <h3> ShObha Hotels</h3>
      <table>
        <th>items</th> <th> Quantity</th> <th> Price</th>
      </table>
      <div>
        {" "}
        <button> Save Invoice</button>
        <button> Print Invoice</button>
      </div>
    </div>
  );
};

export default DisplayInvoice;
