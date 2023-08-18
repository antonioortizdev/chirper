import { Chirp } from '../../../../domain/Chirp';
import { Injectable } from '@nestjs/common/decorators/core';
import { Repository } from '../../../../../shared/domain/repository';
import { JsonRepository } from '../../../../../shared/infrastructure/persistence/json/repository/json.repository';

@Injectable()
export class JsonChirpRepository
	extends JsonRepository<Chirp>
	implements Repository<Chirp>
{
	async find(filters?): Promise<Chirp[]> {
		const foundChirps = await this.search('chirps', filters);

		return foundChirps.map(
			({ id, author, message }) => new Chirp(id, author, message),
		);
	}

	async save(chirp: Chirp): Promise<void> {
		this.persist('chirps', chirp);
	}
}
