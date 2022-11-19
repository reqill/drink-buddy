import { objectType, extendType, nonNull, stringArg } from 'nexus';
import { GenericListQuery, GenericRelationResolve, GenericSingleQuery } from './Generisc';
import { Ingredient } from './Ingredient';
export const IngredientCategory = objectType({
  name: 'IngredientCategory',
  definition(t) {
    t.string('id');
    t.string('createdAt');
    t.string('updatedAt');
    t.string('name');
    t.nullable.string('description');
    t.list.field(
      'ingredients',
      GenericRelationResolve(Ingredient, 'ingredientCategories', 'ingredients')
    );
  },
});

export const IngredientCategoriesQuery = GenericListQuery(
  'ingredientCategories',
  'IngredientCategory',
  'ingredientCategory'
);

export const SingleIngredientCategoryQuery = GenericSingleQuery(
  'ingredientCategory',
  'IngredientCategory',
  'ingredientCategory'
);
