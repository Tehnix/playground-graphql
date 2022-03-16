# Collaborative GraphQL and Advanced Usecases

Playground to play around with and show GraphQL usage.

## Getting Started 🚀

The project is structured in three parts:

- Frontend: `graphql-client/`
- GraphQL Server: `graphql-server/`
- Federated GraphQL Server: `graphql-federated/`

To get started, run `npm install` in each of the projects, and then:
- Start the frontend: `cd graphql-client && npm run dev`
- Start the GraphQL server: `cd graphql-server && npm run dev`

For the federated schema we need [rover](https://www.apollographql.com/docs/federation/v2/quickstart/setup#1-install-the-rover-cli) installed as well as its plugin:
```bash
$ curl -sSL https://rover.apollo.dev/nix/latest | sh
$ curl https://rover.apollo.dev/plugins/rover-fed2/nix/latest | sh
```

And then you can start the Federated GraphQL server: `cd graphql-federation && npm run dev`.

This will make Apollo Studio available at http://localhost:4000/ and the Next.js Frontend ready at http://localhost:3000/.


## Updating the Subgraph and Supergraph

After making adjustments to the subgraphs, we need to update the supergraph using the rover CLI:

```bash
$ rover fed2 supergraph compose --config ./supergraph-config.yaml > supergraph.graphql
```

## To Do

- [ ] Get Federation fully working (switch back to Federation v1 maybe?)
- [ ] Add examples of Batched HTTP requests by not triggering `queryDeduplication` (e.g. just different arguments)
- [ ] Add example using [graphql-deduplicator](https://github.com/gajus/graphql-deduplicator)
- [ ] Showcase different `fetchPolicy`'s for caching strategies by having buttons that trigger queries and showing which actually result in a network request


## Resources

- https://nextjs.org/docs
- https://www.apollographql.com/docs/apollo-server/getting-started
- https://www.apollographql.com/docs/federation/v2/
- https://www.apollographql.com/docs/router/quickstart
- https://xuorig.medium.com/the-graphql-dataloader-pattern-visualized-3064a00f319f
- https://www.apollographql.com/docs/react/data/queries/#supported-fetch-policies
- https://github.com/gajus/graphql-deduplicator
