import { Inject, Injectable } from '@nestjs/common';
import { Chirp } from '../../domain/chirp.aggregate';
import { Repository } from '../../../shared/domain/repository';

@Injectable()
export class FindAllChirps {
	constructor(@Inject(Repository) private repository: Repository<Chirp>) {}

	async run(): Promise<Chirp[]> {
		return this.repository.find();
	}
}
