const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectToMongo = () => {

    mongoose.connect(process.env.MONGO_URL, () => {
        console.log('Connected to MongoDB');
    })

}

module.exports = connectToMongo;