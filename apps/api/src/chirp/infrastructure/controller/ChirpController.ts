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
} from '@nestjs/common'
import { ChirpDto } from '../../application/dto/ChirpDto'
import { CreateChirp } from '../../application/use-case/CreateChirp'
import { FindAllChirps } from '../../application/use-case/FindAllChirps'
import { InvalidArgumentError } from '../../../shared/domain/error/InvalidArgumentError'

const ROUTE_PREFIX = 'chirps'
@Controller(ROUTE_PREFIX)
export class ChirpController {
  constructor(
    private findAllChirpsUseCase: FindAllChirps,
    private createChirpUseCase: CreateChirp
  ) {}

  @Get()
  async findAll() {
    try {
      const data = await this.findAllChirpsUseCase.run()
      return { statusCode: HttpStatus.OK, data }
    } catch (error) {
      throw new InternalServerErrorException(error.message)
    }
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() chirpDto: ChirpDto, @Response() response) {
    try {
      await this.createChirpUseCase.run(chirpDto)
      response.header('Location', `/${ROUTE_PREFIX}/${chirpDto.id}`)
    } catch (error) {
      if (error instanceof InvalidArgumentError)
        throw new BadRequestException(error.message)
      throw new InternalServerErrorException(error.message)
    }
  }
}
