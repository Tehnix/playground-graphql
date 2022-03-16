const { ApolloServer, gql } = require("apollo-server");
const DataLoader = require("dataloader");
const { readFileSync } = require("fs");

/**
 * Load our schema definition from file.
 */
const typeDefs = gql(readFileSync("./schema.graphql").toString("utf-8"));

/**
 * Simple static database of users.
 */
const users = [
  { id: "1", name: "Bret" },
  { id: "2", name: "Bob" },
];

/**
 * Simple static database of posts.
 */
const posts = [
  { id: "1", title: "Post 1", description: "This is post 1", author: "1" },
  { id: "2", title: "Post 2", description: "This is post 2", author: "1" },
  { id: "3", title: "Post 3", description: "This is post 3", author: "2" },
  { id: "4", title: "Post 4", description: "This is post 4", author: "2" },
];

const fetchPosts = () => {
  return posts;
};

/**
 * Set up the dataloader for users.
 */
const batchGetUserById = async (ids) => {
  console.log("Called once per tick:", ids);
  // Look up each user in the "database".
  return ids.map((id) => users.find((user) => user.id === id));
};
const usersLoader = new DataLoader(batchGetUserById);

/**
 * Define our resolvers.
 */
const resolvers = {
  Query: {
    posts: () => {
      return fetchPosts();
    },
  },
  Post: {
    author: (post) => {
      return usersLoader.load(post.author);
    },
  },
};

/**
 * Configure the Apollo server and tell it to build a subgraph using our schema
 * definition and resolvers.
 */
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

/**
 * Finally, start the server and set it to listen on a port.
 */
server
  .listen({
    port: 4004,
  })
  .then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
