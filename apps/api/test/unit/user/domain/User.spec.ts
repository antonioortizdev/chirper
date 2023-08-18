import { User } from '../../../../src/user/domain/user.aggregate';

describe('User aggregate.', () => {
	let user: User;

	beforeEach(() => {
		user = new User(
			'c6e79858-a309-4ea6-9371-e6ccc4497fff',
			'antonio@gmail.com',
		);
	});

	it('should return their id.', () => {
		expect(user.getId()).toBe('c6e79858-a309-4ea6-9371-e6ccc4497fff');
	});

	it('should return their email.', () => {
		expect(user.getEmail()).toBe('antonio@gmail.com');
	});

	it('should convert user to primitives.', () => {
		const userData = {
			id: 'c6e79858-a309-4ea6-9371-e6ccc4497fff',
			email: 'antonio@gmail.com',
		};
		expect(user.toPrimitives()).toStrictEqual(userData);
	});
});
