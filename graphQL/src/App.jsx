import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useQuery,gql } from "@apollo/client";

function App() {
  const [count, setCount] = useState(0);

  const ExampleQuery = gql`
    query ExampleQuery {
      queryUsers {
        lastName
        firstName
        email
      }
    }
  `;

  const { loading, error, data } = useQuery(ExampleQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      {data.queryUsers.map((item,index) => (
        <div key={index}>
          <h5>{item.firstName}</h5>
          <h5>{item.lastName}</h5>
          <h5>{item.email}</h5>
        </div>
      ))}
    </>
  );
}

export default App;
