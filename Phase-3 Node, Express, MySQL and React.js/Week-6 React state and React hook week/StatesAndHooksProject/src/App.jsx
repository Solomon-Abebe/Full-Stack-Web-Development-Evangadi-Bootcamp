// import { Component } from 'react';
import './App.css'
import IncreaseDecreaseCount from './Components/IncreaseDecreaseCount'
import MyCounter from './Components/MyCounter'
import UseEffectForTitle from './Components/UseEffectForTitle'
function App() {
  // const [count, setCount] = useState(0)

  return (

      <div>
        <MyCounter />
        <IncreaseDecreaseCount/>
        <UseEffectForTitle/>
      </div>

  )
}

// if I decided to use class component
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <MyCounter />
//       </div>
//     );
//   }
// }

export default App

