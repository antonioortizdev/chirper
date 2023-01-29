import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpStatus,
  InternalServerErrorException,
  Post,
} from '@nestjs/common'
import { ChirpDto } from '../../application/dto/ChirpDto'
import { CreateChirp } from '../../application/use-case/CreateChirp'
import { FindAllChirps } from '../../application/use-case/FindAllChirps'
import { InvalidArgumentError } from '../../../shared/domain/error/InvalidArgumentError'

@Controller('chirps')
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
  async create(@Body() chirpDto: ChirpDto) {
    try {
      await this.createChirpUseCase.run(chirpDto)
      return { statusCode: HttpStatus.NO_CONTENT }
    } catch (error) {
      if (error instanceof InvalidArgumentError)
        throw new BadRequestException(error.message)
      throw new InternalServerErrorException(error.message)
    }
  }
}
