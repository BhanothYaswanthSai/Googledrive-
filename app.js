const express = require('express');
const app = express();
const userRouter = require('./routes/user.routes')
const dotenv = require('dotenv');


dotenv.config();
const connectToDB= require('./config/db');
connectToDB();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Specify the views directory (optional if "views" is default)
app.set('views', __dirname + '/views');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Sample route
app.use('/user',userRouter);


app.listen(3000, () => console.log('Server is running on port 3000'));
