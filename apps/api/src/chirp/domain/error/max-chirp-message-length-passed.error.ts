import { InvalidArgumentError } from '../../../shared/domain/error/invalid-argument.error'
import { ChirpMessage } from '../value-object/chirp-message.value-object'

export class MaxChirpMessageLengthPassedError extends InvalidArgumentError {
  constructor(value: string) {
    super(
      `The chirp <${value}> with length of ${value.length} characters exceeds the limit of ${ChirpMessage.CHARACTER_LIMIT} characters.`,
    )
  }
}
