// import React from 'react'
// import numeral from 'numeral'

// const CurrencyFormat = ({amount}) => {
//     const formattedAmount = numeral(amount).format("$0,0.00")
//   return (
//     <div style={{fontWeight:"bold", fontSize:28}}> {formattedAmount}</div>
//   )
// }

// export default CurrencyFormat
import React from "react";
import numeral from "numeral";

const CurrencyFormat = ({ amount }) => {
  // Format the amount to a number with two decimal places
  const formattedAmount = numeral(amount).format("$0,0.00");

  // Split the whole number and fractional part
  const [whole, fraction] = formattedAmount.split(".");

  return (
    <div style={{ fontWeight: "bold", fontSize: 20 }}>
      <span style={{ fontSize: "1em" }}>{whole}</span>
      <span style={{ fontSize: "0.75em", verticalAlign: "super" }}>
        {fraction}
      </span>
    </div>
  );
};

export default CurrencyFormat;
