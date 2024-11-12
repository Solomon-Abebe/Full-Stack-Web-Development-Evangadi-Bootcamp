
import './App.css'
// import ExampleComp from './Components/ExampleComp'

// function App() {
//    return (
//     <>
//       <div>
//        <ExampleComp/>
//       </div>
//     </>
//   )
// }


// export default App

//!Using useContext

import React from "react";
import UserProvider from "./Components/UseContext/UserProvider";
import UserProfile from "./Components/UseContext/UserProfile";
import UpdateUser from "./Components/UseContext/UpdateUser";

// Wrap Components with the Provider in App Component
function App() {
  return (
    <div className="App">
      <UserProvider>
        <UserProfile />
        <UpdateUser />
      </UserProvider>
    </div>
  );
}

export default App;
