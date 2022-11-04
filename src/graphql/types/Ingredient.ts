import { objectType, extendType } from 'nexus';
import { Drink } from './Drink';
import { IngredientCategory } from './IngredientCatagory';

export const Ingredient = objectType({
  name: 'Ingredient',
  definition(t) {
    t.string('id');
    t.string('createdAt');
    t.string('updatedAt');
    t.float('alcoholContent');
    t.nullable.string('description');
    t.string('name');
    t.list.field('drinks', {
      type: Drink,
      async resolve(_parent, _args, ctx) {
        return await ctx.prisma.ingredient
          .findUnique({
            where: { id: _parent.id },
          })
          .drinks();
      },
    });
    t.list.field('categories', {
      type: IngredientCategory,
      async resolve(_parent, _args, ctx) {
        return await ctx.prisma.ingredient
          .findUnique({
            where: { id: _parent.id },
          })
          .categories();
      },
    });
  },
});
export const IngredientQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('ingredients', {
      type: 'Ingredient',
      resolve(_parent, _args, ctx) {
        return ctx.prisma.ingredient.findMany();
      },
    });
  },
});
