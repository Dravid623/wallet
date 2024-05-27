import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    const alice = await prisma.user.upsert({
        where: { number: '9999999999' },
        update: {},
        create: {
            number: '9999999999',
            password: '$2b$10$pzGkbOzQ9aKWh4WtfKNo0Oeeu/Gc5NdQ58II2PjMC8tf.RL9ll/N6',
            name: 'alice',
            OnRampTransaction: {
                create: {
                    startTime: new Date(),
                    status: "Success",
                    amount: 20000,
                    token: "122",
                    provider: "HDFC Bank",
                },
            },
        },
    })
    const bob = await prisma.user.upsert({
        where: { number: '9999999998' },
        update: {},
        create: {
            number: '9999999998',
            password: '$2b$10$3Vi66Bn3H7o.mgSk8yNo8uQKoOm7TZt.HUttku1yCWtsjKUHlKY6W',
            name: 'bob',
            OnRampTransaction: {
                create: {
                    startTime: new Date(),
                    status: "Failure",
                    amount: 2000,
                    token: "123",
                    provider: "HDFC Bank",
                },
            },
        },
    })
    console.log({ alice, bob })
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })