/**
 * A reducer is where our actual state is going to go and check our actions that are going to get dispatcher to our reducer
 * we can send along a payload
 */

import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  ITEMS_LOADING
} from '../actions/types';

const initialState = {
  items: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false
      }; //... => spread operator means it will take the state items already in.
    // And we're adding a new one
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload)
      };

    case ADD_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.items]
      };

    case ITEMS_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
}
