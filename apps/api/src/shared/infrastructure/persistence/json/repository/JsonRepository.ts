import { readFileSync as readJson, writeFileSync as writeJson } from 'fs'
import { Entity } from '../../../../domain/entity/interface/Entity'

export class JsonRepository<T extends Entity> {
  private readonly databaseFilePath: string =
    'src/shared/infrastructure/persistence/json/file/db.json'
  private database: any

  constructor() {
    this.database = JSON.parse(readJson(this.databaseFilePath, 'utf-8'))
  }

  async search(key: string, filters?: any): Promise<any[]> {
    if (filters) {
      return this.database[key].filter(entity => {
        return Object.keys(filters).reduce(
          (matchesCriteria, key) =>
            matchesCriteria && filters[key] === entity[key],
          false,
        )
      })
    }
    return this.database[key]
  }

  protected async persist(key: string, entity: T): Promise<void> {
    this.database[key].push(entity.toPrimitives())
    writeJson(this.databaseFilePath, JSON.stringify(this.database))
  }
}
