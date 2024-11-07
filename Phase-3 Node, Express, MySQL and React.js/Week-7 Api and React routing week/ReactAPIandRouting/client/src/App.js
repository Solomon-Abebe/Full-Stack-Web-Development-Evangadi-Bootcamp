
import Sections from "./Components/MainSection/Sections";



import { Routes, Route } from "react-router-dom";
import Iphone from "./Components/Pages/Iphone/iphone";
import Mac from "./Components/Pages/Mac/Mac";
import Ipad from "./Components/Pages/Ipad/Ipad";
import Tv from "./Components/Pages/Tv/Tv";
import Watch from "./Components/Pages/Watch/Watch";
import Music from "./Components/Pages/Music/Music";
import Support from "./Components/Pages/Support/Support";
import ProductPage from "./Components/Pages/Productpage/Productpage";
import Cart from "./Components/Pages/Cart/Cart";
import Four04 from "./Components/Pages/Four04/Four04";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import SharedLayout from "./Components/Pages/SharedLayout";

import "../src/commonResources/css/bootstrap.css";
import "../src/commonResources/css/styles.css";
// import "./App.css";

function App() {
  return (
    <div className="App">
   
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
          <Route path="/" element={<Sections />} />
          <Route path="/mac" element={<Mac />} />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/iphone/:pid" element={<ProductPage />} />
          <Route path="/ipad" element={<Ipad />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="/support" element={<Support />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/music" element={<Music />} />
          <Route path="/music" element={<Music />} />
          <Route path="*" element={<Four04 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
