import { Module } from '@nestjs/common'
import { DatabaseModule } from '../../../../app/infrastructure/nest/ioc/database.module'
import { ChirpController } from '../controller/ChirpController'
import { chirpProviders } from '../provider/ChirpProviders'

@Module({
  imports: [DatabaseModule],
  controllers: [ChirpController],
  providers: chirpProviders,
})
export class ChirpModule {}
