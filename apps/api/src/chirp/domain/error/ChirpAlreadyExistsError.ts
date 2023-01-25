import { ChirpId } from './../value-object/ChirpId'
import { InvalidArgumentError } from '../../../shared/domain/error/InvalidArgumentError'

export class ChirpAlreadyExistsError extends InvalidArgumentError {
  constructor(id: ChirpId) {
    super(`Chirp with ID <${String(id)}> does exist already.`)
  }
}
