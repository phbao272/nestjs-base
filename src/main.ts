import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './models/app.module';
import {
  AllExceptionsFilter,
  ZodValidationExceptionFilter,
} from '@shared/filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || '';

  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  const httpAdapterHost = app.get(HttpAdapterHost);

  app.useGlobalFilters(
    new AllExceptionsFilter(httpAdapterHost),
    new ZodValidationExceptionFilter(httpAdapterHost),
  );
  // app.useGlobalGuards();

  await app.listen(PORT, () =>
    console.log(`Server is listening on port ${PORT}`),
  );
}
bootstrap();
