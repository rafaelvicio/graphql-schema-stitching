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
    user: (data, { input }, { controllers: { User } }) => {
      const user = User.find(input);
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
      const companys = Companys.find(loggedUser, input);
      return companys;
    },
    jobs: (data, args, { loggedUser, controllers: { Jobs } }) => {
      const jobs = Jobs.all(loggedUser);
      return jobs;
    },
    job: (data, { input }, { loggedUser, controllers: { Jobs } }) => {
      const job = Jobs.find(loggedUser, input);
      return job;
    },
  },
};
