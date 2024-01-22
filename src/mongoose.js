const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const  {MongoClient} = require('mongodb');
const { log } = require("handlebars");

const uri = "mongodb+srv://test:2bt.vsp.wVj7THV@atlascluster.szuql7f.mongodb.net/";

// import { MongoClient } from 'mongodb';

/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

// const filter = {
//   'username': 'fmiller'
// };

// const client = await MongoClient.connect(
//   'mongodb+srv://test:2bt.vsp.wVj7THV@atlascluster.szuql7f.mongodb.net/'
// );
// const coll = client.db('sample_analytics').collection('customers');
// const cursor = coll.find(filter);
// const result = await cursor.toArray();
// await client.close();

const client  = new MongoClient(uri);

client.connect().then(() => {
    console.log("Connected successfully to server");
})

const coll = client.db('sample_analytics').collection('customers');

const filter = {
    'username': 'fmiller'
  };

coll.find(filter).toArray().then((result) => {
    console.log(result);
    client.close();
});