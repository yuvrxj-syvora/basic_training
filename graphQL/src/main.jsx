import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: `http://localhost:8080`,
  cache: new InMemoryCache(),
});

let data;

client
  .query({
    query: gql`
      query ExampleQuery {
        queryUsers {
          lastName
          firstName
          email
        }
        hello
        randomNumber
      }
    `,
  })
  .then((result) => {
    console.log(result);
    data = result;
  });

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>
);
