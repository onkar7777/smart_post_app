const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();
const postRouter = require('./routes/post');


mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true
})
.then(()=> console.log('Monogdb is connected'))
.catch(err=> console.log(err))

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/api', postRouter);


const port = process.env.PORT || 8000;
app.listen(port, ()=> console.log(`server is running on http://localhost:${port}`));