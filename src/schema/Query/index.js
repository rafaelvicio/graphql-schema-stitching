import { gql } from 'apollo-server-express';

export const typeDef = gql`
  type Query {
    companys: [Company]
    company(input: findCompanyInput!): Company
    jobs: [Job]
    job(input: findJobInput!): Job
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
    companys: (data, args, { loggedUser, controllers: { Companys } }) => {
      console.log('------>', loggedUser);
      const companys = Companys.all(loggedUser);
      return companys;
    },
    company: (data, { input }, { loggedUser, controllers: { Companys } }) => {
      const companys = Companys.findById(input);
      return companys;
    },
    jobs: (data, args, { loggedUser, controllers: { Jobs } }) => {
      const jobs = Jobs.all();
      return jobs;
    },
    job: (data, { input }, { loggedUser, controllers: { Jobs } }) => {
      const job = Jobs.findById(input);
      return job;
    },
  },
};
