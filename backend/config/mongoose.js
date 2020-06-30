import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/MEAN-auth', {
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(() => console.log('Succesfully connected to MongoDB'))
    .catch(console.error)