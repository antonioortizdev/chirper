import { ChirpMessage } from '../../../../../src/chirp/domain/value-objects/chirp-message.value-object';
import { MaxChirpMessageLengthPassedError } from '../../../../../src/chirp/domain/errors/max-chirp-message-length-passed.error';

describe('Chirp Message', () => {
	it('should throw a max chirp message length passed error on instantiation', () => {
		const aExtremelyLargeText = `
    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
    `;
		expect(() => new ChirpMessage(aExtremelyLargeText)).toThrow(
			MaxChirpMessageLengthPassedError,
		);
	});

	it('should return its value as a string', () => {
		const chirpMessageValue = 'This is my first chirp';
		const chirpMessage = new ChirpMessage(chirpMessageValue);

		expect(String(chirpMessage)).toBe(chirpMessageValue);
	});
});
