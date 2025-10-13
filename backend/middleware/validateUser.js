exports.validateSignup = (req, res, next) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: "All fields are required." });
    }

    // Additional validation logic can be added here (e.g., email format, password strength)

    next();
};

exports.validateSignin = (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required." });
    }

    // Additional validation logic can be added here (e.g., email format)

    next();
};