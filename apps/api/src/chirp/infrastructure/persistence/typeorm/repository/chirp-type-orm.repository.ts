import { Repository as TypeOrmRepository } from 'typeorm';
import { Repository } from '../../../../../shared/domain/repository';
import { UserId } from '../../../../../user/domain/value-object/user-id.value-object';
import { Chirp } from '../../../../domain/chirp.aggregate';
import { ChirpId } from '../../../../domain/value-object/chirp-id.value-object';
import { ChirpMessage } from '../../../../domain/value-object/chirp-message.value-object';
import { ChirpTypeOrmEntity } from '../entity/chirp-type-orm.entity';

export class ChirpTypeOrmRepository implements Repository<Chirp> {
	constructor(private connection: TypeOrmRepository<ChirpTypeOrmEntity>) {}

	async find(): Promise<Chirp[]> {
		const chirps = await this.connection.find();
		return chirps.map(
			({ id, author, message }) =>
				new Chirp(new ChirpId(id), new UserId(author), new ChirpMessage(message)),
		);
	}

	async save(chirp: Chirp): Promise<void> {
		await this.connection.save(chirp.toPrimitives());
	}
}
