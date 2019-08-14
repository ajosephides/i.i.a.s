import React from 'react';

class Ingredients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: []
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    const api = "https://spoon-call.herokuapp.com/ingredients?id="+this.props.id
    fetch(api)
      .then(promise => {
        return promise.json();
      }).then(data => {
        let ingredients = data.extendedIngredients.map((ingredient) => {
            return <li key={ingredient.id}>{ingredient.original}</li>
          });
        this.setState({ingredients: ingredients})
      });
  }

  render() {
    return (
      <div>
        {this.state.ingredients}
      </div>
    )
  }
}

export default Ingredients
