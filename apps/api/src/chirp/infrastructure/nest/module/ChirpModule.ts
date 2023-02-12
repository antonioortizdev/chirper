import { ChirpController } from '../../controller/ChirpController'
import { CreateChirp } from '../../../application/use-case/CreateChirp'
import { FindAllChirps } from '../../../application/use-case/FindAllChirps'
import { JsonChirpRepository } from '../../persistence/json/repository/JsonChirpRepository'
import { Module } from '@nestjs/common'
import { Repository } from '../../../../shared/domain/repository/interface/Repository'
import { chirpProviders } from '../provider/ChirpProviders'

@Module({
  controllers: [ChirpController],
  providers: chirpProviders,
})
export class ChirpModule {}
