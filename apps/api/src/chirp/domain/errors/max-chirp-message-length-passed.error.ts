import { InvalidArgumentError } from '../../../shared/domain/errors/invalid-argument.error';

export class MaxChirpMessageLengthPassedError extends InvalidArgumentError {
	constructor(value: string, characterLimit: number) {
		super(
			`The chirp <${value}> with length of ${value.length} characters exceeds the limit of ${characterLimit} characters.`,
		);
	}
}
