const mongoose = require('mongoose');

const TYPES = ['ENTREPRENEUR', 'INVESTOR'];
const TIERS = ['BRONZE', 'SILVER', 'GOLD'];

const UserSchema = new mongoose.Schema({
    email: [String],
    password: String,
    firstname: String,
    surname: String,
    bio: String,
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