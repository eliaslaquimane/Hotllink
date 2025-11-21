const cars = require('../data/cars');
const translators = require('../data/translators');
const cityGuide = require('../data/cityGuide');

const getCars = (req, res) => {
    res.json(cars);
};

const getTranslators = (req, res) => {
    res.json(translators);
};

const getCityGuide = (req, res) => {
    res.json(cityGuide);
};

const tripPlanner = (req, res) => {
    const { destination, dates, preferences } = req.body;
    console.log("Trip Planner Request:", { destination, dates, preferences });
    res.json({ message: "Trip plan request received!", planId: Math.floor(Math.random() * 1000) });
};

const contact = (req, res) => {
    const { name, email, message } = req.body;
    console.log("Contact Form Submission:", { name, email, message });
    res.json({ message: "Message sent successfully!" });
};

module.exports = { getCars, getTranslators, getCityGuide, tripPlanner, contact };
