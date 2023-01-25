import { MaxChirpMessageLengthPassedError } from '../error/MaxChirpMessageLengthPassedError'
import { StringValueObject } from '../../../shared/domain/value-object/StringValueObject'

export class ChirpMessage extends StringValueObject {
  public static readonly CHARACTER_LIMIT = 280
  constructor(value: string) {
    if (value.length > ChirpMessage.CHARACTER_LIMIT)
      throw new MaxChirpMessageLengthPassedError(value)

    super(value)
  }
}
