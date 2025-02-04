import { useState } from "react";

export const useLocalStorage = (key) => {
  const [state,setState] = useState("")
  
  const getItem = () => {
    try {
      const item = window.localStorage.getItem(key);
      if(item)setState(item)
      return item ? JSON.parse(item) : undefined;
    } catch (err) {
      console.error(err);
    }
  };

  const setItem = (value = "") => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  const removeItem = () => {
    try {
      window.localStorage.removeItem(key);
    } catch (err) {
      console.error(err);
    }
  };
  return { getItem, setItem, removeItem ,state};
};
