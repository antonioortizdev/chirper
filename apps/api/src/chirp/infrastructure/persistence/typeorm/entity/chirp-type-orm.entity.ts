import { Column, Entity, PrimaryColumn } from "typeorm"

@Entity('chirps')
export class ChirpTypeOrmEntity {
  @PrimaryColumn()
  id: string

  @Column()
  author: string

  @Column()
  message: string
}
