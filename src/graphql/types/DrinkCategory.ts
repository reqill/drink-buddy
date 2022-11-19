import { objectType, extendType, stringArg, nonNull, nullable } from 'nexus';
import { Drink } from './Drink';
import {
  GenericListQuery,
  GenericRelationResolve,
  GenericSingleQuery,
  GeneticCreateQuery,
} from './Generisc';

export const DrinkCategory = objectType({
  name: 'DrinkCategory',
  definition(t) {
    t.string('id');
    t.string('createdAt');
    t.string('updatedAt');
    t.string('name');
    t.nullable.string('description');
    t.list.field('drinks', GenericRelationResolve(Drink, 'drinkCategory', 'drinks'));
  },
});
export const DrinkCategoriesQuery = GenericListQuery(
  'drinkCategories',
  'DrinkCategory',
  'drinkCategory'
);

export const SingleDrinkCategoryQuery = GenericSingleQuery(
  'drinkCategory',
  'DrinkCategory',
  'drinkCategory'
);

export const DrinkCategoryMutation = GeneticCreateQuery(
  'addDrinkCategory',
  'DrinkCategory',
  {
    name: nonNull(stringArg()),
    description: nullable(stringArg()),
  },
  'drinkCategory'
);
