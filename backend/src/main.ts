import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envConfig } from './config/env.config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule);

  // Enable Cross-Origin Resource Sharing for frontend calls
  app.enableCors();

  // Set global prefix to prevent API namespace collisions
  app.setGlobalPrefix('api');

  const port = envConfig.port;
  await app.listen(port);
  logger.log(`LinearNexus Backend initialized on port: ${port}`);
  logger.log(`Health Check endpoint ready at: http://localhost:${port}/api/health`);
}
bootstrap();
