require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/config/db');

const port = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
