const express = require('express');

const app= express();

app.get('/',  (req ,res) => res.json({msg: 'Welcome to be-youtiful-nales API...'}));

//define routes
app.use('/api/clients' , require('./routes/clients'));
app.use('/api/auth' , require('./routes/auth'));
app.use('/api/bookings' , require('./routes/bookings'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

