import { Module } from '@nestjs/common'
import { DatabaseModule } from '../../../../app/infrastructure/nestjs/database.module'
import { ChirpController } from '../controller/chirp.controller'
import { chirpProviders } from '../provider/chirp.provider'

@Module({
  imports: [DatabaseModule],
  controllers: [ChirpController],
  providers: chirpProviders,
})
export class ChirpModule {}
