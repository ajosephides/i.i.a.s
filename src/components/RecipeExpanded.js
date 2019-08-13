import React from 'react';

class RecipeExpanded extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: [],
      ingredients: []
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.getIngredients()
    this.getInstructions()
  }

  getIngredients() {
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

  getInstructions() {
    const api = "https://spoon-call.herokuapp.com/instructions?id="+this.props.id
    fetch(api)
      .then(promise => {
        return promise.json();
      }).then(data => {
      let steps = data[0].steps.map((step) => {
          return <li key={step.number}>{step.step}</li>
        });
      this.setState({steps: steps})
      });
  }

  render() {
    return (
      <div>
        <ol>
          {this.state.steps}
        </ol>
        <ul>
          {this.state.ingredients}
        </ul>
      </div>
    )
  }
}

export default RecipeExpanded
