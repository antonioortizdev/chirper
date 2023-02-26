import { CreateChirp } from 'src/chirp/application/use-case/CreateChirp'
import { FindAllChirps } from 'src/chirp/application/use-case/FindAllChirps'
import { ChirpTypeOrmRepository } from 'src/chirp/infrastructure/persistence/typeorm/ChirpTypeOrmRepository'
import { ChirpTypeOrmEntity } from 'src/chirp/infrastructure/persistence/typeorm/entity/ChirpTypeOrmEntity'
import { DATA_SOURCE } from 'src/shared/domain/constants'
import { Repository } from 'src/shared/domain/repository/interface/Repository'
import { DataSource } from 'typeorm'

const useCases = [FindAllChirps, CreateChirp]
const repositories = [
  {
    provide: Repository,
    useFactory: (dataSource: DataSource) =>
      new ChirpTypeOrmRepository(dataSource.getRepository(ChirpTypeOrmEntity)),
    inject: [DATA_SOURCE],
  },
]

export const chirpProviders = [...useCases, ...repositories]
