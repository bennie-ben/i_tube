import mongoose from "mongoose";
require("dotenv").config();

mongoose.connect(process.env.MONGO_KEY, {useNewUrlParser: true, useFindAndModify: false});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => console.log("✨  MongoDB is Connected"));

export default db;