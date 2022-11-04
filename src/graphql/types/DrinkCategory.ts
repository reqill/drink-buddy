import { objectType, extendType } from 'nexus';
import { Drink } from './Drink';

export const DrinkCategory = objectType({
  name: 'DrinkCategory',
  definition(t) {
    t.string('id');
    t.string('createdAt');
    t.string('updatedAt');
    t.string('name');
    t.nullable.string('description');
    t.list.field('drinks', {
      type: Drink,
      async resolve(_parent, _args, ctx) {
        return await ctx.prisma.drinkCategory
          .findUnique({
            where: { id: _parent.id },
          })
          .drinks();
      },
    });
  },
});
export const DrinkCategoriesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('drinkCategories', {
      type: 'DrinkCategory',
      resolve(_parent, _args, ctx) {
        return ctx.prisma.drinkCategory.findMany();
      },
    });
  },
});
