import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ThemedBtn from "./components/ThemedBtn";
import { Counter } from "./components/Counter";
import Todo from "./components/Todo";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ErrorBoundary fallback={<div>Some Error Occured</div>}></ErrorBoundary>
      {/* <ThemedBtn /> */}
      {/* <Counter /> */}
      <Todo />
    </>
  );
}

export default App;
