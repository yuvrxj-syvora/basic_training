const { ApolloServer, gql } = require("apollo-server");

const users = [
  {
    firstName: "GraphQL",
    lastName: "Server",
    email: "graphql@server.com",
  },{
    firstName: "GraphQL 2",
    lastName: "Server",
    email: "graphql@server.com",
  },{
    firstName: "GraphQL 3",
    lastName: "Server",
    email: "graphql@server.com",
  },{
    firstName: "GraphQL 4",
    lastName: "Server",
    email: "graphql@server.com",
  },
];

const typeDefs = gql`
  type Query {
    hello: String!
    randomNumber: Int!
    queryUsers: [User]!
  }

  type User {
    firstName: String!
    lastName: String!
    email: String!
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!): User!
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello World",
    randomNumber: () => Math.round(Math.random() * 10),
    queryUsers: () => users,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server
  .listen({ port: 8080 })
  .then(({ url }) => console.log(`GraphQL server is running at ${url}`));
