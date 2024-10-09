import {ADD_TO_CART} from './constants';

const ititialState = [];

export const reducer = (state = ititialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.data];
    default:
      return state;
  }
};
