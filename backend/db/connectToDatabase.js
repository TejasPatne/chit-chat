import mongoose from 'mongoose';

const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connect to the MongoDB");
    } catch (error) {
        console.log("Error while connecting to MongoDB:", error)
    }
}

export default connectToDatabase;