// import React, { createContext, useReducer } from 'react'
// import { initialState, reducer } from '../../Utility/reducer';

// export const DataContext =createContext();


// const DataProvider = ({children}) => {
//   return (
//     <DataContext.Provider value = {useReducer(reducer,initialState)}>{children}</DataContext.Provider>
//   )
// }

// export default DataProvider;

import React, { createContext, useReducer } from "react";
import { initialState, reducer } from "../../Utility/reducer";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  return (
    <DataContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
