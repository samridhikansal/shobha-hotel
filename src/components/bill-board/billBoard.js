import React, { useEffect, useState } from "react";

const BillBoard = ({ item }) => {
  //   const [Bills, setBills] = useState([]);
  //   useEffect(() => {
  //     setBills({ Bills: Bills.push(item) });
  //   });
  console.log("bill board => ", item);
  return (
    <div>
      <h3>Bill Board </h3>
      {/* {Bills.map((itt) => {
        console.log("itt =>", itt);
        return <p>{itt}</p>;
      })} */}
    </div>
  );
};

export default BillBoard;
