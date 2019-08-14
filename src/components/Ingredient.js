import React from 'react';

class Ingredient extends React.Component {
  constructor(props) {
    super(props);
    this.deleteAt = this.deleteAt.bind(this);
  }

  deleteAt() {
    this.props.onDeleteAt(this.props.index);
  }

  render() {
    return (
     <li key={this.props.index}>
     <button id='delete-button' onClick={this.deleteAt}>x </button>
     {this.props.text}
     </li>
    )
  }
}
export default Ingredient
