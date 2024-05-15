import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer from "./CalculatorSlice";

const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
  },
});

export default store