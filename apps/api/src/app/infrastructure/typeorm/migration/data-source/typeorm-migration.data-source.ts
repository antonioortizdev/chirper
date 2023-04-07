import { getConfig } from '../../config/typeorm.config'
import { DataSource } from 'typeorm'

const dataSource = new DataSource(getConfig())
dataSource.initialize()
export default dataSource
