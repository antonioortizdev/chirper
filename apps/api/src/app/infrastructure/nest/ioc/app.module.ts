import { ChirpModule } from '../../../../chirp/infrastructure/ioc/ChirpModule'
import { Module } from '@nestjs/common'
import { config as dotenvConfig } from 'dotenv'

dotenvConfig()

@Module({
  imports: [ChirpModule],
})
export class AppModule {}
