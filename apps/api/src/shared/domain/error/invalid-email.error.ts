import { InvalidArgumentError } from './invalid-argument.error'

export class InvalidEmailError extends InvalidArgumentError {
  constructor(invalidEmail: string) {
    super(`<${invalidEmail}> is not a valid email.`)
  }
}
