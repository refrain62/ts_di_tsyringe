import Database from './database'

export default class User {
  userId: number = 0
  name: string = ''

  constructor(private database: Database) {
    this.userId = 0
    this.name = ''
  }

  saveUser(): void {
    if (this.userId) {
      this.database.saveUser(this)
    }
  }
}
