import React, { Component } from 'react';

class RecipesList extends Component {
  constructor(props) {
    super(props);
    this.state = { api: ["P"]};
  }

  render() {
    return (
      <div>
        { this.state.api}
      </div>
    );
  };
};

export default RecipesList;
