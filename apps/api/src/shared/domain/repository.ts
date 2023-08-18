export interface Repository<T> {
	find(filters?): Promise<T[]>;
	save(entity: T): Promise<void>;
}

export const Repository = Symbol('Repository');
