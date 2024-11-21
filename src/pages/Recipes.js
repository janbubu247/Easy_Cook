import React, { useState, useEffect } from 'react';
import PreviousSearches from '../components/PreviousSearches';
import RecipeCard from '../components/RecipeCard';

export default function Recipes() {
    const [recipes, setRecipes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('Cake'); // Default search term
    const [previousSearches, setPreviousSearches] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
                const data = await response.json();
                if (data.meals) {
                    const mappedRecipes = data.meals.map(meal => ({
                        name: meal.strMeal,
                        image: meal.strMealThumb,
                        video: meal.strYoutube,
                        ingredients: Array.from({ length: 20 }, (_, i) => {
                            const ingredient = meal[`strIngredient${i + 1}`];
                            const measure = meal[`strMeasure${i + 1}`];
                            return ingredient ? `${measure} ${ingredient}`.trim() : null;
                        }).filter(Boolean),
                    }));
                    setRecipes(mappedRecipes.sort(() => Math.random() - 0.5).slice(0, 9)); // Shuffling and slicing to get 4 recipes
                } else {
                    setRecipes([]);
                }
            } catch (error) {
                console.error('Error fetching recipes:', error);
                setRecipes([]);
            }
        };
        fetchRecipes();
    }, [searchTerm]);

    const handleSearch = (term) => {
        setSearchTerm(term);
        setPreviousSearches(prev => [term, ...prev.filter(t => t !== term)]);
    };

    return (
        <div>
            <input 
                type="text" 
                value={searchTerm} 
                onChange={(e) => handleSearch(e.target.value)} 
                placeholder="Search for a recipe"
            />
            <PreviousSearches previousSearches={previousSearches} onSearch={handleSearch} />
            <div className="recipes-container">
                {recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
            </div>
        </div>
    );
}
