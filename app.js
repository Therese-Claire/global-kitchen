require("dotenv").config();
const express = require("express");
const connectDB = require("./src/config/db");
const recipeRoutes = require("./src/routes/recipe.routes");

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());

connectDB();


app.get("/", (req, res) => {
  res.json({ message: "Welcome to The Global Kitchen API" });
});


app.use("/recipes", recipeRoutes);


app.use((err, req, res, next) => {
    console.error(`Error:, ${err.message}`);
    res.status(err.status || 500).json({
        success: false,
        message: err.message || "Internal Server Error",
    });
});


// Start listening for requests
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


