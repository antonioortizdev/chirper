import { DataSource } from 'typeorm'
import { getConfig } from '../config/typeorm.config'

export const typeOrmDataSourceFactory = async () => {
  const dataSource = new DataSource(getConfig())

  return dataSource.initialize()
}
