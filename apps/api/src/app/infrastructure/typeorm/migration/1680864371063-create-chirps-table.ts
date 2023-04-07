import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateChirpsTable1677417323444 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
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
            name: 'author_id',
            type: 'varchar',
          },
          {
            name: 'message',
            type: 'varchar',
          },
        ],
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('chirps')
  }
}
