import { ChirpId } from './value-object/ChirpId'
import { ChirpMessage } from './value-object/ChirpMessage'
import { Entity } from '../../shared/domain/entity/interface/Entity'
import { UserId } from '../../user/domain/value-object/UserId'

export class Chirp implements Entity {
  constructor(
    public id: ChirpId,
    public author: UserId,
    public message: ChirpMessage
  ) {}

  toPrimitives() {
    return {
      id: String(this.id),
      author: String(this.author),
      message: String(this.message),
    }
  }
}
