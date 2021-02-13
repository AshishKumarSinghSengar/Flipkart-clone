const mongoose = require('mongoose');
const express = require('express');
const app = express();
const env = require('dotenv');
const bodyParser = require('body-parser');

//environment variable or constraints

const authRoutes = require('./routes/auth');

env.config();

//mongodb connection
//mongodb+srv://root:<password>@cluster0.frptc.mongodb.net/<dbname>?retryWrites=true&w=majority
mongoose.connect(`mongodb://localhost:27017/${process.env.MONGO_DB_DATABASE}`, 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then(()=>{
        console.log('Database Connected');
    }).catch(Error);

app.use(express.json());

app.use(bodyParser());
app.use('/api', authRoutes);
mongoose.model('User');

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});