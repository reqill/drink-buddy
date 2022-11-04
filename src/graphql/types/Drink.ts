import { objectType, extendType } from 'nexus';
import { DrinkCategory } from './DrinkCategory';
import { Ingredient } from './Ingredient';
import { User } from './User';

export const Drink = objectType({
  name: 'Drink',
  definition(t) {
    t.string('id');
    t.string('createdAt');
    t.string('updatedAt');
    t.string('name');
    t.float('alcoholContent');
    t.int('volume');
    t.list.field('ingredientList', {
      type: Ingredient,
      async resolve(_parent, _args, ctx) {
        return await ctx.prisma.drink
          .findUnique({
            where: { id: _parent.id },
          })
          .ingredientList();
      },
    });
    t.list.string('ingredientAmounts');
    t.nullable.string('shortDescription');
    t.nullable.string('additionalInfo');
    t.list.field('categories', {
      type: DrinkCategory,
      async resolve(_parent, _args, ctx) {
        return await ctx.prisma.drink
          .findUnique({
            where: { id: _parent.id },
          })
          .categories();
      },
    });
    t.field('author', {
      type: User,
      async resolve(_parent, _args, ctx) {
        return await ctx.prisma.drink
          .findUnique({
            where: { id: _parent.id },
          })
          .author();
      },
    });
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
