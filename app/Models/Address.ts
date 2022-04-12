import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Address extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public address: string

  @column()
  public country: string

  @column()
  public countryCode: string

  @column()
  public city: string

  @column()
  public state: string

  @column()
  public zipcode: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
