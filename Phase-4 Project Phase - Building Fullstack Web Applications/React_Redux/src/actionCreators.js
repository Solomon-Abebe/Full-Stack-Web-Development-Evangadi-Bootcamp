import * as actions from"./actionTypes"

// export function bugAdded(description){
//     return{
//         type:actions.BUG_ADDED,
//         payload:{
//             description:"Bug1"
//         }
//     };
// }

//Or

export const bugAdded = (description) => ({
  type: actions.BUG_ADDED,
          payload:{
              description
          }
});

export const bugResolved=id=>({
    type:actions.BUG_RESOLVED,
    payload:{
        description:description// or simply description
    }
})