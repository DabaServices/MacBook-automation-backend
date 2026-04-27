import { NestFactory } from '@nestjs/core';
import { AppModule } from './appModule.module';
import * as dotenv from 'dotenv';
import * as bodyParser from 'body-parser';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { globalAgent } from 'node:https';

dotenv.config();

globalAgent.options.ca = process.env.CERIFICATE_CA;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS - allow frontend requests
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: '*',
  });

  // Body parser
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('API endpoints')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(3002);
}

void bootstrap();
