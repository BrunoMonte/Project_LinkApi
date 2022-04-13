import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('/', 'UsersController.store')
  Route.get('/', 'UsersController.index')
  Route.get('/user/:id', 'UsersController.show')
}).prefix('/62151ae9cdb9d09717adf48c.mockapi.io/api/v1')

Route.group(() => {
  Route.post('/users/:userId/addresses', 'AddressesController.store')
  Route.post('/users/:userId/contacts', 'ContactsController.store')
}).prefix('/62151ae9cdb9d09717adf48c.mockapi.io/api/v1')
