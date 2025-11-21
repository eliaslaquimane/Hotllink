require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./src/config/db');
const Hotel = require('./src/models/Hotel');
const hotelsData = require('./src/data/hotels');

const seedData = async () => {
    try {
        await connectDB();

        // Clear existing data
        await Hotel.deleteMany({});
        console.log('Cleared existing hotels');

        // Insert hotels
        await Hotel.insertMany(hotelsData);
        console.log('Hotels seeded successfully');

        process.exit(0);
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
};

seedData();
