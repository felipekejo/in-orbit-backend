import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
async function seed() {
  await prisma.goal.deleteMany({})

  await prisma.goal.createMany({
    data: [
      {
        title: 'Lavar louça',
        desiredWeeklyFrequency: 1,
      },
      {
        title: 'Lavar Roupa',
        desiredWeeklyFrequency: 3,
      },
      {
        title: 'Academia',
        desiredWeeklyFrequency: 5,
      },
      {
        title: 'Lavar Carro',
        desiredWeeklyFrequency: 1,
      },
    ],
  })

  const goalCompletion = await prisma.goal.create({
    data: {
      title: 'Lavar Varanda',
      desiredWeeklyFrequency: 3,
    },
  })

  await prisma.goalCompletion.create({
    data: {
      goalId: goalCompletion.id,
    },
  })
}

seed()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
