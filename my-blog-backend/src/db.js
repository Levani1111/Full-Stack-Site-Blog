import { MongoClient } from "mongodb";

let db;

async function connectToDb(cb) {
    const client = new MongoClient(`mongodb+srv://${process.env.MONGO_UERNAME}:${process.env.MONGO_PASSWORD}@cluster0.yxqtisl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
    await client.connect();
    db = client.db("react-blog-db");
    cb();
}

export { db, connectToDb };
