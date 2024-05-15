import { PrismaClient } from '@prisma/client';
import { hashPassword } from 'src/shared/utils/hash';

const prisma = new PrismaClient();

async function main() {
  const password = await hashPassword('123123a');

  await prisma.user.upsert({
    where: { id: 1 },
    update: {},
    create: {
      email: 'admin@gmail.com',
      password: password,
      role: 'ADMIN',
      name: 'Admin',
      phone_number: '0987654321',
      address: 'Duy Tân, Cầu Giấy, Hà Nội',
    },
  });

  await prisma.user.upsert({
    where: { id: 2 },
    update: {},
    create: {
      email: 'user@gmail.com',
      password: password,
      role: 'USER',
      name: 'Nguyễn Văn A',
      phone_number: '0987654321',
      address: 'Duy Tân, Cầu Giấy, Hà Nội',
    },
  });

  console.log('seed success');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
