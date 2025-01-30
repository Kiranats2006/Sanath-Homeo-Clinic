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

//Endpoints-use
const appointmentRoutes=require('./routes/appointments')
app.use('/appointments', appointmentRoutes);
const branchRoutes=require('./routes/branches');
app.use('/branch',branchRoutes);
const notificationRoutes=require('./routes/notifications');
app.use('/notification', notificationRoutes);
const patientRoutes=require('./routes/patients');
app.use('/patients',patientRoutes);