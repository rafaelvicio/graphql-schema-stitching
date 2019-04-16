import { merge } from 'lodash';
import { makeExecutableSchema } from 'apollo-server-express';

import { typeDef as QueryTypeDef, resolvers as QueryResolvers } from './Query';
import {
  typeDef as MutationTypeDef,
  resolvers as MutationResolvers,
} from './Mutation';

import {
  typeDef as CompanyTypeDef,
  resolvers as CompanyResolvers,
} from './Company';
import { typeDef as JobTypeDef, resolvers as JobResolvers } from './Job';

export const typeDefs = [
  QueryTypeDef,
  MutationTypeDef,
  CompanyTypeDef,
  JobTypeDef,
];

export const resolvers = merge(
  QueryResolvers,
  MutationResolvers,
  CompanyResolvers,
  JobResolvers,
);

export default makeExecutableSchema({
  inheritResolversFromInterfaces: true,
  typeDefs,
  resolvers,
});
