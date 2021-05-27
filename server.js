import { ApolloServer, gql } from "apollo-server";
import { data } from "./data.js";

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  type DecisionTree {
    id: Int!
    name: String!
  }

  type Node {
    id: Int!
    decisionTreeId: Int!
    name: String!
    type: String!
    trueNodeId: Int
    falseNodeId: Int
  }

  type Query {
    nodes: [Node]!
  }
`;

// Resolvers define the technique for fetching the types defined
// in the schema.
const resolvers = {
  Query: {
    nodes: () => data.nodes,
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
