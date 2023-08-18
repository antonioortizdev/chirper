import { UserEmail } from './value-objects/user-email.value-object';
import { UserId } from './value-objects/user-id.value-object';

export class User {
	private readonly id: UserId;
	private readonly email: UserEmail;

	constructor(id: string, email: string) {
		this.id = new UserId(id);
		this.email = new UserEmail(email);
	}

	getId(): string {
		return this.id.toString();
	}

	getEmail(): string {
		return this.email.toString();
	}

	toPrimitives(): object {
		return {
			id: this.id.toString(),
			email: this.email.toString(),
		};
	}
}
