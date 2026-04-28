app.post('/login', (req, res) => {

    console.log("===== REQUEST RECEIVED =====");
    console.log("HEADERS:", req.headers);
    console.log("BODY:", req.body);

    const username = req.body.username;
    const password = req.body.password;

    console.log("USERNAME:", username);
    console.log("PASSWORD:", password);

    res.json({
        received: req.body,
        username: username,
        password: password
    });
});
