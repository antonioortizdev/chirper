import { DataSource } from 'typeorm'

export const typeOrmDataSourceFactory = async () => {
  const dataSource = new DataSource({
    type: 'mysql',
    host: process.env.MYSQL_HOST || 'localhost',
    port: +Number(process.env.MYSQL_PORT) || 3306,
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'root',
    database: process.env.MYSQL_DATABASE || 'test',
    entities: [__dirname + '/../**/*TypeOrmEntity{.ts}'],
    synchronize: true,
  })

  return dataSource.initialize()
}
