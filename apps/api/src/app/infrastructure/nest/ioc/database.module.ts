import { Module } from '@nestjs/common'
import { DATA_SOURCE } from '../../../../shared/domain/constants'
import { databaseProviders } from '../provider/database.providers'

@Module({
  providers: databaseProviders,
  exports: [DATA_SOURCE],
})
export class DatabaseModule {}
