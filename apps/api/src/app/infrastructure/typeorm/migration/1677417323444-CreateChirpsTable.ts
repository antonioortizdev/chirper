import { ChirpTypeOrmEntity } from '../../../../chirp/infrastructure/persistence/typeorm/entity/ChirpTypeOrmEntity'
import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateChirpsTable1677417323444 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const ifNotExists = true
    await queryRunner.createTable(
      new Table({
        name: 'chirps',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
          },
          {
            name: 'author',
            type: 'varchar',
          },
          {
            name: 'message',
            type: 'varchar',
          },
        ],
      }),
      ifNotExists,
    )

    const chirps: ChirpTypeOrmEntity[] = [
      {
        id: '9069e1e9-88b1-4a32-a334-3dff680c0981',
        author: 'John',
        message: 'Hello world!',
      },
      {
        id: 'dc4ea3ca-95ce-4d40-a34d-b9c6b6733187',
        author: 'Jane',
        message: 'How are you doing?',
      },
    ]

    await queryRunner.manager.save(ChirpTypeOrmEntity, chirps)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('chirps')
  }
}
