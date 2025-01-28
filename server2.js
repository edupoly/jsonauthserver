// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db2.json')
const middlewares = jsonServer.defaults()
var jwt = require('jsonwebtoken');
var bodyParser=require('body-parser');
server.use(bodyParser.json())
server.use(middlewares)
server.use(router)
server.listen(4000, () => {
  console.log('JSON Server is running on 4000!!! Enjoyyyy')
})