import { gql } from 'apollo-server-express';

export const typeDef = gql`
  type Company {
    id: ID!
    name: String
    description: String
    city: String
    site: String
    admin: String
    active: Boolean
    createdBy: String
    createdAt: Date
    updatedAt: Date
  }
`;

export const resolvers = {
  Company: {
    id: ({ _id }) => _id,
  },
};
