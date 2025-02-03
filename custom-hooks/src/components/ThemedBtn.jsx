import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const ThemedBtn = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <button
        onClick={()=>toggleTheme()}
        style={{
          color: theme === "light" ? "black" : "white",
          backgroundColor: theme === "light" ? "blue" : "black",
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemedBtn;
