const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, trim: true },
        ingredients: {type: [String], required: true},
        instructions: { type: String, required: true, trim: true },
        cuisine: { type: String, trim: true },
        cookingTime: { type: Number, required: true, min: 1 },
        difficulty: { type: String, enum: {
            values:["Easy", "Medium", "Hard"], 
            message: "Difficulty must be 'Easy', 'Medium', or 'Hard'"
        },},
        category: { type: String, required: true, trim: true },
    },
    { timestamps: true }
);

recipeSchema.index({ category: 1 });

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;