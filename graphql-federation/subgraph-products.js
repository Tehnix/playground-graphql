const { ApolloServer, gql } = require("apollo-server");
const { buildSubgraphSchema } = require("@apollo/subgraph");
const { readFileSync } = require("fs");

/**
 * Load our schema definition from file.
 */
const typeDefs = gql(
  readFileSync("./products.subgraph.graphql").toString("utf-8")
);

/**
 * Simple static database of products.
 */
const products = [
  { id: "1", name: "Phone", price: "100 DKK" },
  { id: "2", name: "TV", price: "30 DKK" },
  { id: "3", name: "Car", price: "200 DKK" },
  { id: "4", name: "House", price: "150 DKK" },
  { id: "5", name: "Boxes", price: "600 DKK" },
];

/**
 * Look up a product by id.
 */
const fetchProductById = (id) => {
  console.log(`Looking up product by id ${id}`);
  return products.find((product) => product.id === id);
};

/**
 * Define our resolvers.
 */
const resolvers = {
  Query: {
    products: () => {
      return products;
    },
    product: (_, { id }) => {
      return fetchProductById(id);
    },
  },
  Product: {
    /**
     * We add a reference resolver for the Product type. A reference resolver tells
     * the gateway how to fetch an entity by its @key fields:
     */
    __resolveReference(product) {
      return fetchProductById(product.id);
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
    port: 4003,
  })
  .then(({ url }) => {
    console.log(`🚀 Products server ready at ${url}`);
  });
