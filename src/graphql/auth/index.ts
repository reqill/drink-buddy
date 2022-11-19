import { allow, shield } from 'graphql-shield';
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
