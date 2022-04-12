import Route from '@ioc:Adonis/Core/Route'
//import Database from '@ioc:Adonis/Lucid/Database'

Route.group(() => {
  Route.post('/users', 'UsersController.store')
  Route.get('/users', 'UsersController.index')
}).prefix('/62151ae9cdb9d09717adf48c.mockapi.io/api/v1')

Route.group(() => {
  Route.get('/users/:userId/addresses', 'AddressesController.index')
  Route.post('/users/:userId/addresses', 'AddressesController.store')
}).prefix('/62151ae9cdb9d09717adf48c.mockapi.io/api/v1')

Route.group(() => {
  Route.get('/users/:userId/contacts', 'ContactsController.index')
  Route.post('/users/:userId/contacts', 'ContactsController.store')
}).prefix('/62151ae9cdb9d09717adf48c.mockapi.io/api/v1')
