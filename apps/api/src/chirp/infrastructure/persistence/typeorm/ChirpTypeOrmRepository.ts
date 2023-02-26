import { Repository as TypeOrmRepository } from 'typeorm'
import { Repository } from '../../../../shared/domain/repository/interface/Repository'
import { UserId } from '../../../../user/domain/value-object/UserId'
import { Chirp } from '../../../domain/Chirp'
import { ChirpId } from '../../../domain/value-object/ChirpId'
import { ChirpMessage } from '../../../domain/value-object/ChirpMessage'
import { ChirpTypeOrmEntity } from './entity/ChirpTypeOrmEntity'

export class ChirpTypeOrmRepository implements Repository<Chirp> {
  constructor(private connection: TypeOrmRepository<ChirpTypeOrmEntity>) {}

  async find(): Promise<Chirp[]> {
    const chirps = await this.connection.find()
    return chirps.map(
      ({ id, author, message }) =>
        new Chirp(
          new ChirpId(id),
          new UserId(author),
          new ChirpMessage(message),
        ),
    )
  }

  async save(chirp: Chirp): Promise<void> {
    await this.connection.save(chirp.toPrimitives())
  }
}
