import Database from './database'

export default class User {
  userId: number = 0
  name: string = ''

  saveUser(): void {
    if (this.userId) {
      const database = new Database()
      database.saveUser(this)
    }
  }
}
