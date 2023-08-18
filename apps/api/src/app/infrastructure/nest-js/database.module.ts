import { Module } from '@nestjs/common';
import { DATA_SOURCE } from '../../../shared/domain/constants';
import { typeOrmDataSourceFactory } from '../typeorm/factory/typeorm-data-source.factory';

@Module({
	providers: [
		{
			provide: DATA_SOURCE,
			useFactory: typeOrmDataSourceFactory,
		},
	],
	exports: [DATA_SOURCE],
})
export class DatabaseModule {}
