// Importing the `configureStore` function from Redux Toolkit.
// This function simplifies the process of creating a Redux store and automatically sets up good defaults.
import { configureStore } from "@reduxjs/toolkit";

// Importing the counter reducer, which is responsible for handling the state and actions related to the "counter" feature.
import counterReducer from "../features/counter/counterSlice";

// Creating the Redux store using `configureStore`.
// The `reducer` field is an object where each key corresponds to a slice of state, and the value is the reducer function for that slice.
export const store = configureStore({
  reducer: {
    // The `counter` key represents the state slice for the counter feature.
    // The `counterReducer` manages the logic for updating this slice of state.
    counter: counterReducer,
  },
});

// Defining a TypeScript type for the root state of the Redux store.
// `ReturnType<typeof store.getState>` extracts the return type of the `getState` function, which represents the entire state tree.
export type RootState = ReturnType<typeof store.getState>;

// Defining a TypeScript type for the `dispatch` function of the Redux store.
// This ensures that when dispatching actions, TypeScript knows the exact types of actions that can be dispatched.
export type AppDispatch = typeof store.dispatch;