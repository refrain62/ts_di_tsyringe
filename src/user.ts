import { injectable, inject } from 'tsyringe'

// インターフェース定義
export interface IDatabase {
  saveUser: (user: User) => void
}

@injectable()
// DatabaseクラスはIDatabaseインターフェースを実装する
export default class User {
  userId: number = 0
  name: string = ''

  constructor(
      @inject('IDatabase')
      private database: IDatabase
      ) {
    this.userId = 0
    this.name = ''
  }

  saveUser(): void {
    if (this.userId) {
      this.database.saveUser(this)
    }
  }
}
