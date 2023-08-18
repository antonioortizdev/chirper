import { MaxChirpMessageLengthPassedError } from '../errors/max-chirp-message-length-passed.error';

export class ChirpMessage {
	private static readonly CHARACTER_LIMIT = 280;
	private readonly value: string;

	constructor(value: string) {
		if (value.length > ChirpMessage.CHARACTER_LIMIT) {
			throw new MaxChirpMessageLengthPassedError(value, ChirpMessage.CHARACTER_LIMIT);
		}

		this.value = value;
	}

	toString(): string {
		return this.value;
	}
}
