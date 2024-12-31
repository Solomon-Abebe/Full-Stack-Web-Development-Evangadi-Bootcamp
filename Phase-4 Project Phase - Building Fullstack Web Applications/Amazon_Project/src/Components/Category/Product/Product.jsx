// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import ProductCard from "./ProductCard";
// import classes from "./Product.module.css";
// import Loader from "../../Loader/Loader";

// function Product() {
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setIsLoading(true); // Correct function name
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((res) => {
//         setProducts(res.data);
//         setIsLoading(false);
//       })
//       .catch((err) => {
//         console.error(err); // Better to use console.error for errors
//         setError("Failed to fetch products. Please try again later.");
//         setIsLoading(false);
//       });
//   }, []);

//   return (
//     <div>
//       {isLoading ? (
//         <Loader />
//       ) : error ? (
//         <p className={classes.error}>{error}</p> // Display error message
//       ) : products.length === 0 ? (
//         <p className={classes.noProducts}>No products available.</p> // Handle empty state
//       ) : (
//         <section className={classes.products_container}>
//           {products.map((singleProduct) => (
//             <ProductCard renderAdd={true} product={singleProduct} key={singleProduct.id} />
//           ))}
//         </section>
//       )}
//     </div>
//   );
// }

// export default Product;


import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from "./Product.module.css";
import Loader from "../../Loader/Loader";

function Product() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Initially setting loading to true
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false); // Set loading to false after data is fetched
      })
      .catch((err) => {
        console.error("Error fetching products: ", err); // Log the error to console
        setError("Failed to fetch products. Please try again later.");
        setIsLoading(false); // Ensure loading is false even in case of error
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader /> // You can show more details inside the Loader component
      ) : error ? (
        <p className={classes.error}>{error}</p> // Display error message
      ) : products.length === 0 ? (
        <p className={classes.noProducts}>
          No products found. Please check back later.
        </p> // Empty state message
      ) : (
        <section className={classes.products_container}>
          {products.map((singleProduct) => (
            <ProductCard
              renderAdd={true}
              product={singleProduct}
              key={singleProduct.id}
            />
          ))}
        </section>
      )}
    </div>
  );
}

export default Product;
