export class CreateChirpDTO {
	constructor(
		readonly id: string,
		readonly authorId: string,
		readonly message: string,
	) {}
}
