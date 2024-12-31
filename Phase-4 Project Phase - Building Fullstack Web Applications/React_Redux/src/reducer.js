import React from "react";
import * as actions from "./actionTypes";

// npm i redux

let lastId = 0;

function reducer(state = [], action) {
  if (action.type === actions.BUG_ADDED)
    return [
      ...state,
      {
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      },
    ];
  else if (action.type === actions.BUG_REMOVED) {
    return state.filter((bug) => bug.id !== action.payload.id);
  }
  else if(action.type ===actions.BUG_RESOLVED){
    return state.map(bug=>bug.id!==action.payload.id?bug:{...bug, resolved:true})
  }
  return state;

  // Using switch statement
  // switch(action.type){
  //     case "BUG_ADDED":
  //      return[
  //     ...state, {
  //         id: ++lastId,
  //         description: action.payload.description,
  //         resolved:false
  //     }];
  //     case "BUG-REMOVED":
  //          return state.filter((bug) => bug.id !== action.payload.id);
  //     default:
  //         return state;
  // }
}

export default reducer;
