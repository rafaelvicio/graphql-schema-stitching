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
    companys: (data, args, { controllers: { Companys } }) => {
      const companys = Companys.all();
      return companys;
    },
    company: (data, { input }, { controllers: { Companys } }) => {
      const companys = Companys.findById(input);
      return companys;
    },
    jobs: (data, args, { controllers: { Jobs } }) => {
      const jobs = Jobs.all();
      return jobs;
    },
    job: (data, { input }, { controllers: { Jobs } }) => {
      const job = Jobs.findById(input);
      return job;
    },
  },
};
