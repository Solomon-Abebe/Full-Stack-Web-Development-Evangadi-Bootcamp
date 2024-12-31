// import React, { useContext } from 'react'
// import Rating from "@mui/material/Rating";
// import CurrencyFormat from '../../CurrencyFormat/CurrencyFormat';
// import classes from "./Product.module.css"
// import { Link } from 'react-router-dom';
// import { DataContext } from '../../DataProvider/DataProvider';
// import { Type } from '../../../Utility/action.type';

// function ProductCard({product, flex,renderDesc}) {
//     const{image, title, id, rating, price,description}= product;
//     const[state, dispatch]=useContext(DataContext);

//     const addToCart = ()=>{
//         dispatch({
//           type: Type.ADD_TO_BASKET,
//           item: {
//             image,
//             title,
//             id,
//             rating,
//             price,
//             description,
//           },
//         });
//     }

//   return (
//     <div
//       className={`${classes.card_container} ${
//         flex ? classes.product_flexed : ""
//       }`}
//     >
//       <Link to={`/products/${id}`}>
//         <img src={image} alt="" />
//       </Link>
//       <div>
//         <h3>{title}</h3>
//         {renderDesc && (
//           <div style={{ maxWidth: "80vh", textAlign: "justify" }}>
//             {description}
//           </div>
//         )}
//         <div className={classes.rating}>
//           {/* rating */}
//           {/* <Rating value={rating.rate} precision={0.1}/>    */}
//           <Rating value={rating?.rate || 0} precision={0.1} />

//           {/* ratingcount */}
//           {/* <small>{rating.count}</small> */}
//           <small>{rating?.count || 0}</small>
//         </div>
//         <div>
//           {/* price */}
//           <CurrencyFormat amount={price} />
//           <button
//             className={classes.button}
//             onClick={addToCart}
//             disabled={state.basket.some((cartItem) => cartItem.id === id)}
//           >
//             {state.basket.some((cartItem) => cartItem.id === id)
//               ? "Added"
//               : "Add to Cart"}
//           </button>

//           {/* <button className={classes.button} onClick={addToCart}>add to cart</button> */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductCard

// import React, { useContext, useState } from "react";
// import Rating from "@mui/material/Rating";
// import CurrencyFormat from "../../CurrencyFormat/CurrencyFormat";
// import classes from "./Product.module.css";
// import { Link } from "react-router-dom";
// import { DataContext } from "../../DataProvider/DataProvider";
// import { Type } from "../../../Utility/action.type";

// function ProductCard({ product, flex, renderDesc }) {
//   const { image, title, id, rating, price, description } = product;
//   const [quantity, setQuantity] = useState(); // Initialize quantity state
//   const [state, dispatch] = useContext(DataContext);

//   // Handle the quantity change
//   const handleQuantityChange = (e) => {
//     const value = Math.max(1, parseInt(e.target.value)); // Prevent negative or zero quantity
//     setQuantity(value);
//   };

//   const addToCart = () => {
//     const isItemInCart = state.basket.some((cartItem) => cartItem.id === id);
//     if (isItemInCart) {
//       // If item already in cart, update the quantity
//       dispatch({
//         type: Type.UPDATE_QUANTITY,
//         id,
//         quantity,
//       });
//     } else {
//       // If item is not in cart, add it with the selected quantity
//       dispatch({
//         type: Type.ADD_TO_BASKET,
//         item: {
//           image,
//           title,
//           id,
//           rating,
//           price,
//           description,
//           quantity,
//         },
//       });
//     }
//   };

//   return (
//     <div
//       className={`${classes.card_container} ${
//         flex ? classes.product_flexed : ""
//       }`}
//     >
//       <Link to={`/products/${id}`}>
//         <img src={image} alt={title} />
//       </Link>
//       <div>
//         <h3>{title}</h3>
//         {renderDesc && (
//           <div style={{ maxWidth: "80vh", textAlign: "justify" }}>
//             {description}
//           </div>
//         )}
//         <div className={classes.rating}>
//           <Rating value={rating?.rate || 0} precision={0.1} />
//           <small>{rating?.count || 0}</small>
//         </div>
//         <div>
//           <CurrencyFormat amount={price} />

//           {/* Quantity Selector */}
//           <input
//             type="number"
//             value={quantity}
//             onChange={handleQuantityChange}
//             min="1"
//             className={classes.quantity_input} placeholder="Quantity"
//           />

//           <button
//             className={classes.button}
//             onClick={addToCart}
//             disabled={state.basket.some((cartItem) => cartItem.id === id)}
//           >
//             {state.basket.some((cartItem) => cartItem.id === id)
//               ? "Added"
//               : "Add to Cart"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;
import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
import { DataContext } from "../../DataProvider/DataProvider";
import { Type } from "../../../Utility/action.type";

function ProductCard({ product, flex, renderDesc, actions, renderAdd }) {
  const {image, title, id, rating, price, description } = product;
  const [state, dispatch] = useContext(DataContext);

  const addToCart = () => {
    if (!state.basket.some((item) => item.id === id)) {
      dispatch({
        type: Type.ADD_TO_BASKET,
        item: { id, image, title, rating, price, description, quantity: 1 },
      });
    }
  };

  return (
    <div
      className={`${classes.card_container} ${
        flex ? classes.product_flexed : ""
      }`}
    >
      <img src={image} alt={title} />
      <div>
        <h4>{title}</h4>
        {renderDesc && <p>{description}</p>}
        <div className={classes.rating}>
          <Rating value={rating?.rate || 0} precision={0.1} />
          <small>{rating?.count || 0}</small>
        </div>
        <div>
          <CurrencyFormat amount={price} />
          {actions
            ? actions // Render custom actions when provided (e.g., cart controls)
            : renderAdd && (
                <button
                  className={classes.button}
                  onClick={addToCart}
                  disabled={state.basket.some((item) => item.id === id)}
                >
                  {state.basket.some((item) => item.id === id)
                    ? "Added"
                    : "Add to Cart"}
                </button>
              )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
