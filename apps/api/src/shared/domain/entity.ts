import { Uuid } from './value-object/uuid.value-object'

export interface Entity {
  readonly id: Uuid
  toPrimitives()
}
