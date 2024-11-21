import React from 'react';

const RecipeCard = ({ recipe }) => {
    const { name, image, video, ingredients } = recipe;

    return (
        <div className="recipe-card">
            <h2>{name}</h2>
            <img src={image} alt={name} />
            {video && <a href={video} target="_blank" rel="noopener noreferrer">Watch Video</a>}
            <ul className="ingredients-list">
                {ingredients && ingredients.length > 0 ? (
                    ingredients.map((ingredient, index) => {
                        const [amount, ...ingredientName] = ingredient.split(' ');
                        return (
                            <li key={index}>
                                <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>{amount}</span>
                                {' '}{ingredientName.join(' ')}
                            </li>
                        );
                    })
                ) : (
                    <li>No ingredients available</li>
                )}
            </ul>
        </div>
    );
};

export default RecipeCard;
