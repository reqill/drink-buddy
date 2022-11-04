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
      alcoholContent: 40.0,
      categories: { connect: { name: 'Bitter' } },
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
