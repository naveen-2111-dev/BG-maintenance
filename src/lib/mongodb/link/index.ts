//mongodb connection
import { MongoClient, ServerApiVersion } from "mongodb";

const URI = process.env.MONGODB_URI!;

const client = new MongoClient(URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function connect() {
    try {
        await client.connect();
        return client.db("bg-maintenance");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
}

async function GetCollection(collectionName: string) {
    const db = await connect();
    return db!.collection(collectionName);
}

export { GetCollection };