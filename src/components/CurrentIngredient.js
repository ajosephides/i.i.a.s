import React from 'react';
import Clear from "@material-ui/icons/Clear"
import '../styles/currentIngredient.css'

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
     <li key={this.props.index} className='current-ingredient' >
      <button id='delete-ingredient' className='button-style' onClick={this.deleteIngredient}>
        <Clear />
      </button>
      {this.props.text}
     </li>
    )
  }
}

export default CurrentIngredient;
