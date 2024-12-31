// import React, { useContext } from "react";
// import LayOut from "../../Components/LayOut/LayOut";
// import classes from "./Cart.module.css";
// import { DataContext } from "../../Components/DataProvider/DataProvider";
// import { Type } from "../../Utility/action.type";
// import ProductCard from "../../Components/Category/Product/ProductCard"; // Assuming ProductCard is imported here
// import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
// import { Link } from "react-router-dom";
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

// function Cart() {
//   const [{ basket, user }, dispatch] = useContext(DataContext);
// //   const total = basket.reduce((amount, item) => {
// //     return item.price * item.amount + amount;
// //   }, 0);

//  const total = basket.reduce((amount, item) => {
//    if (item && item.price) {
//      return item.price * item.amount + amount;
//    }
//    return amount; // Skip item if price is undefined
//  }, 0);

//   const increment = (item) => {
//     dispatch({
//       type: Type.ADD_TO_BASKET,
//       item,
//     });
//   };
//   const decrement = (id) => {
//     dispatch({
//       type: Type.REMOVE_FROM_BASKET,
//       id,
//     });
//   };

//   // Calculate the total price and quantity of items in the cart

// //   const calculateTotal = () =>
// //     basket.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <LayOut>
//       <section className={classes.container}>
//         <div className={classes.cart_container}>
//           <h3>Your shopping cart</h3>
//           <hr />
//           {basket?.length === 0 ? (
//             <p>No items in your cart</p>
//           ) : (
//             basket?.map((item, id) => {
//               return (
//                 <section className={classes.cart_product}>
//                   <ProductCard
//                     key={id}
//                     product={item}
//                     renderDesc={true}
//                     flex={true}
//                     renderAdd={false}
//                   />
//                   <div className={classes.btn_container}>
//                     <button
//                       className={classes.btn}
//                       onClick={() => increment(item)}
//                     >
//                       <IoIosArrowUp size={30} />
//                     </button>
//                     <span>{item.amount}</span>
//                     <button
//                       className={classes.btn}
//                       onClick={() => decrement(item.id)}
//                     >
//                       <IoIosArrowDown size={30} />
//                     </button>
//                   </div>
//                 </section>
//               );
//             })
//           )}
//         </div>
//         {/* Subtotal */}
//         {basket?.length !== 0 && (
//           <div className={classes.subtotal}>
//             <div>
//               <p>Subtotal({basket?.length} items)</p>
//               <CurrencyFormat amount={total} />
//             </div>
//             <span>
//               <input type="checkbox" />
//               <small>This order contains a gift</small>
//             </span>
//             <Link to="/payments">Continue to checkout</Link>
//           </div>
//         )}
//       </section>
//     </LayOut>
//   );
// }
// export default Cart;

import React, { useContext } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import classes from "./Cart.module.css";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";
import ProductCard from "../../Components/Category/Product/ProductCard";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);

  const total = basket.reduce((amount, item) => {
    if (item && item.price) {
      return item.price * item.amount + amount;
    }
    return amount;
  }, 0);

  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };

  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };

  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.cart_container}>
          <h3>Your shopping cart</h3>
          <hr />
          {basket?.length === 0 ? (
            <p>No items in your cart</p>
          ) : (
            basket.map((item, index) => (
              // Ensure each item has a unique key
              <section
                key={item.id || index} // Fallback to index if item.id is not available
                className={classes.cart_product}
              >
                <ProductCard
                  product={item}
                  renderDesc={true}
                  flex={true}
                  renderAdd={false}
                />
                <div className={classes.btn_container}>
                  <button
                    className={classes.btn}
                    onClick={() => increment(item)}
                  >
                    <IoIosArrowUp size={30} />
                  </button>
                  <span>{item.amount}</span>
                  <button
                    className={classes.btn}
                    onClick={() => decrement(item.id)}
                  >
                    <IoIosArrowDown size={30} />
                  </button>
                </div>
              </section>
            ))
          )}
        </div>

        {/* Subtotal Section */}
        {basket?.length !== 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>Subtotal({basket.length} items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>
            <Link to="/payments">Continue to checkout</Link>
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Cart;
