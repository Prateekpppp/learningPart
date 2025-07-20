const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017';

async function connectDB() {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Connection failed', error);
    } finally {
        await mongoose.disconnect();
    }
}

connectDB();
