import { objectType, extendType } from 'nexus';
import { Drink } from './Drink';

export const User = objectType({
  name: 'User',
  definition(t) {
    t.string('id');
    t.string('createdAt');
    t.string('updatedAt');
    t.string('username');
    t.string('email');
    t.list.field('drinks', {
      type: Drink,
      async resolve(_parent, _args, ctx) {
        return await ctx.prisma.user
          .findUnique({
            where: { id: _parent.id },
          })
          .drinks();
      },
    });
  },
});
export const UserQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('users', {
      type: 'User',
      resolve(_parent, _args, ctx) {
        return ctx.prisma.user.findMany();
      },
    });
  },
});
