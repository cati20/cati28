const express = require('express');
const connectDB = require('./config/db')

const app= express();

// Connect to mongo DB
connectDB();

//initialize middleware
app.use(express.json({extended: false}));

app.get('/',  (req ,res) => res.json({msg: 'Welcome to be-youtiful-nales API...'}));

//define routes
app.use('/api/clients' , require('./routes/client'));
app.use('/api/auth' , require('./routes/auth'));
app.use('/api/bookings' , require('./routes/booking'));

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

