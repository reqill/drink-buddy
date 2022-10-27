// /graphql/types/Link.ts
import { objectType, extendType } from 'nexus';

export const Drink = objectType({
  name: 'Drink',
  definition(t) {
    t.string('id');
    t.string('name');
  },
});

export const DrinksQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('drinks', {
      type: 'Drink',
      resolve(_parent, _args, ctx) {
        return ctx.prisma.drink.findMany();
      },
    });
  },
});
