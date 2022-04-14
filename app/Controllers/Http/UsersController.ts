import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index({}: HttpContextContract) {
    const userContact = await User.query().preload('contacts')
    const userAddress = await User.query().preload('addresses')

    return {
      data: userContact,
      userAddress,
    }
  }

  public async store({ response, request }: HttpContextContract) {
    try {
      const body = request.only(['email', 'firstName', 'lastName'])
      const user = await User.create(body)

      return response.status(201).send({ message: 'User created successfully!', user })
    } catch (e) {
      return response.status(400).send({ message: 'Failed to register user !', e })
    }
  }
  public async show({ params, response }: HttpContextContract) {
    try {
      const userContact = await User.findOrFail(params.id)
      const userAddress = await User.findOrFail(params.id)

      await userContact.load('contacts')
      await userAddress.load('addresses')

      return {
        data: userContact,
        userAddress,
      }
    } catch (e) {
      return response.status(404).send({ message: 'Failed to find user by id !', e })
    }
  }
}
