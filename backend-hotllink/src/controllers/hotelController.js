const Hotel = require('../models/Hotel');

const getHotels = async (req, res) => {
    try {
        const hotels = await Hotel.find();
        res.json(hotels);
    } catch (error) {
        console.error("Error fetching hotels:", error);
        res.status(500).json({ message: "Server error" });
    }
};

const getHotelById = async (req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        if (!hotel) {
            return res.status(404).json({ message: "Hotel not found" });
        }
        res.json(hotel);
    } catch (error) {
        console.error("Error fetching hotel:", error);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { getHotels, getHotelById };
