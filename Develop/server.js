const express = require('express');
const aRoutes = require('./routes/apiRoutes');
const hRoutes = require('./routes/htmlRoutes');
const uuidv1 = require('uuid').v1;

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3001;

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', aRoutes);
app.use('/', hRoutes);

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
