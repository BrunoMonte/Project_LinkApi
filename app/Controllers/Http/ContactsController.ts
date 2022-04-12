import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Contact from '../../Models/Contact'

export default class ContactsController {
  public async index({}: HttpContextContract) {
    const contacts = await Contact.query()

    return {
      data: contacts,
    }
  }

  public async store({ response, request }: HttpContextContract) {
    try {
      const body = request.only(['name', 'phoneNumber', 'email'])
      const contact = await Contact.create(body)

      return response.status(200).send({ message: 'Contato criado com sucesso', contact })
    } catch (e) {
      return response.status(400).send({ message: 'Falha ao registrar contato', e })
    }
  }

  public async show({}: HttpContextContract) {}
}
