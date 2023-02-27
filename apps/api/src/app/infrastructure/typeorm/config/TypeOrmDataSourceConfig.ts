import { DataSourceOptions } from 'typeorm'
import { config as dotenvConfig } from 'dotenv'

dotenvConfig()

export function getConfig() {
  return {
    type: 'mysql',
    host: process.env.MYSQL_HOST || 'localhost',
    port: +Number(process.env.MYSQL_PORT) || 3306,
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'root',
    database: process.env.MYSQL_DATABASE || 'test',
    migrations: [__dirname + '/../migration/*.ts'],
    entities: [__dirname + '/**/*TypeOrmEntity.{ts|js}'],
    synchronize: true,
  } satisfies DataSourceOptions
}
