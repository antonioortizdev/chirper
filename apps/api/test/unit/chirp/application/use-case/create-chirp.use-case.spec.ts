import { Chirp } from '../../../../../src/chirp/domain/chirp.aggregate';
import { ChirpAlreadyExistsError } from '../../../../../src/chirp/domain/error/chirp-already-exists.error';
import { CreateChirp } from '../../../../../src/chirp/application/use-case/create-chirp.use-case';
import { Repository } from '../../../../../src/shared/domain/repository';
import { CreateChirpDTO } from '../../../../../src/chirp/application/dto/create-chirp.dto';

describe('CreateChirp', () => {
	let createChirp: CreateChirp;
	let repository: Repository<Chirp>;
	let chirpDto: CreateChirpDTO;
	let chirp: Chirp;

	beforeEach(() => {
		repository = {
			save: jest.fn(),
			find: jest.fn(),
		} as any;
		createChirp = new CreateChirp(repository);
		chirpDto = new CreateChirpDTO(
			'4eb170e2-00fa-41b1-af6b-553c0bbebfa6',
			'78d74ddc-93e1-4f55-bae1-9d9bf8e4236a',
			'do the laundry',
		);
		chirp = new Chirp(
			'4eb170e2-00fa-41b1-af6b-553c0bbebfa6',
			'78d74ddc-93e1-4f55-bae1-9d9bf8e4236a',
			'do the laundry',
		);
	});

	it('should throw an error when the chirp already exists', async () => {
		(repository.find as jest.Mock).mockResolvedValue([chirp]);
		await expect(createChirp.run(chirpDto)).rejects.toThrowError(
			ChirpAlreadyExistsError,
		);
		expect(repository.find).toHaveBeenCalledWith({
			id: '4eb170e2-00fa-41b1-af6b-553c0bbebfa6',
		});
	});

	it('should save the chirp when it does not exist', async () => {
		(repository.find as jest.Mock).mockResolvedValue([]);
		await createChirp.run(chirpDto);
		expect(repository.save).toHaveBeenCalledWith(chirp);
	});
});
