import  { Component } from 'react';
/**************************************************** */
//1. Using states in class components by initializing states in the constructor
// class ExampleComp extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//           bussinessName: "EvangadiTech",
//           businessState: "Maryland",
//           Country: "USA",
//         };
//     }
//     render() {
//         return (
//           <div>
//             <h1>{this.state.bussinessName}</h1>
//           </div>
//         );
//     }
// }

// export default ExampleComp;
/********************************************************* */
//2. Using states in class components by initialization states without constructor

// class ExampleComp extends Component {
//     state = {
//       bussinessName: "EvangadiTech",
//       businessState: "Maryland",
//       Country: "USA",
//     };
//     render() {
//         return (
//           <div>
//             <h1>{this.state.bussinessName}</h1>
//           </div>
//         );
//     }
// }
// export default ExampleComp;

// Passing state to external components as props
/**************************************** */
// import OtherExample from "./OtherExample";
// class ExampleComp extends Component {
//   constructor() {
//     super();
//     this.state = {
//       state1: 0,
//       state2: "Test",
//     };
//   }
//   render() {
//     return (
//       <div>
//         <OtherExample myData={this.state.state2} />
//       </div>
//     );
//   }
// }
// export default ExampleComp;
/************************************************** */
//Handling events in class components: Binding in the render() method (using arrow function as a callback)
// class ExampleComp extends Component {
//     sayHi=() => {
//         console.log(this);
//     }

//     render() {
//         return <button onClick={() => this.sayHi("Abebe")}>Click me </button>;
//     }
// }

// export default ExampleComp;
/******************************************* */
//Handling events in class components: Binding in the constructor

// class ExampleComp extends Component {
//     sayHi = (name) => {
//         console.log(`Hello ${name}`);
//     }

//     render() {
//         return <button onClick={this.sayHi.bind(this, "Abebe")}>Click me </button>;
//     }  
// } 
//     export default ExampleComp;
    //Another way to bind in the constructor
    // constructor() {
    //     super();
    //     this.sayHi = this.sayHi.bind(this);
/****************************** */
// Handling events in functional components

// const ExampleComp = () => {
//         return <button onClick={() => console.log("Hello Abebe")}>Click me </button>;
//     }
// export default ExampleComp;

//Updating state values in your class component: setState() method

class ExampleComp extends Component {
    constructor() { 
        super();
        this.state = {
            valueOne: "Hi Abebe",
        };
    }
    updateValue = () => {
        this.setState({valueOne: "Hello Abebe"})
    }
    render () {
        return (
            <div>
                <h1>{this.state.valueOne}</h1>
                <button onClick={this.updateValue}>Click me</button>
            </div>
        );
    }
}

export default ExampleComp;