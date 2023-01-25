import { InvalidArgumentError } from '../../../shared/domain/error/InvalidArgumentError'
import { ChirpMessage } from '../value-object/ChirpMessage'

export class MaxChirpMessageLengthPassedError extends InvalidArgumentError {
  constructor(value: string) {
    super(
      `The chirp <${value}> with length of ${value.length} characters exceeds the limit of ${ChirpMessage.CHARACTER_LIMIT} characters.`
    )
  }
}
