/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index({ response }: HttpContextContract) {
    const user = await User.all()
    return response.ok(user)
  }

  public async store({ response, request }: HttpContextContract) {
    try {
      const body = request.only(['email', 'firstName', 'lastName'])
      const user = await User.create(body)

      return response.status(200).send({ message: 'Endereço criado com sucesso !', user })
    } catch (e) {
      return response.status(400).send({ message: 'Falha ao registrar endereço !', e })
    }
  }
}
