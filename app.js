const express = require('express');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const connectToMongo = require('./db');

// Initialize the server
const PORT = process.env.PORT || 3000;
const app = express();
connectToMongo();

// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// Available routes
app.use("/api/users", require('./routes/users'));
app.use("/api/auth", require('./routes/auth'));
app.use("/api/posts", require('./routes/posts'));

app.listen(PORT, () => {
    console.log(`Server is live on http://localhost:${PORT}`);
});