const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("🚀 Node.js API is running on Render!");
});

app.post('/login', (req, res) => {

    console.log("RAW BODY:", req.body);

    let username = String(req.body.username || "").trim();
    let password = String(req.body.password || "").trim();

    console.log("USERNAME:", username);
    console.log("PASSWORD:", password);

    if (username === "admin" && password === "1234") {
        return res.json({
            status: "success",
            message: "Login successful"
        });
    }

    res.json({
        status: "failed",
        message: "Invalid credentials"
    });
});

app.get('/data', (req, res) => {
    res.json({
        app: "Sketchware Backend",
        version: "1.0",
        status: "online"
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
