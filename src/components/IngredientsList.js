import React from 'react';

class IngredientsList extends React.Component {
  render() {
    const props = this.props
    return (
      <ul id='ingredients'>
      {props.ingredients.map((ingredient) => {
        return <li key={ingredient}>{ingredient}</li>
      }
      )}
      </ul>
    )
  }
}
export default IngredientsList
