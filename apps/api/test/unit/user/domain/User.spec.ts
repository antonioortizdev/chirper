import { User } from '../../../../src/user/domain/user.entity';
import { UserEmail } from '../../../../src/user/domain/value-object/user-email.value-object';
import { UserId } from '../../../../src/user/domain/value-object/user-id.value-object';

describe('User', () => {
	let user: User;

	beforeEach(() => {
		user = new User(
			new UserId('c6e79858-a309-4ea6-9371-e6ccc4497fff'),
			new UserEmail('antonio@gmail.com'),
		);
	});

	it('should convert chirp to primitives', () => {
		const userData = {
			id: 'c6e79858-a309-4ea6-9371-e6ccc4497fff',
			email: 'antonio@gmail.com',
		};
		expect(user.toPrimitives()).toStrictEqual(userData);
	});
});
