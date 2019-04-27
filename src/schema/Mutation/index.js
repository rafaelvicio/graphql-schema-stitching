import { gql } from 'apollo-server-express';

export const typeDef = gql`
  type Mutation {
    createUser(input: createUserInput!): UserPayload
    createCompany(input: createCompanyInput!): Company
    editCompany(input: editCompanyInput!): Company
    createJob(input: createJobInput!): Job
  }

  input createUserInput {
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
    createUser: (root, { input }, { controllers: { Auth } }) => {
      Auth.create(input);
    },
    createCompany: (
      root,
      { input },
      { loggedUser, controllers: { Companys } },
    ) => Companys.create(loggedUser, input),
    editCompany: (root, { input }, { loggedUser, controllers: { Companys } }) =>
      Companys.edit(loggedUser, input),
    createJob: (root, { input }, { loggedUser, controllers: { Jobs } }) =>
      Jobs.create(loggedUser, input),
  },
};
