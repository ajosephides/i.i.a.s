import React from 'react';

class IngredientsList extends React.Component {
  render() {
    const props = this.props
    return (
      <ul>
      {props.ingredients.map((ingredient) => {
        <li>ingredient</li>
      }
      )};
      </ul>
    )
  }
}

export default Recipe