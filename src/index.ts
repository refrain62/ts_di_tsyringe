import User from './user'
import Database from './database'

const user = new User(new Database())

user.userId = 1
user.name = 'yamada'
user.saveUser() 

