import { objectType, extendType, nonNull, stringArg } from 'nexus';
import { Drink } from './Drink';
import { GenericListQuery, GenericRelationResolve, GenericSingleQuery } from './Generisc';

export const User = objectType({
  name: 'User',
  definition(t) {
    t.string('id');
    t.string('createdAt');
    t.string('updatedAt');
    t.string('username');
    t.string('email');
    t.list.field('drinks', GenericRelationResolve(Drink, 'user', 'drinks'));
  },
});
export const UserQuery = GenericListQuery('users', 'User', 'user');

export const SingleUserQuery = GenericSingleQuery('user', 'User', 'user');
