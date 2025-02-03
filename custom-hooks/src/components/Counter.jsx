import { useReducer } from "react";

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.payload };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

export const Counter = () => {
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <p>Count : {state.count}</p>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" ,payload:10});
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        Decrease
      </button>
      <button
        onClick={() => {
          dispatch({ type: "RESET" });
        }}
      >
        Reset
      </button>
    </div>
  );
};
