import { gql } from 'apollo-server-express';

export const typeDef = gql`
  type Query {
    user(input: findUserInput!): User
    login(input: loginUserInput!): User
    companys: [Company]
    company(input: findCompanyInput!): Company
    jobs: [Job]
    job(input: findJobInput!): Job
  }

  input findUserInput {
    id: ID!
  }

  input loginUserInput {
    id: ID!
  }

  input findCompanyInput {
    id: ID!
  }

  input findJobInput {
    id: ID!
  }

  scalar Date
`;

export const resolvers = {
  Query: {
    user: (data, { input }, { controllers: { Auth } }) => {
      const user = Auth.find(input);
      return user;
    },
    login: (data, { input }, { controllers: { Auth } }) => {
      const user = Auth.login(input);
      return user;
    },
    companys: (data, args, { loggedUser, controllers: { Companys } }) => {
      const companys = Companys.all(loggedUser);
      return companys;
    },
    company: (data, { input }, { loggedUser, controllers: { Companys } }) => {
      const companys = Companys.findById(loggedUser, input);
      return companys;
    },
    jobs: (data, args, { loggedUser, controllers: { Jobs } }) => {
      const jobs = Jobs.all(loggedUser);
      return jobs;
    },
    job: (data, { input }, { loggedUser, controllers: { Jobs } }) => {
      const job = Jobs.findById(loggedUser, input);
      return job;
    },
  },
};
