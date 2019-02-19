const mongoose = require('mongoose');

const TYPES = ['ENTREPRENEUR', 'ADVISOR', 'INVESTOR'];
const TIERS = ['BRONZE', 'SILVER', 'GOLD'];

const UserSchema = new mongoose.Schema({
    email: [String],
    password: String,
    firstname: String,
    surname: String,
    type: {
      type: String,
      enum: [...TYPES],
      default: TYPES[0]
    },
    tier: {
        type: String,
        enum: [...TIERS],
        default: TIERS[0]
    },
    connections: {
        type: [mongoose.ObjectId],
        default: []
    }
});

const User = mongoose.model("Users", UserSchema);

module.exports = { User };