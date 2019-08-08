import React from 'react';

class Recipe extends React.Component {
  render() {
    const recipe = this.props.recipe;
    console.log(recipe);
    return (
      <div>
        <h1>{recipe.title}</h1>
        <img alt={recipe.title}  src={recipe.image}/>
      </div>
    )
  }
}

export default Recipe
