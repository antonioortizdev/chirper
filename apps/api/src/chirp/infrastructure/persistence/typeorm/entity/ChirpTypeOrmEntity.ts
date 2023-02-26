import { Column, Entity, PrimaryColumn } from 'typeorm'
import { UserId } from '../../../../../user/domain/value-object/UserId'
import { Chirp } from '../../../../domain/Chirp'
import { ChirpId } from '../../../../domain/value-object/ChirpId'
import { ChirpMessage } from '../../../../domain/value-object/ChirpMessage'

@Entity()
export class ChirpTypeOrmEntity {
  @PrimaryColumn()
  id: string

  @Column()
  author: string

  @Column()
  message: string

  toDomain(): Chirp {
    return new Chirp(
      new ChirpId(this.id),
      new UserId(this.author),
      new ChirpMessage(this.message),
    )
  }
}
