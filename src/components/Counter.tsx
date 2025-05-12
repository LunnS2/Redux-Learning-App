import type { RootState } from "../app/store";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../features/counter/counterSlice";

export const Counter = () => {
  const count = useAppSelector((state: RootState) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <div>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>
          Increment by 10
        </button>
      </div>
    </div>
  );
};
