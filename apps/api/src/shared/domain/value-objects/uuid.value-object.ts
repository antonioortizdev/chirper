import * as validate from 'uuid-validate';
import { InvalidArgumentError } from '../errors/invalid-argument.error';
import { v4 } from 'uuid';

export class Uuid {
	readonly value: string;

	constructor(value: string) {
		this.ensureIsValidUuid(value);

		this.value = value;
	}

	static random(): Uuid {
		return new Uuid(v4());
	}

	private ensureIsValidUuid(id: string): void {
		if (!validate(id)) {
			throw new InvalidArgumentError(
				`<${this.constructor.name}> does not allow the value <${id}>`,
			);
		}
	}

	toString(): string {
		return this.value;
	}
}
