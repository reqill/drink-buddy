import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.ingredientCategory.createMany({
    data: [
      {
        name: 'Sweet',
        description: 'Perfect for those who like candy',
      },
      {
        name: 'Sour',
        description: 'Ew... tastes like lemon',
      },
      {
        name: 'Bitter',
      },
    ],
  });
  await prisma.drinkCategory.createMany({
    data: [
      {
        name: 'Clasic',
        description: 'All the iconic ones',
      },
      {
        name: 'Weak',
        description: 'For those who like to drink a lot with little effect',
      },
      {
        name: 'Bitter',
      },
    ],
  });
  await prisma.ingredient.create({
    data: {
      name: 'Vodka',
      alcoholContent: 0.4,
      categories: { connect: { name: 'Bitter' } },
    },
  });
  await prisma.ingredient.create({
    data: {
      name: 'Orange juice',
      alcoholContent: 0.0,
      categories: { connect: { name: 'Sweet' } },
    },
  });
  await prisma.ingredient.create({
    data: {
      name: 'Apple juice',
      alcoholContent: 0.0,
      categories: { connect: { name: 'Sweet' } },
    },
  });
  await prisma.ingredient.create({
    data: {
      name: 'Lemon liquer',
      alcoholContent: 0.15,
      categories: { connect: { name: 'Sour' } },
    },
  });
  await prisma.ingredient.create({
    data: {
      name: 'Jagermeister',
      alcoholContent: 0.375,
      categories: { connect: { name: 'Bitter' } },
    },
  });
  await prisma.ingredient.create({
    data: {
      name: 'Red bull',
      alcoholContent: 0.0,
      categories: { connect: { name: 'Sweet' } },
    },
  });
  await prisma.user.createMany({
    data: [
      {
        username: 'Adam The Connoisseur',
        email: 'TheAdam@google.com',
        someFieldUsedForExternalAuth: 'Trust me Bro',
      },
      {
        username: 'Nicolas The Normie',
        email: 'randomguy@google.com',
        someFieldUsedForExternalAuth: 'i do not yet have my id',
      },
    ],
  });
  await prisma.drink.create({
    data: {
      name: 'JagerBomb',
      alcoholContent: 0.1,
      volume: 400,
      ingredientList: { connect: [{ name: 'Jagermeister' }, { name: 'Red bull' }] },
      ingredientAmounts: ['100 ml', '300 ml'],
      shortDescription: 'The one and only energizing drink',
      categories: { connect: [{ name: 'Clasic' }, { name: 'Weak' }] },
      author: { connect: { username: 'Adam The Connoisseur' } },
    },
  });
  await prisma.drink.create({
    data: {
      name: 'Apple and orange juice',
      alcoholContent: 0.0,
      volume: 500,
      ingredientList: { connect: [{ name: 'Apple juice' }, { name: 'Orange juice' }] },
      ingredientAmounts: ['300 ml', '200 ml'],
      shortDescription: 'Perfect fot sunny days',
      additionalInfo: 'My favorite drink',
      categories: { connect: { name: 'Clasic' } },
      author: { connect: { username: 'Nicolas The Normie' } },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
