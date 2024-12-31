// import React from "react";
// import { categoryInfos } from "./categoryFullInfos";
// import CategoryCard from "./CategoryCard";
// import classes from "./category.module.css";

// function Category() {
//   return (
//     <section className={classes.category_container}>
//       {categoryInfos.map((infos, index) => (
//         <CategoryCard key={index} data={infos} />
//       ))}
//     </section>
//   );
// }

// export default Category;

import React from "react";
import { categoryInfos } from "./categoryFullInfos";
import CategoryCard from "./CategoryCard";
import classes from "./category.module.css";

function Category() {
  return (
    <section className={classes.category_container}>
      {categoryInfos.map((info) => (
        <CategoryCard key={info.title} data={info} />
      ))}
    </section>
  );
}

export default Category;
