import { DataSource } from 'typeorm';
import { DATA_SOURCE } from '../../../../shared/domain/constants';
import { Repository } from '../../../../shared/domain/repository';
import { CreateChirp } from '../../../application/use-case/create-chirp.use-case';
import { FindAllChirps } from '../../../application/use-case/find-all-chirps.use-case';
import { ChirpTypeOrmRepository } from '../../persistence/typeorm/repository/chirp-type-orm.repository';
import { ChirpTypeOrmEntity } from '../../persistence/typeorm/entity/chirp-type-orm.entity';

const useCases = [FindAllChirps, CreateChirp];
const repositories = [
	{
		provide: Repository,
		useFactory: (dataSource: DataSource) =>
			new ChirpTypeOrmRepository(dataSource.getRepository(ChirpTypeOrmEntity)),
		inject: [DATA_SOURCE],
	},
];

export const chirpProviders = [...useCases, ...repositories];
