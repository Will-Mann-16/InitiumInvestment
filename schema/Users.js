const mongoose = require('mongoose');

const TIERS = ['BRONZE', 'SILVER', 'GOLD'];

const EntrepreneurSchema = new mongoose.Schema({
    email: [String],
    password: String,
    firstname: String,
    surname: String,
    tier: {
        type: String,
        enum: [...TIERS],
        default: TIERS[0]
    }
});
const AdvisorSchema = new mongoose.Schema({
    email: [String],
    password: String,
    firstname: String,
    surname: String
});
const InvestorSchema = new mongoose.Schema({
    email: [String],
    password: String,
    firstname: String,
    surname: String,
    connections: {
        type: [mongoose.ObjectId],
        default: []
    }
});

const Entrepreneur = mongoose.model('entrepreneur', EntrepreneurSchema);
const Advisor = mongoose.model('advisor', AdvisorSchema);
const Investor = mongoose.model('investor', InvestorSchema);

module.exports = { Entrepreneur, Advisor, Investor };