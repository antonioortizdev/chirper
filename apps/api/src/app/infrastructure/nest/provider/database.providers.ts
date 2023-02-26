import { DATA_SOURCE } from '../../../../shared/domain/constants'
import { typeOrmDataSourceFactory } from '../../typeorm/factory/TypeOrmDataSourceFactory'

export const databaseProviders = [
  {
    provide: DATA_SOURCE,
    useFactory: typeOrmDataSourceFactory,
  },
]
