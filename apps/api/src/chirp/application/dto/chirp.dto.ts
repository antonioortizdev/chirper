import { UserId } from '../../../user/domain/value-object/user-id.value-object';
import { Chirp } from '../../domain/Chirp';
import { Dto } from '../../../shared/application/dto';
import { ChirpId } from '../../domain/value-object/chirp-id.value-object';
import { ChirpMessage } from '../../domain/value-object/chirp-message.value-object';

export class ChirpDto implements Dto {
	constructor(
		readonly id: string,
		readonly author: string,
		readonly message: string,
	) {}

	toDomain(): Chirp {
		return new Chirp(
			new ChirpId(this.id),
			new UserId(this.author),
			new ChirpMessage(this.message),
		);
	}
}
