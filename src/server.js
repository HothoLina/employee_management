const express = require("express");
require("dotenv").config();

const db = require("./config/db");

const employeeRoutes = require("./routes/employeeRoutes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Employee Management API Running");
});

app.use("/employees", employeeRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});