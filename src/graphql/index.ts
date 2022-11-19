import { ApolloServer } from 'apollo-server-micro';
import { schema as baseSchema } from './schema';
import { applyMiddleware } from 'graphql-middleware';
import { resolvers } from './resolvers';
import Cors from 'micro-cors';
import { createContext } from './context';
import { permissions } from './auth';
const cors = Cors();
const schema = applyMiddleware(baseSchema, permissions);
const apolloServer = new ApolloServer({ schema, resolvers, context: createContext });

const startServer = apolloServer.start();

export default cors(async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }
  await startServer;

  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};
