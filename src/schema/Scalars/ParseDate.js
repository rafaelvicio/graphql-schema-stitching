import { Kind } from 'graphql/language';
import { GraphQLScalarType } from 'graphql';

const parseUTC = date =>
  new Date(date.getTime() + date.getTimezoneOffset() * 60000);

export default new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  parseValue(value) {
    return parseUTC(new Date(value));
  },
  serialize(value) {
    return value.getTime();
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      const date = new Date(parseInt(ast.value, 10));
      return parseUTC(date);
    }

    if (ast.kind === Kind.STRING) {
      const date = new Date(ast.value);
      return parseUTC(date);
    }
    return null;
  },
});
