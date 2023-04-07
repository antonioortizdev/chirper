import { Entity } from '../../shared/domain/entity'
import { UserEmail } from './value-object/user-email.value-object'
import { UserId } from './value-object/user-id.value-object'

export class User implements Entity {
  constructor(readonly id: UserId, readonly email: UserEmail) {}

  toPrimitives(): object {
    return {
      id: String(this.id),
      email: String(this.email),
    }
  }
}
