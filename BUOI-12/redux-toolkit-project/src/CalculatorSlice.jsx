// Khai bao toan bo action + reducer

import { createSlice } from "@reduxjs/toolkit";

const calculatorSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state, action) => { //increment -> tang
      // state.value: trang thai ban dau initialState: 0
      // action.payload: gia tri ong nguoi dung gui len

      state.value += action.payload;
    },
    decrement: (state, action) => { //decrement -> giam
      state.value -= action.payload;
    },
  },
});

// export cac hanh dong de phan UI dua vao hanh dong nay cap nhat state
// Cac hanh dong nay khi minh khai bao reducer voi RTK -> tu tao luon cho minh
export const { increment, decrement } = calculatorSlice.actions;

// export reducer de store co the su dung duoc
export default calculatorSlice.reducer;
