import { merge } from 'lodash';
import { makeExecutableSchema } from 'apollo-server-express';
import Date from './Scalars/ParseDate';

import { typeDef as QueryTypeDef, resolvers as QueryResolvers } from './Query';
import {
  typeDef as MutationTypeDef,
  resolvers as MutationResolvers,
} from './Mutation';

import { typeDef as UserTypeDef, resolvers as UserResolvers } from './User';
import {
  typeDef as CompanyTypeDef,
  resolvers as CompanyResolvers,
} from './Company';
import { typeDef as JobTypeDef, resolvers as JobResolvers } from './Job';

export const typeDefs = [
  QueryTypeDef,
  MutationTypeDef,
  UserTypeDef,
  CompanyTypeDef,
  JobTypeDef,
];

const OtherResolvers = {
  Date,
};

export const resolvers = merge(
  QueryResolvers,
  MutationResolvers,
  UserResolvers,
  CompanyResolvers,
  JobResolvers,
  OtherResolvers,
);

export default makeExecutableSchema({
  inheritResolversFromInterfaces: true,
  typeDefs,
  resolvers,
});
