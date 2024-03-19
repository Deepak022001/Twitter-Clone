import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
export async function initServer() {
  const app = express();
  app.use(express.json());
  const graphqlServer = new ApolloServer({
    typeDefs: `
      type Query {
        sayHello: String
      }
    `,
    resolvers: {
      Query: {
        sayHello: () => `Hello from GraphQL server`,
      },
    },
  });
  await graphqlServer.start();
  app.use('/graphql', expressMiddleware(graphqlServer));

  return app;
}

initServer().then((app) => {
  app.listen({ port: 4000 }, () =>
    console.log(`Server ready at http://localhost:4000/graphql`)
  );
});
