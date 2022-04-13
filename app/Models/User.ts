import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Contact from './Contact'
import Address from './Address'

export default class User extends BaseModel {
  @hasMany(() => Contact)
  public contacts: HasMany<typeof Contact>

  @hasMany(() => Address)
  public addresses: HasMany<typeof Address>

  @column({ isPrimary: true })
  public id: number

  @column()
  public firstName: string

  @column()
  public lastName: string

  @column()
  public email: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
