'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('login','UserController.login')
Route.get('showUser','UserController.showUser')
Route.get('showUserById/:id','UserController.showUserById')
Route.post('addUser','UserController.addUser')
Route.delete('deleteUser/:id','UserController.deleteUser')
Route.put('updateUser/:id','UserController.updateUser')
