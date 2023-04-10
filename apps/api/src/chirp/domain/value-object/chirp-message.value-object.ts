import { MaxChirpMessageLengthPassedError } from '../error/max-chirp-message-length-passed.error'
import { StringValueObject } from '../../../shared/domain/value-object/string.value-object'

export class ChirpMessage extends StringValueObject {
  public static readonly CHARACTER_LIMIT = 280
  constructor(value: string) {
    if (value.length > ChirpMessage.CHARACTER_LIMIT)
      throw new MaxChirpMessageLengthPassedError(value)

    super(value)
  }
}
