import { Entity } from '../../../domain/entity/interface/Entity'
export interface Dto {
  toDomain(): Entity
}
