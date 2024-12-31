// import React from 'react'
// import classes from "./category.module.css"

// function CategoryCard({data}) {
//   return (
//     <div className={classes.category}>

//         <a href="">
//             <span><h2>{data.title}</h2></span>
//             <img src={data.img} alt="" />
//             <p>shop now</p>
//         </a>
//     </div>
//   )
// }

// export default CategoryCard;

import React from "react";
import classes from "./category.module.css";
import { Link } from "react-router-dom";

function CategoryCard({ data }) {
  return (
    <div className={classes.category}>
      <Link to={`/category/${data.name}`}>
        <h2>{data.name}</h2>
        <img src={data.img} alt={data.title} />
        <p>Shop Now</p>
      </Link>
    </div>
  );
}

export default CategoryCard;
