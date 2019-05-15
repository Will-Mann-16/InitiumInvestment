const mongoose = require('mongoose');


const BusinessSchema = new mongoose.Schema({
    name: String,
    bio: String,
    owners: [mongoose.ObjectId]
});

const Business = mongoose.model("Businesses", BusinessSchema);

module.exports = { Business };