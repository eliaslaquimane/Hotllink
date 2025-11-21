const Booking = require('../models/Booking');

const createBooking = async (req, res) => {
    try {
        const { hotelId, hotelName, checkIn, checkOut, guests, totalPrice, userId } = req.body;

        const newBooking = await Booking.create({
            hotelId,
            hotelName,
            checkIn,
            checkOut,
            guests,
            totalPrice,
            userId,
            status: 'confirmed'
        });

        console.log("New Booking Created:", newBooking);
        res.status(201).json({ message: "Booking successful", booking: newBooking });
    } catch (error) {
        console.error("Booking error:", error);
        res.status(500).json({ message: "Server error" });
    }
};

const getUserBookings = async (req, res) => {
    try {
        const userId = req.query.userId;
        if (!userId) {
            return res.status(400).json({ message: "User ID is required" });
        }

        const userBookings = await Booking.find({ userId });
        res.json(userBookings);
    } catch (error) {
        console.error("Error fetching bookings:", error);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { createBooking, getUserBookings };
