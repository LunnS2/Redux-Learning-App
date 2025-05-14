// Importing the `AppDispatch` and `RootState` types from the store.
// These types ensure type safety when interacting with the Redux store.
import type { AppDispatch, RootState } from "../app/store";

// Importing the custom hooks `useAppDispatch` and `useAppSelector`.
// These hooks are typed versions of React-Redux's `useDispatch` and `useSelector` hooks.
import { useAppDispatch, useAppSelector } from "../app/hooks";

// Importing actions from the counter slice.
// These actions are used to update the state of the counter.
import {
  increment,
  decrement,
  incrementByAmount,
  incrementAsync,
} from "../features/counter/counterSlice";

// Defining the `Counter` component.
// This component displays the current counter value and provides buttons to update it.
export const Counter = () => {
  // Using the `useAppSelector` hook to access the current value of the counter from the Redux store.
  // The `state.counter.value` is selected from the state tree.
  const count = useAppSelector((state: RootState) => state.counter.value);

  // Using the `useAppDispatch` hook to get the `dispatch` function.
  // This function is used to dispatch actions to the Redux store.
  const dispatch = useAppDispatch<AppDispatch>();

  // Returning the JSX for the Counter component.
  return (
    <div>
      {/* Displaying the current counter value */}
      <h1>Counter: {count}</h1>
      <div>
        {/* Button to decrement the counter by dispatching the `decrement` action */}
        <button onClick={() => dispatch(decrement())}>Decrement</button>

        {/* Button to increment the counter by dispatching the `increment` action */}
        <button onClick={() => dispatch(increment())}>Increment</button>

        {/* Button to increment the counter by 10 by dispatching the `incrementByAmount` action */}
        <button onClick={() => dispatch(incrementByAmount(10))}>
          Increment by 10
        </button>

        {/* Button to increment the counter asynchronously by dispatching the `incrementAsync` thunk */}
        <button onClick={() => dispatch(incrementAsync(10))}>
          Increment async
        </button>
      </div>
    </div>
  );
};