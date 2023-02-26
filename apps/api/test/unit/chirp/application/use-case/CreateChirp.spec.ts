import { Chirp } from '../../../../../src/chirp/domain/Chirp'
import { ChirpAlreadyExistsError } from '../../../../../src/chirp/domain/error/ChirpAlreadyExistsError'
import { CreateChirp } from '../../../../../src/chirp/application/use-case/CreateChirp'
import { Repository } from '../../../../../src/shared/domain/repository/interface/Repository'
import { ChirpDto } from '../../../../../src/chirp/application/dto/ChirpDto'
import { ChirpId } from '../../../../../src/chirp/domain/value-object/ChirpId'
import { UserId } from '../../../../../src/user/domain/value-object/UserId'
import { ChirpMessage } from '../../../../../src/chirp/domain/value-object/ChirpMessage'

describe('CreateChirp', () => {
  let createChirp: CreateChirp
  let repository: Repository<Chirp>
  let chirpDto: ChirpDto
  let chirp: Chirp

  beforeEach(() => {
    repository = {
      save: jest.fn(),
      find: jest.fn(),
    } as any
    createChirp = new CreateChirp(repository)
    chirpDto = new ChirpDto(
      '4eb170e2-00fa-41b1-af6b-553c0bbebfa6',
      '78d74ddc-93e1-4f55-bae1-9d9bf8e4236a',
      'do the laundry',
    )
    chirp = new Chirp(
      new ChirpId('4eb170e2-00fa-41b1-af6b-553c0bbebfa6'),
      new UserId('78d74ddc-93e1-4f55-bae1-9d9bf8e4236a'),
      new ChirpMessage('do the laundry'),
    )
    jest.spyOn(chirpDto, 'toDomain').mockReturnValue(chirp)
  })

  it('should throw an error when the chirp already exists', async () => {
    ;(repository.find as jest.Mock).mockResolvedValue([chirp])
    await expect(createChirp.run(chirpDto)).rejects.toThrowError(
      ChirpAlreadyExistsError,
    )
    expect(chirpDto.toDomain).toHaveBeenCalledTimes(1)
    expect(repository.find).toHaveBeenCalledWith({
      id: '4eb170e2-00fa-41b1-af6b-553c0bbebfa6',
    })
  })

  it('should save the chirp when it does not exist', async () => {
    ;(repository.find as jest.Mock).mockResolvedValue([])
    await createChirp.run(chirpDto)
    expect(chirpDto.toDomain).toHaveBeenCalledTimes(1)
    expect(repository.save).toHaveBeenCalledWith(chirp)
  })
})
