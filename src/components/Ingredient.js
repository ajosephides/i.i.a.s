import React from 'react';

class Ingredient extends React.Component {
  constructor(props) {
    super(props);
    this.deleteIngredient = this.deleteIngredient.bind(this);
  }

  deleteIngredient() {
    this.props.onDeleteIngredient(this.props.index);
  }

  render() {
    return (
     <li key={this.props.index}>
     <button id='delete-button' onClick={this.deleteIngredient}>x </button>
     {this.props.text}
     </li>
    )
  }
}
export default Ingredient
