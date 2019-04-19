import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import schema from './schema';

import JobsController from './controllers/JobsControllers';
import CompanysController from './controllers/CompanysControllers';

const playground = {
  settings: {
    'editor.cursorShape': 'line',
  },
};

class Server {
  constructor() {
    this.express = express();
    this.express.use(helmet());
    this.express.use(cors());
    this.createServerApollo();
  }

  async createServerApollo() {
    const apolloServer = new ApolloServer({
      // eslint-disable-next-line no-unused-vars
      context: async ({ req }) => this.createContext(req),
      schema,
      playground,
      uploads: false,
      introspection: true,
    });

    apolloServer.applyMiddleware({ app: this.express, path: '/' });
  }

  async createContext() {
    return {
      loggedUser: true,
      controllers: {
        Jobs: new JobsController(),
        Companys: new CompanysController(),
      },
    };
  }
}

export default new Server();
