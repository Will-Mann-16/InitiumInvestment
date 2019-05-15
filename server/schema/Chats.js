const mongoose = require('mongoose');

const chatSchema = mongoose.Schema({
    members: [mongoose.ObjectId],
    messages: [{
        sentBy: mongoose.ObjectId,
        message: String,
        timestamp: Date
    }]
});

const Chat = mongoose.model('Chat', chatSchema);

module.exports = {Chat};