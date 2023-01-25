import { ChirpController } from '../controller/ChirpController'
import { CreateChirp } from '../../application/use-case/CreateChirp'
import { FindAllChirps } from '../../application/use-case/FindAllChirps'
import { JsonRepository } from '../persistence/json/repository/JsonChirpRepository'
import { Module } from '@nestjs/common'
import { Repository } from '../../../shared/domain/repository/interface/Repository'

const useCases = [FindAllChirps, CreateChirp]
const repositories = [
  {
    provide: Repository,
    useClass: JsonRepository,
  },
]

@Module({
  controllers: [ChirpController],
  providers: [...useCases, ...repositories],
})
export class ChirpModule {}
