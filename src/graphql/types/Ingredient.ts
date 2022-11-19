import { objectType, nonNull, stringArg, nullable, floatArg, list } from 'nexus';
import { Drink } from './Drink';
import {
  GenericDeleteMutation,
  GenericListQuery,
  GenericRelationResolve,
  GenericSingleQuery,
  GeneticCreateQueryWithRelations,
} from './Generisc';
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
    t.list.field('drinks', GenericRelationResolve(Drink, 'ingredient', 'drinks'));
    t.list.field(
      'categories',
      GenericRelationResolve(IngredientCategory, 'ingredient', 'categories')
    );
  },
});
export const IngredientQuery = GenericListQuery('ingredients', 'Ingredient', 'ingredient');

export const SingleIngredientQuery = GenericSingleQuery('ingredient', 'Ingredient', 'ingredient');

export const IngredientAddMutation = GeneticCreateQueryWithRelations(
  'addIngredient',
  'Ingredient',
  {
    name: nonNull(stringArg()),
    description: nullable(stringArg()),
    alcoholContent: nonNull(floatArg()),
    categoriesId: list(stringArg()),
  },
  'ingredient',
  'categories',
  'id',
  'categoriesId'
);
export const IngredientDeleteMutation = GenericDeleteMutation(
  'addIngredient',
  'Ingredient',
  'ingredient'
);
