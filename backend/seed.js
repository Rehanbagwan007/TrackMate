
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding ...');

  const departments = [
    { name: 'Computer Science' },
    { name: 'Electrical Engineering' },
    { name: 'Mechanical Engineering' },
    { name: 'Civil Engineering' },
    { name: 'Information Technology' },
  ];

  for (const department of departments) {
    await prisma.department.create({
      data: department,
    });
  }

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
