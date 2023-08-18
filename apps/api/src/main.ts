import 'reflect-metadata';
import { AppModule } from './app/infrastructure/nest-js/app.module';
import { NestFactory } from '@nestjs/core';
import { config as dotEnvConfig } from 'dotenv';

dotEnvConfig();

const bootstrap = async () => {
	const port = process.env.API_PORT || 3000;
	const app = await NestFactory.create(AppModule);
	await app.listen(port);

	// eslint-disable-next-line no-console
	console.log(`🚀 Chirper API server listening to http://localhost:${port}`);
};

bootstrap();
