
import mongoose from "mongoose";

export const connnectToMongoose = async () => {
    try {
        await mongoose.connect("mongodb+srv://famdizan8391:2OyYjngmY2NBBgZX@cluster0.kn9rmf3.mongodb.net/?retryWrites=true&w=majority");
        console.log("Mongodb connection successfull");
    } catch (err) {
        console.log("mongodb connection fails");
        console.log(err);
    }
}