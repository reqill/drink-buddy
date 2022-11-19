import { allow, shield } from 'graphql-shield';
import { isLogedIn } from './rules/isLogedIn';
export const permissions = shield(
  {
    Query: {
      '*': allow,
    },
    Mutation: {
      addIngredient: allow,
      '*': allow,
    },
  },
  {
    debug: true,
  }
);

module.exports = {
  permissions,
};
