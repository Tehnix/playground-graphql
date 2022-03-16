const { ApolloServer, gql } = require("apollo-server");
const { buildSubgraphSchema } = require("@apollo/subgraph");
const { readFileSync } = require("fs");

/**
 * Load our schema definition from file.
 */
const typeDefs = gql(
  readFileSync("./users.subgraph.graphql").toString("utf-8")
);

/**
 * Simple static database of users.
 */
const users = [
  { id: "1", name: "John" },
  { id: "2", name: "Karen" },
  { id: "3", name: "Kelly" },
  { id: "4", name: "Marie" },
  { id: "5", name: "Anne" },
  { id: "6", name: "Bob" },
  { id: "7", name: "Bret" },
];

/**
 * Look up a user by id.
 */
const fetchUserById = (id) => {
  console.log(`Looking up user by id ${id}`);
  return users.find((user) => user.id === id);
};

/**
 * Define our resolvers.
 */
const resolvers = {
  Query: {
    users: () => {
      return users;
    },
    user: (_, { id }) => {
      return fetchUserById(id);
    },
  },
  User: {
    /**
     * We add a reference resolver for the User type. A reference resolver tells
     * the gateway how to fetch an entity by its @key fields:
     */
    __resolveReference(user) {
      return fetchUserById(user.id);
    },
  },
};

/**
 * Configure the Apollo server and tell it to build a subgraph using our schema
 * definition and resolvers.
 */
const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers }),
});

/**
 * Finally, start the server and set it to listen on a port.
 */
server
  .listen({
    port: 4001,
  })
  .then(({ url }) => {
    console.log(`🚀 Users server ready at ${url}`);
  });
