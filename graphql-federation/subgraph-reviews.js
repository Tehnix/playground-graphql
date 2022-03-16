const { ApolloServer, gql } = require("apollo-server");
const { buildSubgraphSchema } = require("@apollo/subgraph");
const { readFileSync } = require("fs");

/**
 * Load our schema definition from file.
 */
const typeDefs = gql(
  readFileSync("./reviews.subgraph.graphql").toString("utf-8")
);

/**
 * Simple static database of reviews.
 */
const reviews = [
  { id: "1", body: "Good stuff", author: { id: "1" }, product: { id: "1" } },
  { id: "2", body: "Wow!", author: { id: "2" }, product: { id: "2" } },
  {
    id: "3",
    body: "I did not expect this",
    author: { id: "1" },
    product: { id: "4" },
  },
  { id: "4", body: "Okay there...", author: { id: "3" }, product: { id: "3" } },
  { id: "5", body: "Must have!", author: { id: "4" }, product: { id: "4" } },
  {
    id: "6",
    body: "I'd definitely recommend",
    author: { id: "4" },
    product: { id: "5" },
  },
  {
    id: "7",
    body: "Meh, it was okay",
    author: { id: "5" },
    product: { id: "5" },
  },
];

/**
 * Look up a review by id.
 */
const fetchReviewById = (id) => {
  console.log(`Looking up review by id ${id}`);
  return reviews.find((review) => review.id === id);
};

/**
 * Define our resolvers.
 */
const resolvers = {
  Review: {
    /**
     * We add a reference resolver for the Review type. A reference resolver tells
     * the gateway how to fetch an entity by its @key fields:
     */
    __resolveReference(review) {
      return fetchReviewById(review.id);
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
    port: 4002,
  })
  .then(({ url }) => {
    console.log(`🚀 Reviews server ready at ${url}`);
  });
