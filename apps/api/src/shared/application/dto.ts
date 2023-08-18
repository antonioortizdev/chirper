import { Entity } from '../domain/entity';
export interface Dto {
	toDomain(): Entity;
}
