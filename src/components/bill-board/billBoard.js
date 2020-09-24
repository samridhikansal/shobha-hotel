import React from "react";
import uuid from "react-uuid";
const BillBoard = ({ item }) => {
  console.log("bill board => ", item);
  return (
    <div>
      <h3>Bill Board </h3>
      {item.map((itt) => {
        console.log("itt =>", itt);
        return (
          <div key={uuid()}>
            <span>{itt.name}</span>
            <span>{itt.price}</span>
            <span>{itt.quantity}</span>
          </div>
        );
      })}
    </div>
  );
};

export default BillBoard;
