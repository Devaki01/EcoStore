// filepath: signup-signin-app/signup-signin-app/backend/controllers/authController.js

const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

// Path to the user data file
const userDataPath = path.join(__dirname, '../data/users.json');

// Function to read user data from JSON file
const readUserData = () => {
    if (!fs.existsSync(userDataPath)) {
        return [];
    }
    const data = fs.readFileSync(userDataPath);
    return JSON.parse(data);
};

// Function to write user data to JSON file
const writeUserData = (data) => {
    fs.writeFileSync(userDataPath, JSON.stringify(data, null, 2));
};

// Signup function
exports.signup = async (req, res) => {
    const { username, email, password } = req.body;

    // Validate user input
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const users = readUserData();
    const existingUser = users.find(user => user.email.toLowerCase() === email.toLowerCase());

    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { username, email: email.toLowerCase(), password: hashedPassword };
    users.push(newUser);
    writeUserData(users);

    return res.status(201).json({ message: 'User registered successfully' });
};

// Signin function
exports.signin = async (req, res) => {
    const { email, password } = req.body;

    // Validate user input
    if (!email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const users = readUserData();
    const user = users.find(user => user.email.toLowerCase() === email.toLowerCase());

    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Do not return password
    const { password: _, ...userWithoutPassword } = user;
    return res.status(200).json({ message: 'User signed in successfully', user: userWithoutPassword });
};