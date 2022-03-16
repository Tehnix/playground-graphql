const { ApolloServer, gql } = require("apollo-server");

/**
 * Define our schema inline.
 */
const typeDefs = gql`
  type Post {
    id: ID!
    title: String!
    description: String
  }

  type Query {
    posts: [Post!]!
  }
`;

/**
 * Simple static database of users.
 */
const posts = [
  { id: "1", title: "Post 1", description: "This is post 1" },
  { id: "2", title: "Post 2", description: "This is post 2" },
];

const fetchPosts = () => {
  return posts;
};

/**
 * Define our resolvers.
 */
const resolvers = {
  Query: {
    posts: () => {
      return fetchPosts();
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
