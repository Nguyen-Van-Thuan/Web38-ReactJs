
import React from 'react'
import { DECREMENT, INCREMENT } from '../action/actionTypes';

// Gia tri state ban dau
const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {

  switch (action.type) {
    case INCREMENT: //"increment"
      return {
        ...state, //sao chep cho minh cai state ban day
        count: state.count + 1 //cap nhat lai state day
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }

}

export default counterReducer