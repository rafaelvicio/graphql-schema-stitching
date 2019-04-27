import { gql } from 'apollo-server-express';

export const typeDef = gql`
  type Query {
    user(input: findUserInput!): User
    login(input: loginUserInput!): UserPayload
    companys: [Company]
    company(input: findCompanyInput!): Company
    jobs: [Job]
    job(input: findJobInput!): Job
  }

  input findUserInput {
    _id: ID!
  }

  input loginUserInput {
    email: String!
    password: String!
  }

  input findCompanyInput {
    _id: ID!
  }

  input findJobInput {
    _id: ID!
  }

  scalar Date
`;

export const resolvers = {
  Query: {
    user: (root, { input }, { controllers: { User } }) => {
      const user = User.find(input);
      return user;
    },
    login: (root, { input }, { controllers: { Auth } }) => {
      const user = Auth.login(input);
      return user;
    },
    companys: (root, args, { loggedUser, controllers: { Companys } }) => {
      const companys = Companys.all(loggedUser);
      return companys;
    },
    company: (root, { input }, { loggedUser, controllers: { Companys } }) => {
      const companys = Companys.find(loggedUser, input);
      return companys;
    },
    jobs: (root, args, { loggedUser, controllers: { Jobs } }) => {
      const jobs = Jobs.all(loggedUser);
      return jobs;
    },
    job: (root, { input }, { loggedUser, controllers: { Jobs } }) => {
      const job = Jobs.find(loggedUser, input);
      return job;
    },
  },
};
