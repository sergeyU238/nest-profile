import { PrismaClient } from '../../src/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import dotenv from 'dotenv';
import { env } from 'prisma/config';
import { createProfile } from './create-profile';

dotenv.config({
  path: 'libs/database/.env',
});

const adapter = new PrismaPg({
  connectionString: env('DATABASE_URL'),
});

const prisma = new PrismaClient({
  adapter,
});

dotenv.config({
  path: 'libs/database/.env',
});

async function main() {
  await createProfile(prisma);
}

main()
  .then(() => {
    console.log('All seeds completed');
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
