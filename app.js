const express = require('express')
const bodyParser = require('body-parser');
const cors =  require('cors');
var path = require('path');

const app = express()
app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

const chatService = require('./js/service/chat-service')


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/', 'index.html'))
}
)


app.post('/chat/new-chat', (req,res) => {

  var createdChat
  createdChat = chatService.createChat()

  res.send(createdChat)

})

app.post('/chat/:uuid/message', (req,res) => {
  var uuid = req.params.uuid;
  var message = req.body.message

  chatService.newMessage(uuid, message)

  res.send('Message added: "' +message +'"')

})

app.listen(3000, () => console.log('Listening on port 3000...'))
