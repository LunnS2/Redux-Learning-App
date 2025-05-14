// Importing `StrictMode` from React.
// `StrictMode` is a tool for highlighting potential problems in an application.
// It activates additional checks and warnings in development mode.
import { StrictMode } from "react";

// Importing `createRoot` from React DOM.
// `createRoot` is used to create a root for rendering a React application in React 18+.
import { createRoot } from "react-dom/client";

// Importing the main `App` component.
// This is the root component of the application.
import App from "./App.tsx";

// Importing the `Provider` component from React-Redux.
// `Provider` makes the Redux store available to the entire application.
import { Provider } from "react-redux";

// Importing the Redux store.
// The store is the centralized state management object for the application.
import { store } from "./app/store.ts";

// Rendering the React application.
// `createRoot` initializes the React application and attaches it to the DOM element with the ID "root".
createRoot(document.getElementById("root")!).render(
  // Wrapping the application in `StrictMode` for additional checks in development mode.
  <StrictMode>
    {/* Wrapping the application in `Provider` to make the Redux store available to all components. */}
    <Provider store={store}>
      {/* Rendering the main `App` component. */}
      <App />
    </Provider>
  </StrictMode>
);