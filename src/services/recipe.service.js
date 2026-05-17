const Recipe = require("../models/recipe.models");


const getAllRecipes = async (category) => {
    const filter = category ? { category } : {};
    return await Recipe.find(filter);
};


const getRecipeById = async (id) => {
    return await Recipe.findById(id);
};

const createRecipe = async (recipeData) => {
    const recipe = new Recipe(recipeData);
    return await recipe.save();
};


const updateRecipe = async (id, updateData) => {
    return await Recipe.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
};


const deleteRecipe = async (id) => {
    return await Recipe.findByIdAndDelete(id);
};

module.exports = {
    getAllRecipes,
    getRecipeById,
    createRecipe,
    updateRecipe,
    deleteRecipe,
};