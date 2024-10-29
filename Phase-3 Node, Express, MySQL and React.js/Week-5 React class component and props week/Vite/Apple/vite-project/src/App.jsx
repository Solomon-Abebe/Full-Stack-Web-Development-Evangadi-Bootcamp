import Card from "./components/card/Card";
import "./App.css";
import { userData } from "./assets/userData.jsx";

function App() {
  return (
    <>
      {/* <h1 className="center">Replicating Components</h1> */}
      <div className="wrapper">
        <h1>1. Business Card App(Using React Props)</h1>
        <h1 className="center">Replicating Components</h1>
        <Card
          name="Adugna"
          email="adugna@gmail.com"
          phone="123456"
          color="firstColor"
        />
        <Card
          name="Tewedaj"
          email="tewedi@gmail.com"
          phone="78999"
          color="secondColor"
        />
        <Card
          name="Biruk"
          email="biruke@gmail.com"
          phone="111111"
          color="thirdColor"
        />
        <Card
          name="Solomon"
          email="solevangadi@gmail.com"
          phone="30303"
          color="firstColor"
        />
      </div>

      <div className="wrapper">
        <h1 className="center">2. Using Array's .map() method</h1>
        {userData.map((data, i) => {
          return (
            <Card
              kry={i}
              name={data.name}
              email={data.email}
              phone={data.phone}
              color={data.color}
            />
          );
          // console.log(data.name);
        })}
      </div>

      <div className="wrapper">
        <h1 className="center">3. Destructuring the Code</h1>
        {userData.map(({name, email, phone, color}, i) => {
          return (
            <Card
              key={i}
              name={name}
              email={email}
              phone={phone}
              color={color}
            />
          );
          // console.log(data.name);
        })}
      </div>
    </>
  );
}

export default App;
