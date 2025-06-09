const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route'); // Moved import above use()

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/products', productRoute);

// Root route
app.get('/', (req, res) => {
    res.send("Hello from Node API!");
});

// Connect to MongoDB
mongoose.connect('mongodb+srv://aniketaslaliya:admin@backenddb.oy7ujwi.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });
