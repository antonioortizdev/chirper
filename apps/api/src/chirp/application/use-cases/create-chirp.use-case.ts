import { Inject, Injectable } from '@nestjs/common';
import { CreateChirpDTO } from '../dtos/create-chirp.dto';
import { Chirp } from '../../domain/chirp.aggregate';
import { ChirpAlreadyExistsError } from '../../domain/errors/chirp-already-exists.error';
import { Repository } from '../../../shared/domain/repository';

@Injectable()
export class CreateChirp {
	constructor(@Inject(Repository) private repository: Repository<Chirp>) {}

	async run({ id, authorId, message }: CreateChirpDTO): Promise<void> {
		const chirp = new Chirp(id, authorId, message);
		await this.ensureChirpDoesNotExist(chirp.getId());
		this.repository.save(chirp);
	}

	private async ensureChirpDoesNotExist(id: string): Promise<void> {
		const foundChirps = await this.repository.find({ id });
		if (foundChirps.length) {
			throw new ChirpAlreadyExistsError(id);
		}
	}
}
