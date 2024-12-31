import store from "./store";

import * as actions from "./actionTypes"

const unsubscribed= store.subscribe(()=>{
    console.log("Store changed!", store.getState());
})
store.dispatch({
    type:actions.BUG_ADDED,
    payload:{
        description:"Bug1"
    }
});
unsubscribed();//will not notify in the second change
store.dispatch({
  type: actions.BUG_REMOVED,
  payload: {
    id: 1,
  },
});

console.log(store.getState());

