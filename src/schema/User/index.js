import { gql } from 'apollo-server-express';

export const typeDef = gql`
  type User {
    id: ID!
    email: String
    password: String
    active: Boolean
    createdAt: Date
    updatedAt: Date
  }
`;

export const resolvers = {
  Job: {
    id: ({ _id }) => _id,
  },
};
