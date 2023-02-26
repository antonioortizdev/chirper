import { DataSource, Repository } from 'typeorm'
import { DATA_SOURCE } from '../../../../shared/domain/constants'
import { CreateChirp } from '../../../application/use-case/CreateChirp'
import { FindAllChirps } from '../../../application/use-case/FindAllChirps'
import { ChirpTypeOrmRepository } from '../../persistence/typeorm/ChirpTypeOrmRepository'
import { ChirpTypeOrmEntity } from '../../persistence/typeorm/entity/ChirpTypeOrmEntity'

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
