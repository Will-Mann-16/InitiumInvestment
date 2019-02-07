require('dotenv').config();

module.exports = {
    MONGODB_HOST: process.env.MONGODB_HOST || 'mongodb://localhost:27017/initium',
    PORT: process.env.PORT || 3000,
    SECRET: process.env.SECRET || ''
}