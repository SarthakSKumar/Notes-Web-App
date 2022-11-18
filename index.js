const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
// Mongoose to MongoDB
const uri = process.env.MONGODB_URI || 'mongodb+srv://sarthakskumar:9742913699@notes-web-app.x3ycmcm.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to remote database (MongoDB)');
});

// Variables
const port = process.env.PORT || 5000;

// Routes
const notesRoutes = require('./routes/notes');
app.use('/api', notesRoutes);

// For deployment
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
    console.log('\n-----------NOTE-TAKING WEB APP-----------');
    console.log('   CSE Sem-3 Web Technologies Project\n');
    console.log(':) Sarthak S Kumar\n:) Satyam Kumar\n:) Sathish Kumar G');
    console.log('-----------------------------------------');
    console.log('Express server running on port 5000 (Local Deployment PORT)');
});
