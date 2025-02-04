import { useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const LocalStorage = () => {
  const { getItem, setItem, removeItem } = useLocalStorage("username");
  const [name, setName] = useState("");

  useEffect(() => {
    setName(getItem() || ""); 
  }, []);

  return (
    <div>
      <h4>Username: {name}</h4>
      
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Enter name"
      />
      <button onClick={() => setItem(name)}>Save</button>
      <button onClick={() => { 
        removeItem(); 
        setName(""); 
      }}>
        Remove
      </button>
    </div>
  );
};

export default LocalStorage;
