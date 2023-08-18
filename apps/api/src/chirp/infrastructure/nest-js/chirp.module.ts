import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../../app/infrastructure/nest-js/database.module';
import { ChirpController } from './chirp.controller';
import { FindAllChirps } from '../../application/use-cases/find-all-chirps.use-case';
import { CreateChirp } from '../../application/use-cases/create-chirp.use-case';
import { Repository } from '../../../shared/domain/repository';
import { DataSource } from 'typeorm';
import { ChirpTypeOrmRepository } from '../persistence/typeorm/repository/chirp-type-orm.repository';
import { ChirpTypeOrmEntity } from '../persistence/typeorm/entity/chirp-type-orm.entity';
import { DATA_SOURCE } from '../../../shared/domain/constants';

const providers = [
	FindAllChirps,
	CreateChirp,
	{
		provide: Repository,
		useFactory: (dataSource: DataSource) =>
			new ChirpTypeOrmRepository(dataSource.getRepository(ChirpTypeOrmEntity)),
		inject: [DATA_SOURCE],
	}
];

@Module({
	imports: [DatabaseModule],
	controllers: [ChirpController],
	providers,
})
export class ChirpModule {}
