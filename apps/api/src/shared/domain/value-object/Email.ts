import { InvalidEmailError } from '../error/invalid-email.error'
import { validate } from 'email-validator'

export class Email {
  readonly value: string
  constructor(value: string) {
    this.ensureIsValidEmail(value)
    this.value = value
  }

  toString(): string {
    return this.value
  }

  private ensureIsValidEmail(value: string) {
    if (!validate(value)) {
      throw new InvalidEmailError(value)
    }
  }
}
