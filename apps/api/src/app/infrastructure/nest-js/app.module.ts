import { Module } from '@nestjs/common';
import { config as dotEnvConfig } from 'dotenv';
import { ChirpModule } from '../../../chirp/infrastructure/nest-js/chirp.module';

dotEnvConfig();

@Module({
	imports: [ChirpModule],
})
export class AppModule {}
