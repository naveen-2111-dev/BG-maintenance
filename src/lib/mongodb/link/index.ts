import { Collection, MongoClient, ServerApiVersion, Document } from "mongodb";

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

async function GetCollection<T extends Document>(collectionName: string): Promise<Collection<T>> {
    const db = await connect();
    return db!.collection<T>(collectionName);
}

export { GetCollection };