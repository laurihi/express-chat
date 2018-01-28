const uuid = require('uuid/v1');

class ChatService {


    createChat() {

        var chatToken = uuid();

        var result = {
            chatToken: chatToken,
            messages: []
        }

        return result;
    }

}

module.exports = new ChatService()
