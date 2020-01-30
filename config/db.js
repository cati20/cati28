const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async() => {
    try {
    await mongoose
    .connect(db, {
        useNewUrlParser: true,
        useCreateIndex : true,
        useUnifiedTopology : true
    });
        console.log("connectd to database")
    } catch (err) {
        console.error(err.mesaage);
        process.exit(1);
    }

    
};

module.exports = connectDB;