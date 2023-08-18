import { Entity } from './entity';

export interface Repository<T extends Entity> {
	find(filters?): Promise<T[]>;
	save(entity: T): Promise<void>;
}

export const Repository = Symbol('Repository');
