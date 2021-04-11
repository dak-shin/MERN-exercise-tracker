const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const userRouter = require('./routes/users');
const exRouter = require('./routes/exercises');

// import userModel from './models/user.model';
// import exModel from './models/exercise.model';

require('dotenv').config();
 
const app = express();

const port = 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.once('open',()=>{
    console.log('Connection has been eastablished succesfully.');
})

app.use('/users',userRouter);
app.use('/exercises',exRouter);


app.listen(port, () => {

    console.log(`Server is running on port number ${port}`);

})