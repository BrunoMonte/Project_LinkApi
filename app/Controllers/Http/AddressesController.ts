import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Address from 'App/Models/Address'
import User from 'App/Models/User'

export default class AddressesController {
  public async store({ request, response, params }: HttpContextContract) {
    try {
      const body = request.body()
      const userId = params.userId

      await User.findOrFail(userId)

      body.userId = userId

      const contact = await Address.create(body)

      response.status(201).send({ message: 'Address added successfully! ' })

      return {
        data: contact,
      }
    } catch (e) {
      return response.status(400).send({ message: 'Failed to register Address !', e })
    }
  }
}
