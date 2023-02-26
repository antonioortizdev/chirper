import { Repository as TypeOrmRepository } from 'typeorm'
import { Repository } from '../../../../shared/domain/repository/interface/Repository'
import { Chirp } from '../../../domain/Chirp'
import { ChirpTypeOrmEntity } from './entity/ChirpTypeOrmEntity'

export class ChirpTypeOrmRepository implements Repository<Chirp> {
  constructor(private connection: TypeOrmRepository<ChirpTypeOrmEntity>) {}

  async find(): Promise<Chirp[]> {
    const chirps = await this.connection.find()
    return chirps.map(chirp => chirp.toDomain())
  }

  async save(chirp: Chirp): Promise<void> {
    await this.connection.save(chirp.toPrimitives())
  }
}
