const express = require('express');
const app = express();
const env = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//environment variable or constraints

env.config();

//mongodb connection
//mongodb+srv://root:<password>@cluster0.frptc.mongodb.net/<dbname>?retryWrites=true&w=majority
mongoose.connect(`mongodb://localhost:27017/${process.env.MONGO_DB_DATABASE}`, 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }).then(()=>{
        console.log('Database Connected');
    }).catch(Error);

app.use(express.json());

//app.use(bodyParser());

app.get('/', (req, res, next)=>{
    res.status(200).json({
        message : "Hello From Server"
    });
});

app.post('/data', (req, res, next)=>{
    res.status(200).json({
        message : req.body
    })
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});