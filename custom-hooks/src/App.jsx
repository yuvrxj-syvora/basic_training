import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ThemedBtn from "./components/ThemedBtn";
import { Counter } from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ThemedBtn />
      <Counter />
    </>
  );
}

export default App;
