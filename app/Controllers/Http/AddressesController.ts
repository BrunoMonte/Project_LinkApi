import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Address from '../../Models/Address'

export default class AddressesController {
  public async index({}: HttpContextContract) {
    const addresses = await Address.query()

    return {
      data: addresses,
    }
  }

  public async store({ response, request }: HttpContextContract) {
    try {
      const body = request.only(['address', 'country', 'countryCode', 'city', 'state', 'zipcode'])
      const address = await Address.create(body)

      return response.status(200).send({ message: 'User create Sucesso', address })
    } catch (e) {
      return response.status(400).send({ message: 'Falha ao registrar usuario', e })
    }
  }

  public async show({}: HttpContextContract) {}
}
