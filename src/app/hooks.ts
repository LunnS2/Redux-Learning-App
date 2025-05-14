// Importing `useDispatch` and `useSelector` hooks from React-Redux.
// These hooks allow you to interact with the Redux store in functional components.
import { useDispatch, useSelector } from "react-redux";

// Importing the `AppDispatch` and `RootState` types from the store.
// These types ensure type safety when using `useDispatch` and `useSelector`.
import type { AppDispatch, RootState } from "./store";

// Creating a typed version of the `useDispatch` hook.
// This ensures that when dispatching actions, TypeScript knows the exact types of actions that can be dispatched.
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

// Creating a typed version of the `useSelector` hook.
// This ensures that when selecting state, TypeScript knows the structure of the state tree.
export const useAppSelector = useSelector.withTypes<RootState>();