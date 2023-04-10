import 'reflect-metadata'
import { AppModule } from './app/infrastructure/nestjs/app.module'
import { NestFactory } from '@nestjs/core'
import { config as dotEnvConfig } from 'dotenv'

dotEnvConfig()

const bootstrap = async () => {
  const port = process.env.API_PORT || 3000
  const app = await NestFactory.create(AppModule)
  await app.listen(port)
  console.log(`🚀 Server listening to http://localhost:${port}`)
}

bootstrap()
