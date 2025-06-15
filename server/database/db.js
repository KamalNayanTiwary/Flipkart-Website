import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // load .env file

const Connection = async () => {
    const URL = process.env.MONGO_LOCAL_URI;

    try {
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("✅ Local MongoDB Connected Successfully");
    } catch (error) {
        console.log("❌ Error Connecting to MongoDB:", error.message);
    }
};

export default Connection;
