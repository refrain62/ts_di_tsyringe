import User, { IDatabase } from './user'

export default class Databas implements IDatabase {
  saveUser(user: User): void {
    console.log(`Saved ${user.name}!`) // sabed yamada!
  }
}
