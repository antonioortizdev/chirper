import { getConfig } from 'src/app/infrastructure/typeorm/config/TypeOrmDataSourceConfig'
import { DataSource } from 'typeorm'

export const typeOrmDataSourceFactory = async () => {
  const dataSource = new DataSource(getConfig())

  return dataSource.initialize()
}
