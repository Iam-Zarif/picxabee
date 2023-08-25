import { MongoClient } from "mongodb";
let isConnected = false;

const DBConnect = async () => {
  
  try {
    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri);
    const database = client.db("picxabee");
    return database;
  
  } catch (err) {
    console.log(err.name,err.message);
  }
};

export default DBConnect;