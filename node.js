app.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    console.log(username, password); // IMPORTANT for debugging

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
