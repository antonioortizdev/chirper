import { Test, TestingModule } from '@nestjs/testing'
import { ChirpController } from '../../../../../../src/chirp/infrastructure/nest/controller/chirp.controller'

// test ChirpController endpoints.
describe('ChirpController', () => {
  let controller: ChirpController

  beforeEach(async () => {
    const testModule: TestingModule = await Test.createTestingModule({
      controllers: [ChirpController],
    }).compile()

    controller = testModule.get<ChirpController>(ChirpController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
