import { Type } from "./action.type";

export const initialState = {
  basket: [],
  user:null
};
export const reducer = (state, action) => {
  switch (action.type) {
    // case Type.ADD_TO_BASKET: {
    //   //! check if the item exists
    //   const existingItem = state.basket.find(
    //     (item) => item.id === action.item.id
    //   );
    //   if (!existingItem) {
    //     //Add a new item to the basket
    //     return {
    //       ...state,
    //       basket: [...state.basket, { ...action.item, amount: 1 }],
    //     };
    //   } else {
    //     //Update the amount of existing item
    //     const updatedBasket = state.basket.map((item) => {
    //       item.id === action.item.id
    //         ? { ...item, amount: item.amount + 1 }
    //         : item;
    //     }); //you can remove curly brace
    //     return {
    //       ...state,
    //       basket: updatedBasket,
    //     };
    //   }
    // }

    case Type.ADD_TO_BASKET:
      const existingItem = state.basket.find(
        (item) => item.id === action.item.id
      );

      if (!existingItem) {
        return {
          ...state,
          basket: [...state.basket, { ...action.item, amount: 1 }],
        };
      } else {
        const updatedBasket = state.basket.map((item) =>
          item.id === action.item.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
        return {
          ...state,
          basket: updatedBasket,
        };
      }
      case Type.EMPTY_BASKET:
        return{
          ...state, basket:[],
        };
    case Type.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case Type.REMOVE_FROM_BASKET: {
      const index = state.basket.findIndex((item) => item.id === action.id);
      let newBasket = [...state.basket];
      if (index >= 0) {
        if (newBasket[index].amount > 1) {
          newBasket[index] = {
            ...newBasket[index],
            amount: newBasket[index].amount - 1,
          };
        } else {
          newBasket.splice(index, 1);
        }
      }
      return {
        ...state,
        basket: newBasket,
      };
    }
    default:
      return state;
  }
};

// import { Type } from "./action.type";

// export const initialState = {
//   basket: [],
// };

// export const reducer = (state, action) => {
//   switch (action.type) {
//     case Type.ADD_TO_BASKET:
//       return {
//         ...state,
//         basket: [...state.basket, { ...action.item, quantity: 1 }], // Initialize quantity
//       };

// case Type.UPDATE_QUANTITY:
//   return {
//     ...state,
//     basket: state.basket.map((item) =>
//       item.id === action.id ? { ...item, quantity: action.quantity } : item
//     ),
//   };

//update all quantity regardless of the item.id and action.id matching
//     case Type.UPDATE_QUANTITY:
//       return {
//         ...state,
//         basket: state.basket.map((item) => ({
//           ...item,
//           quantity: action.quantity, // Apply the new quantity to all items
//         })),
//       };

//     case Type.REMOVE_FROM_BASKET:
//       return {
//         ...state,
//         basket: state.basket.filter((item) => item?.id !== action.id),
//       };

//     default:
//       return state;
//   }
// };
