import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'

import { env } from '@/env'

const adapter = new PrismaPg({ connectionString: env.DATABASE_URL })

const prismaClientSingleton = () => {
	return new PrismaClient({ adapter }).$extends(withAccelerate())
}

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>

const globalForPrisma = globalThis as unknown as {
	prisma: PrismaClientSingleton | undefined
}

export const db = globalForPrisma.prisma ?? prismaClientSingleton()

if (env.NODE_ENV !== 'production') globalForPrisma.prisma = db
export default db
