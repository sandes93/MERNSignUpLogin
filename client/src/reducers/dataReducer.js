import { ADD_TRANSACTIONS } from "../actions/types";


export default function dataReducer(state, action) {
  switch (action.type) {
    case ADD_TRANSACTIONS:
          return {
              ...state,
              transactions: action.payload
          }
    default:
      return state;
  }
}
