import { objectType, extendType, nonNull, stringArg } from 'nexus';
import { DrinkCategory } from './DrinkCategory';
import { GenericListQuery, GenericRelationResolve, GenericSingleQuery } from './Generisc';
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
    t.list.field('ingredientList', GenericRelationResolve(Ingredient, 'drink', 'ingredientList'));
    t.list.string('ingredientAmounts');
    t.nullable.string('shortDescription');
    t.nullable.string('additionalInfo');
    t.list.field('categories', GenericRelationResolve(DrinkCategory, 'drink', 'categories'));
    t.field('author', GenericRelationResolve(User, 'drink', 'author'));
  },
});

export const DrinksQuery = GenericListQuery('drinks', 'Drink', 'drink');
export const SingleDrinkQuery = GenericSingleQuery('drink', 'Drink', 'drink');
