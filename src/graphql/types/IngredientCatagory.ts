import { objectType, extendType } from 'nexus';
import { Ingredient } from './Ingredient';
export const IngredientCategory = objectType({
  name: 'IngredientCategory',
  definition(t) {
    t.string('id');
    t.string('createdAt');
    t.string('updatedAt');
    t.string('name');
    t.nullable.string('description');
    t.list.field('ingredients', {
      type: Ingredient,
      async resolve(_parent, _args, ctx) {
        return await ctx.prisma.ingredientCategory
          .findUnique({
            where: { id: _parent.id },
          })
          .ingredients();
      },
    });
  },
});
export const IngredientCategoriesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('ingredientCategories', {
      type: 'IngredientCategory',
      resolve(_parent, _args, ctx) {
        return ctx.prisma.ingredientCategory.findMany();
      },
    });
  },
});
