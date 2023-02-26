import { getConfig } from '../../config/TypeOrmDataSourceConfig'
import { DataSource } from 'typeorm'

const dataSource = new DataSource(getConfig())
dataSource.initialize()
export default dataSource
