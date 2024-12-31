import { useState } from 'react'
  import { compose, pipe } from "lodash/fp";
import './App.css'
import { trim, wrap } from 'lodash';
import { bugAdded, bugResolved } from './actionCreators';
 import store from "./store";
 import reducer from "./reducer";
// import {Reduc} from "./Redux_Practice"

function App() {
  const [count, setCount] = useState(0);

  let input = " JavaScript ";
  let outPut = "<div>" + input.trim() + "</div>";
  console.log(outPut);

  const trim = (str) => str.trim();
  const wrapInDiv = (str) => `<div>${str}</div>`;
  const toLowerCase = (str) => str.toLowerCase();

  const result = wrapInDiv(toLowerCase(trim(input)));

  console.log("Function Composition: " + result);

  //use compose
  const transformCompose = compose(wrapInDiv, toLowerCase, trim);
  console.log("Compose: " + transformCompose(input));
  //use Pipe
  const transformPipe = pipe(trim, toLowerCase, wrapInDiv);
  console.log("Pipe: " + transformPipe(input));

  // curry function

  const wrap = (type) => (str) => `<${type}>${str}</${type}>`;

  const add = (a) => (b) => a + b;
  console.log("Curry function: " + add(5)(6));

  // const transformPipe2 = pipe(trim, toLowerCase, wrap("div"))
  const transformPipe2 = pipe(trim, wrap("span"));

  console.log("Curry function: " + transformPipe2(input));

  //Updating Objects in Javascript

  const person = {
    name: "Sol",
    address: {
      Country: "USA",
      City: "San Fransisco",
    },
  };
  //use spread operator
  const updatedPerson = {
    ...person,
    name: "Yafet",
    ...person.address,
    City: "Chicago",
  }; // ...keeps the copy of the older object, creates new object from the copy of the first object
  console.log(person);
  console.log(updatedPerson);

  //Updating Arrays in Javascript

  const numbers =[1,2,3];
  //Adding number into the array
   const index = numbers.indexOf(2);
   const added = [...numbers.slice(0, index),4, ...numbers.slice(index)]
   console.log(added);

   //Removing number from the array

   const removed = numbers.filter((n)=>n!==2)
   console.log(removed);

   //Updating the arry

   const updated = numbers.map(n=>n===2?20:n)
   console.log(updated);

   store.dispatch(bugAdded("Bug 1"))
  store.dispatch(bugResolved(1))

  console.log(store.getState());
  


  return (
    <>
      <div>{/* <Reduc/> */}</div>
    </>
  );
}

export default App
