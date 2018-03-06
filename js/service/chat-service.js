const uuid = require('uuid/v1')
const Chat = require('../model/chat.js')

class ChatService {

  constructor() {
    this.chatContainer = {
      chats: new Map()
    }
  }

  createChat() {

    var chatToken = uuid()
    var chat = new Chat(chatToken)

    this.chatContainer.chats.set(chatToken, chat)
    return chat;
  }

  newMessage(uuid, message) {

    var chats = this.chatContainer.chats.get(uuid);
    chats.messages.push(message);
  }
}

module.exports = new ChatService()
