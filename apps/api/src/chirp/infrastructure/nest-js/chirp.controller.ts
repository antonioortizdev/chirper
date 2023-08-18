import {
	BadRequestException,
	Body,
	Controller,
	Get,
	HttpCode,
	HttpStatus,
	InternalServerErrorException,
	Post,
	Response,
} from '@nestjs/common';
import { InvalidArgumentError } from '../../../shared/domain/errors/invalid-argument.error';
import { CreateChirpDTO } from '../../application/dtos/create-chirp.dto';
import { CreateChirp } from '../../application/use-cases/create-chirp.use-case';
import { FindAllChirps } from '../../application/use-cases/find-all-chirps.use-case';

const ROUTE_PREFIX = 'chirps';
@Controller(ROUTE_PREFIX)
export class ChirpController {
	constructor(
		private findAllChirpsUseCase: FindAllChirps,
		private createChirpUseCase: CreateChirp,
	) {}

	@Get()
	async findAll() {
		try {
			const data = await this.findAllChirpsUseCase.run();
			return { statusCode: HttpStatus.OK, data };
		} catch (error) {
			throw new InternalServerErrorException(error.message);
		}
	}

	@Post()
	@HttpCode(HttpStatus.CREATED)
	async create(@Body() chirpDto: CreateChirpDTO, @Response() response) {
		try {
			await this.createChirpUseCase.run(chirpDto);
			response.header('Location', `/${ROUTE_PREFIX}/${chirpDto.id}`);
		} catch (error) {
			if (error instanceof InvalidArgumentError)
				throw new BadRequestException(error.message);
			throw new InternalServerErrorException(error.message);
		}
	}
}
