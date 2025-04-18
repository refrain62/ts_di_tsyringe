import User from './user'

export default class Database {
  saveUser(user: User): void {
    console.log(`Saved ${user.name}!`) // sabed yamada!
  }
}
