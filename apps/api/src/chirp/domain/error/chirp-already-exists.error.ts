import { InvalidArgumentError } from '../../../shared/domain/error/invalid-argument.error';

export class ChirpAlreadyExistsError extends InvalidArgumentError {
	constructor(id: string) {
		super(`Chirp with ID <${id}> does exist already.`);
	}
}
