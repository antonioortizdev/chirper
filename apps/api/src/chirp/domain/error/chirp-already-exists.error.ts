import { ChirpId } from '../value-object/chirp-id.value-object';
import { InvalidArgumentError } from '../../../shared/domain/error/invalid-argument.error';

export class ChirpAlreadyExistsError extends InvalidArgumentError {
	constructor(id: ChirpId) {
		super(`Chirp with ID <${String(id)}> does exist already.`);
	}
}
