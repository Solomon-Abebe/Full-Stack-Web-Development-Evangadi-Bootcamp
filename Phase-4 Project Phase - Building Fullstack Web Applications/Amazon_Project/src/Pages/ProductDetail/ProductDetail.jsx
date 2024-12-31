// import React, { useEffect, useState } from 'react'
// import LayOut from "../../Components/LayOut/LayOut";
// import classes from "./ProductDetail.module.css"
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { productUrl } from '../../Api/endPoints';
// import ProductCard from '../../Components/Category/Product/ProductCard';
// import Loader from '../../Components/Loader/Loader';



// function ProductDetail() {
//     const{productId}= useParams();
//     const[isLoading, setIsLoading]=useState(false);
//     const[product, setProduct]= useState({})
//     useEffect(()=>{
//         setIsLoading(true);
//         axios
//           .get(`${productUrl}/products/${productId}`)
//           .then((res) => {
//               setProduct(res.data);
//               setIsLoading(false);
//           })
//           .catch((err) => {
//             console.log(err);
//             setIsLoading(false);
//           });

//     }, [])
//   return (
//     <LayOut>
//         { (isLoading?(<Loader/>): (<ProductCard product={product} />))}
//     </LayOut>
//   );
// }

// export default ProductDetail;

import React, { useEffect, useState } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import classes from "./ProductDetail.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../Components/Category/Product/ProductCard";
import Loader from "../../Components/Loader/Loader";

function ProductDetail() {
  const { productId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load product details.");
        setIsLoading(false);
      });
  }, [productId]);

  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <div className={classes.error}>{error}</div>
      ) : product ? (
        <ProductCard renderAdd={true} product={product} flex ={true} renderDesc={true} />
      ) : (
        <div className={classes.noData}>No product details available.</div>
      )}
    </LayOut>
  );
}

export default ProductDetail;
