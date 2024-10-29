import {Component} from "react";
import "./App.css";
import data from "../src/assets/data.jsx";
import FoodItem from "../src/components/FoodItem.jsx";

class App extends Component {
  render() {
    return (
      <div className="all-container">
        <header className="title">
          <h1>Evangadi Menu</h1>
          <div></div>
        </header>
      
        <div className="foods-container">
          {data.map(({ title, price, category, img, desc }, id) => (
            <FoodItem
              key={id}
              title={title}
              price={price}
              category={category}
              img={img}
              desc={desc}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;

// using the category


// import React from "react";
// import "./App.css";
// import menu from "../src/assets/data";
// import FoodItem from "./components/FoodItem";

// class App extends React.Component {
//   // Function to group items by category
//   groupByCategory(menu) {
//     const groupedMenu = {};

//     for (let i = 0; i < menu.length; i++) {
//       const item = menu[i];
//       const category = item.category;

//       if (!groupedMenu[category]) {
//         groupedMenu[category] = [];
//       }
//       groupedMenu[category].push(item);
//     }

//     return groupedMenu;
//     // const orderedMenu = {
//     //   breakfast: groupedMenu.breakfast || [],
//     //   lunch: groupedMenu.lunch || [],
//     //   dinner: groupedMenu.dinner || [],
//     // };

//     // return orderedMenu;
//   }

//   render() {

//     const groupedMenu = this.groupByCategory(menu);

//     return (
//       <div className="all-container">
//         {/* Header */}
//         <header className="title">
//           <h1>Evangadi Menu</h1>
//           <div></div>
//         </header>

//         {/* Loop through each category */}
//         {Object.keys(groupedMenu).map((category) => (
//           <div key={category} className="category-container">
//             {/* Display category name */}
//             <h2 style={{ textAlign: "center" }}>{category}</h2>
//             <div className="foods-container">
//               {/* Display menu items within this category */}
//               {groupedMenu[category].map(({ title, price, img, desc }, id) => (
//                 <FoodItem
//                   key={id}
//                   title={title}
//                   price={price}
//                   img={img}
//                   desc={desc}
//                 />
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

// export default App;
