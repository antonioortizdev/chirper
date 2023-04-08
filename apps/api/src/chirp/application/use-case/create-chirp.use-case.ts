import { Inject, Injectable } from '@nestjs/common'
import { ChirpId } from '../../domain/value-object/chirp-id.value-object'
import { ChirpDto } from '../dto/chirp.dto'
import { Chirp } from '../../domain/Chirp'
import { ChirpAlreadyExistsError } from '../../domain/error/chirp-already-exists.error'
import { Repository } from '../../../shared/domain/repository'
import { UserId } from '../../../user/domain/value-object/user-id.value-object'
import { ChirpMessage } from '../../domain/value-object/chirp-message.value-object'

@Injectable()
export class CreateChirp {
  constructor(@Inject(Repository) private repository: Repository<Chirp>) {}

  async run(chirpDto: ChirpDto): Promise<void> {
    const chirp = new Chirp(
      new ChirpId(chirpDto.id),
      new UserId(chirpDto.author),
      new ChirpMessage(chirpDto.message),
    )
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
