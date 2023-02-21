import express, { request, response } from 'express'

const server: express.Express = express()

server.use((request, response) => {
    if(request.url == '/pubg'){
      response.status(403).send('Access Denied')
    }
   if (request.method == 'GET') {
        response.status(200).send("contecting")
    }
    if (request.method == 'POST') {
        response.status(201).send('Jonatildi')
    }
})

server.listen(7777, 'localhost', () => {
    console.log('Server is listen port: 7777');

})
