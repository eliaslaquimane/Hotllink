const User = require('../models/User');

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const newUser = await User.create({ name, email, password });
        console.log("User Registered:", newUser);

        res.json({
            message: "Registration successful",
            user: { id: newUser._id, name: newUser.name, email: newUser.email }
        });
    } catch (error) {
        console.error("Registration error:", error);
        res.status(500).json({ message: "Server error" });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email, password });
        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        console.log("User Logged In:", user);
        res.json({
            message: "Login successful",
            user: { id: user._id, name: user.name, email: user.email },
            token: "mock-jwt-token"
        });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { register, login };
