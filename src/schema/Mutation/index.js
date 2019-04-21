import { gql } from 'apollo-server-express';

export const typeDef = gql`
  type Mutation {
    createCompany(input: createCompanyInput!): Company
    editCompany(input: editCompanyInput!): Company
    createJob(input: createJobInput!): Job
  }

  input createCompanyInput {
    name: String!
    description: String!
    city: String!
    site: String!
    active: Boolean
  }

  input editCompanyInput {
    id: String!
    name: String
    description: String
    city: String
    site: String
    active: Boolean
  }

  input createJobInput {
    title: String
    description: String
    salary: Float
    remote: Boolean
    company: String
    active: Boolean
  }
`;

export const resolvers = {
  Mutation: {
    createCompany: (root, { input }, { controllers: { Companys } }) =>
      Companys.create(input),
    editCompany: (root, { input }, { controllers: { Companys } }) =>
      Companys.edit(input),
    createJob: (root, { input }, { controllers: { Jobs } }) =>
      Jobs.create(input),
  },
};
