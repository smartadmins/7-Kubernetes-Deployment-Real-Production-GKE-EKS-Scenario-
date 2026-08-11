const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;
const APP_ENV = process.env.APP_ENV || "development";

app.get("/", (req, res) => {
    res.json({
        message: "Backend API running",
        environment: APP_ENV,
        hostname: require("os").hostname()
    });
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "healthy"
    });
});

app.get("/users", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Sudheesh"
        },
        {
            id: 2,
            name: "DevOps Engineer"
        }
    ]);
});

app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});