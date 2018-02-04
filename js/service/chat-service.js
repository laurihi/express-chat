const uuid = require('uuid/v1')
const Chat = require('../model/chat.js')

class ChatService {

  constructor() {
    this.chatContainer = {
      chatCount: 0,
      chat: new Map()
    }
  }

  createChat() {


    var chatToken = uuid()
    var chat = new Chat(chatToken)
    console.log(chat)


    this.chatContainer.chat.set(chatToken, chat)
    this.chatContainer.chatCount += 1
    return chat;
  }

}

module.exports = new ChatService()
