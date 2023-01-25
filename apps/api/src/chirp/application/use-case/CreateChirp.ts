import { Inject, Injectable } from '@nestjs/common'
import { ChirpId } from './../../domain/value-object/ChirpId'
import { ChirpDto } from '../dto/ChirpDto'
import { Chirp } from '../../domain/Chirp'
import { ChirpAlreadyExistsError } from '../../domain/error/ChirpAlreadyExistsError'
import { Repository } from '../../../shared/domain/repository/interface/Repository'

@Injectable()
export class CreateChirp {
  constructor(@Inject(Repository) private repository: Repository<Chirp>) {}

  async run(chirpDto: ChirpDto): Promise<void> {
    const chirp = chirpDto.toDomain()
    await this.ensureChirpDoesNotExist(chirp.id)
    this.repository.save(chirp)
  }

  private async ensureChirpDoesNotExist(id: ChirpId): Promise<void> {
    const foundChirps = await this.repository.find({ id: String(id) })
    if (foundChirps.length) {
      throw new ChirpAlreadyExistsError(id)
    }
  }
}
