import { Module } from '@nestjs/common'
import { ChirpModule } from '../../../chirp/infrastructure/nestjs/module/chirp.module'
import { config as dotEnvConfig } from 'dotenv'

dotEnvConfig()

@Module({
  imports: [ChirpModule],
})
export class AppModule {}
