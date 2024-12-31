// import React, { useContext, useEffect, useState } from "react";
// import LayOut from "../../Components/LayOut/LayOut";
// import classes from "./Orders.module.css";
// import { db } from "../../Utility/firebase";
// import { DataContext } from "../../Components/DataProvider/DataProvider";
// import ProductCard from "../../Components/Category/Product/ProductCard";
// import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

// function Orders() {

//   const [{user}, dispatch] = useContext(DataContext);
//   const[orders, setOrders] =useState([]);
//   useEffect(()=>{
//     if(user){
//       db.collection("users").doc(user.uid).collection("orders").orderBy("created", "desc").onSnapshot((snapshot)=>{
//         console.log(snapshot);
//         setOrders(
//           snapshot.docs.map((doc)=>({
//             id:doc.id,
//             data:doc.data()
//          }))
//         );
//       })

//     }else{
//       setOrders([])

//     }

//   },[]);
//   return (
//     <LayOut>
//      <section className={classes.container}>
//       <div className={classes.orders_container}>
//         <h2>Your Orders</h2>
//         {orders?.length==0 && <div style={{padding:"20px"}}>
//           You don't have orders yet!
//         </div>}
//         {/* ordered items */}
//         <div>
//           {
//             orders?.map((eachOrder, i)=>{
//               return(
//                 <div key={i}>
//                   <hr />
//                   <p>Order ID: {eachOrder?.id}</p>
//                   {eachOrder?.data?.basket?.map(order=>{
//                    return <ProductCard flex={true} product={order} key={order.id}/>
//                   })}
//                 </div>
//               )
//             })
//           }
//         </div>
//       </div>
//      </section>
//     </LayOut>
//   );
// }

// export default Orders

import React, { useContext, useEffect, useState } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import classes from "./Orders.module.css";
import { db } from "../../Utility/firebase";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Category/Product/ProductCard";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

function Orders() {
  const [{ user }] = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      const ordersQuery = query(
        collection(db, "users", user.uid, "orders"),
        orderBy("created", "desc")
      );

      const unsubscribe = onSnapshot(ordersQuery, (snapshot) => {
        setOrders(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });

      // Unsubscribe when the component unmounts
      return () => unsubscribe();
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.orders_container}>
          <h2>Your Orders</h2>
          {orders?.length === 0 && (
            <div style={{ padding: "20px" }}>You don't have orders yet!</div>
          )}
          <div>
            {orders?.map((eachOrder) => (
              <div key={eachOrder.id}>
                <hr />
                <p>Order ID: {eachOrder.id}</p>
                {eachOrder?.data?.basket?.map((order) => (
                  <ProductCard flex={true} product={order} key={order.id} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Orders;
