require('dotenv').config(); 
const express = require("express");
const app = express();
const PORT = process.env.PORT || 7001;
const cors = require("cors");
const mongoose = require("mongoose"); 
const corsOptions = require("./config/corsOptions"); 
const connectDB = require("./config/db"); 
app.use(cors(corsOptions));

console.log("start...");
connectDB();
app.use(express.json());



mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
mongoose.connection.on('error', err => {
    console.error("MongoDB connection error:", err);
   
});




