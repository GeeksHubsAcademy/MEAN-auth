import mongoose from 'mongoose';
const MONGO_URI = process.env.MONGO_URI  || 'mongodb://localhost:27017/MEAN-auth';
const db = mongoose.connect(MONGO_URI, {
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(() => console.log('Succesfully connected to MongoDB'))
    .catch(console.error)
export default db;