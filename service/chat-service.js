const uuid = require('uuid/v1');

class ChatService {

  constructor() {
    this.chatContainer = {
      chatCount: 0,
      chat: new Map()
    }
  }

  createChat() {

    var chatToken = uuid();

    var result = {
      chatToken: chatToken,
      messages: []
    }

    this.chatContainer.chat.set(chatToken, result)
    this.chatContainer.chatCount += 1
    return result;
  }

}

module.exports = new ChatService()
