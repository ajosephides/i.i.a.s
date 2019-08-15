import React from 'react';
import Clear from "@material-ui/icons/Clear";

class CurrentIngredient extends React.Component {
  constructor(props) {
    super(props);
    this.deleteIngredient = this.deleteIngredient.bind(this);
  }

  deleteIngredient() {
    this.props.onDeleteIngredient(this.props.index);
  }

  render() {
    return (
     <li key={this.props.index} style={{color: 'white'}} >
      <button id='delete-ingredient' style={{background: 'transparent', border: 'none', color: 'white'}} onClick={this.deleteIngredient}>
        <Clear />
      </button>
      {this.props.text}
     </li>
    )
  }
}
export default CurrentIngredient;
