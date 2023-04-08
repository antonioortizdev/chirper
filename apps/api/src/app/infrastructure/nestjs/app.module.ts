import { Module } from '@nestjs/common'
import { ChirpModule } from '../../../chirp/infrastructure/nestjs/module/chirp.module'
import { config as dotenvConfig } from 'dotenv'

dotenvConfig()

@Module({
  imports: [ChirpModule],
})
export class AppModule {}
