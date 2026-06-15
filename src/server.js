const express = require("express");
require("dotenv").config();

const employeeRoutes = require("./routes/employeeRoutes");
const errorHandler = require("./middlewares/errorHandler");

require("./config/db");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Employee Management API Running");
});

app.use("/employees", employeeRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});