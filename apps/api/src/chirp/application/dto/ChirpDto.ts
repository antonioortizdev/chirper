import { UserId } from '../../../user/domain/value-object/UserId'
import { Chirp } from '../../domain/Chirp'
import { Dto } from '../../../shared/application/dto/interface/Dto'
import { ChirpId } from '../../domain/value-object/ChirpId'
import { ChirpMessage } from '../../domain/value-object/ChirpMessage'

export class ChirpDto implements Dto {
  constructor(
    readonly id: string,
    readonly author: string,
    readonly message: string
  ) {}

  toDomain(): Chirp {
    return new Chirp(
      new ChirpId(this.id),
      new UserId(this.author),
      new ChirpMessage(this.message)
    )
  }
}
