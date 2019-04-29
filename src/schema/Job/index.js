import { gql } from 'apollo-server-express';

export const typeDef = gql`
  type Job {
    id: ID!
    title: String
    description: String
    salary: Float
    remote: Boolean
    company: Company!
    active: Boolean
    createdBy: String
    createdAt: Date
    updatedAt: Date
  }
`;

export const resolvers = {
  Job: {
    id: ({ _id }) => _id,
  },
};
