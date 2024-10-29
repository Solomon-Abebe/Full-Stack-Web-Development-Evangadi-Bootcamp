import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Sections from "./Components/MainSection/Sections";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "../src/commonResources/css/bootstrap.css";
import "../src/commonResources/css/styles.css";

// import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Sections />
      <Footer />
    </div>
  );
}

export default App;
