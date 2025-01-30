//express
const express=require('express');
const app=express();
//dotenv
const dotenv=require('dotenv');
dotenv.config();
const PORT=process.env.PORT;
const MONGO_URI=process.env.MONGO_URI
//mongoose-connect
const mongoose=require('mongoose');
mongoose.connect(MONGO_URI)
.then(()=>console.log('Connected to MongoDB'))
.catch((error)=>console.error('MongoDB connection error'));
//port-listening
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});