const express = require('express');
const cors = require('cors');
const authRoutes = require('./Routes/authRoutes'); // Make sure the path matches your folder name

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.use('/api/auth', authRoutes);

// Health check or test route
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from the backend! 👋' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});