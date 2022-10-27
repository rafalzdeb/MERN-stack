require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose');

//routes import
const eventsRoutes = require('./routes/events')

//express app
const app = express()


//MIDDLEWARE

//*JSON parser*
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})



//routes
app.use('/api/events',eventsRoutes);

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        //listen for requests
        app.listen(process.env.PORT, () => {
        console.log('connected to db');
        console.log('listening on port', process.env.PORT)
})
    })
    .catch((err) => {
        console.log(err)
    })


    // const { MongoClient, ServerApiVersion } = require('mongodb');
    // const uri = process.env.MONGO_URI;
    // const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    // client.connect(err => {
    //   const collection = client.db("test").collection("devices");
    //   console.log(collection.dbName);
    //   // perform actions on the collection object
    //   client.close();
    // });
    
