import mongoose from "mongoose"

mongoose.connect("mongodb+srv://alissonK:102030@alura-node.munx574.mongodb.net/alura-node");

let db = mongoose.connection

export default db;