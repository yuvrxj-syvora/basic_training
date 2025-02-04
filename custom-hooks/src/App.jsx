import { useCallback, useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ThemedBtn from "./components/ThemedBtn";
import { Counter } from "./components/Counter";
import Todo from "./components/Todo";
import { ErrorBoundary } from "react-error-boundary";
import ErrorProneComponent from "./components/ErrorProneComponent";
import { Cart } from "./components/Cart";
import LocalStorage from "./components/LocalStorage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ErrorBoundary fallback={<div>Some Error Occured</div>}>
      {/* <ThemedBtn /> */}
      {/* <Counter /> */}
      <Todo />
      
      {/* <ErrorProneComponent /> */}
      {/* <Cart /> */}
      {/* <LocalStorage /> */}
      </ErrorBoundary>
    </>
  );
}

export default App;
