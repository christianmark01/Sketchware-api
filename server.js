const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// 🌐 Test route (check if server is online)
app.get('/', (req, res) => {
    res.send("🚀 Node.js API is running on Render!");
});

// 🔐 Login API (Sketchware example)
app.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    // Simple demo login check
    if (username === "admin" && password === "1234") {
        res.json({
            status: "success",
            message: "Login successful"
        });
    } else {
        res.json({
            status: "failed",
            message: "Invalid credentials"
        });
    }
});

// 📦 Example data API
app.get('/data', (req, res) => {
    res.json({
        app: "Sketchware Backend",
        version: "1.0",
        status: "online"
    });
});

// Render port setup (IMPORTANT)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
