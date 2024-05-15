import { NestFactory } from '@nestjs/core';
import { AppModule } from './models/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || '';

  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  // app.useGlobalGuards();

  await app.listen(PORT, () =>
    console.log(`Server is listening on port ${PORT}`),
  );
}
bootstrap();
