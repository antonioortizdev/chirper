import { ChirpId } from './value-objects/chirp-id.value-object';
import { ChirpMessage } from './value-objects/chirp-message.value-object';
import { UserId } from '../../user/domain/value-objects/user-id.value-object';

export class Chirp {
	private readonly id: ChirpId;
	private readonly authorId: UserId;
	private readonly message: ChirpMessage;

	constructor(id: string, authorId: string, message: string) {
		this.id = new ChirpId(id);
		this.authorId = new UserId(authorId);
		this.message = new ChirpMessage(message);
	}

	getId(): string {
		return this.id.toString();
	}

	getAuthorId(): string {
		return this.authorId.toString();
	}

	getMessage(): string {
		return this.message.toString();
	}

	toPrimitives() {
		return {
			id: this.getId(),
			authorId: this.getAuthorId(),
			message: this.getMessage(),
		};
	}
}
