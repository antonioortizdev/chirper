import { Chirp } from '../../../../src/chirp/domain/chirp.aggregate';

describe('Chirp aggregate.', () => {
	let chirp: Chirp;

	beforeEach(() => {
		chirp = new Chirp(
			'c6e79858-a309-4ea6-9371-e6ccc4497fff',
			'4ca63255-b896-44ec-baae-7f644a835211',
			'This is my first chirp.',
		);
	});

	it('should return its id', () => {
		expect(chirp.getId()).toBe('c6e79858-a309-4ea6-9371-e6ccc4497fff');
	});

	it('should return its author id', () => {
		expect(chirp.getAuthorId()).toBe('4ca63255-b896-44ec-baae-7f644a835211');
	});

	it('should return its message', () => {
		expect(chirp.getMessage()).toBe('This is my first chirp.');
	});


	it('should convert chirp to primitives', () => {
		const chirpData = {
			id: 'c6e79858-a309-4ea6-9371-e6ccc4497fff',
			authorId: '4ca63255-b896-44ec-baae-7f644a835211',
			message: 'This is my first chirp.',
		};
		expect(chirp.toPrimitives()).toStrictEqual(chirpData);
	});
});
