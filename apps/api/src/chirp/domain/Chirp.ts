import { ChirpId } from './value-object/chirp-id.value-object'
import { ChirpMessage } from './value-object/chirp-message.value-object'
import { Entity } from '../../shared/domain/entity'
import { UserId } from '../../user/domain/value-object/user-id.value-object'

export class Chirp implements Entity {
  constructor(
    public id: ChirpId,
    public author: UserId,
    public message: ChirpMessage,
  ) {}

  toPrimitives() {
    return {
      id: String(this.id),
      author: String(this.author),
      message: String(this.message),
    }
  }
}
