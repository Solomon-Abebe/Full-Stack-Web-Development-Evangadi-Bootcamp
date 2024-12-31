import { useContext, useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Carousel from "./Components/Carousel/CarouselEffect"; //CarouselEffect is exported as default, no need for named import{Carousel}
import Category from "./Components/Category/Category";
import Product from "./Components/Category/Product/Product";
import Routing from "./Router";
import { DataContext } from "./Components/DataProvider/DataProvider";
import { auth } from "./Utility/firebase";
import { Type } from "./Utility/action.type";

function App() {
  const[{user}, dispatch]= useContext(DataContext);
  // useEffect(()=>{ 
  //   auth.onAuthStateChanged((authUser)=>{
  //     if(authUser){
  //       console.log(authUser);
  //       dispatch({
  //         type:Type.SET_USER,
  //         user:authUser
  //       })
  //     }else{
  //       dispatch({
  //         type:Type.SET_USER,
  //         user:null
  //       })
  //     }
  //   })

  // },[])
useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((authUser) => {
    console.log(authUser);
    dispatch({
      type: Type.SET_USER,
      user: authUser || null,
    });
  });

  // Cleanup the subscription on unmount
  return () => unsubscribe();
}, [dispatch]);


  return (
    <>
      <div>
        <Routing />
      </div>
    </>
  );
}

export default App;
