import { gql } from 'apollo-server-express';

export const typeDef = gql`
  type Application {
    id: ID!
    user: User
    job: Job
    company: Company
    status: Boolean
    createdAt: Date
    updatedAt: Date
  }
`;

export const resolvers = {
  Application: {
    id: ({ _id }) => _id,
  },
};
