const express = require('express');
const mongoose = require('mongoose');

// const configHandlebars = require('./config/configHandlebars');
// const configExpress = require('./config/configExpress');
const routes = require('./routes');

const app = express();
const port = 5000;
// const uri = "mongodb+srv://test:2bt.vsp.wVj7THV@atlascluster.szuql7f.mongodb.net/";
const localURI = 'mongodb://localhost:27017/magic-movies'


mongoose.connect(localURI).then((res)=>{
    console.log("Connected to DB");
}).catch((err)=>{
    console.log(err);
})

app.use(routes);

app.listen(port,(res)=>{
    console.log(`App is running on port ${port}\nhttp://localhost:${port}`);
})