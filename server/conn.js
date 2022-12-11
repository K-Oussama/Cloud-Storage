require("dotenv").config({ path: "./config.env" });
const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI; // "mongodb+srv://KOussama:7lCWUmzAZbCw0u5R@myfirstcluster.ju8yrvu.mongodb.net/test" //
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
var _db;
 
module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db)
      {
        _db = db.db(process.env.DATABASE_NAME);
        console.log("Successfully connected to MongoDB."); 

      }
      return callback(err);
         });
  },
 
  getDb: function () {
    return _db;
  },
};