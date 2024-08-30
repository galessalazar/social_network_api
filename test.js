const mongoose = require('mongoose');
const User = require('./models/User'); // Adjust the path if necessary

mongoose.connect('mongodb://127.0.0.1:27017/socialDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(async () => {
    console.log('MongoDB connected');
    try {
        const users = await User.find();
        console.log('Users:', users);
    } catch (err) {
        console.error('Error querying users:', err);
    } finally {
        mongoose.connection.close();
    }
})
.catch(err => {
    console.error('MongoDB connection error:', err);
});
