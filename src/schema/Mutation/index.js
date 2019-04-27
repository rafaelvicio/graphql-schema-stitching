import { gql } from 'apollo-server-express';

export const typeDef = gql`
  type Mutation {
    register(input: RegisterInput!): UserPayload
    createCompany(input: createCompanyInput!): Company
    editCompany(input: editCompanyInput!): Company
    createJob(input: createJobInput!): Job
  }

  input RegisterInput {
    email: String!
    password: String!
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
    register: (data, { input }, { controllers: { Auth } }) =>
      Auth.register(input),
    createCompany: (
      data,
      { input },
      { loggedUser, controllers: { Companys } },
    ) => Companys.create(loggedUser, input),
    editCompany: (data, { input }, { loggedUser, controllers: { Companys } }) =>
      Companys.edit(loggedUser, input),
    createJob: (data, { input }, { loggedUser, controllers: { Jobs } }) =>
      Jobs.create(loggedUser, input),
  },
};
