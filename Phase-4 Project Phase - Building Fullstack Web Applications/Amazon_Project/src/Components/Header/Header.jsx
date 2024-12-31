
// import React from "react";
// import "./Header.css";
// import SearchIcon from "@mui/icons-material/Search";
// import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
// import { Link } from "react-router-dom";
// // import { useStateValue } from "./StateProvider";
// // import { auth } from "./Firebase";
// const Header = () => {
//   const [{ basket, user }, dispatch] = useStateValue();
//   const handleAuthentication = () => {
//     if (user) {
//       auth.signOut();
//     }
//   };

//   return (
//     <div className="header">
//       <Link href="/">
//         <img
//           src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
//           alt=""
//           className="header__logo"
//         />
//       </Link>
//       <div className="header__search">
//         <input type="text" className="header__searchInput" />
//         <SearchIcon className="header__searchIcon" />
//       </div>
//       <div className="header__nav">
//         <Link href={!user && "/login"}>
//           <div onClick={handleAuthentication} className="header__option">
//             <span className="header__optionLineOne">
//               Hello {!user ? "Guest" : user?.email}
//             </span>
//             <span className="header__optionLineTwo">
//               {user ? "Sign Out" : "Sign In"}
//             </span>
//           </div>
//         </Link>
//         <Link href="/orders" className="header__clearlink ">
//           <div className="header__option">
//             <span className="header__optionLineOne">Returns</span>
//             <span className="header__optionLineTwo">&Orders</span>
//           </div>
//         </Link>
//         <div className="header__option">
//           <span className="header__optionLineOne">Your</span>
//           <span className="header__optionLineTwo">Prime</span>
//         </div>
//         <Link href="./checkout">
//           <div className="header__optionBasket">
//             <ShoppingBasketIcon />
//             <span className="header__optionLineTwo header__basketCount">
//               {basket.length}
//             </span>
//           </div>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Header;
import React, { useContext } from "react";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import LowerHeader from "./LowerHeader";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../Utility/firebase";

const Header = () => {
  const [{basket, user}, dispatch] = useContext(DataContext);
  const totalItem = 
    basket?.reduce((amount, item) => {return item.amount + amount},0);

  return (
    <section className={classes.fixed}>
      <section>
        <div className={classes.header_container}>
          {/* Logo */}
          <div className={classes.logo_container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="Amazon logo"
              />
            </Link>
            {/* Delivery */}
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Deliver to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>

          <div className={classes.search}>
            {/* Search */}
            <select>
              <option value="">All</option>
            </select>
            <input type="text" placeholder="Search Product" />
            <BsSearch size={38} />
          </div>

          <div className={classes.order_container}>
            {/* Language Selector */}
            <div className={classes.language}>
              <img
                src="https://cdn-icons-png.flaticon.com/256/206/206626.png"
                alt="Language Selector Icon"
              />
              <select>
                <option value="en">EN</option>
              </select>
            </div>

            {/* Sign In */}
            <Link to={user ? "#" : "/auth"}>
              <div>
                {user ? (
                  <>
                    <p>Hello, {user.email?.split("@")[0]}</p>
                    <span onClick={() => auth.signOut()}>Sign Out</span>
                  </>
                ) : (
                  <>
                    <p>Hello, Sign In</p>
                    <span>Account & Lists</span>
                  </>
                )}
              </div>
            </Link>

            {/* Orders */}
            <Link to="/orders">
              <p>Returns</p>
              <span>& Orders</span>
            </Link>

            {/* Cart */}
            <Link to="/cart" className={classes.cart}>
              <BiCart size={35} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
};
export default Header;

