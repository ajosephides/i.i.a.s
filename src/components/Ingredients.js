import React from 'react';
import '../styles/Ingredients.css';

class Ingredients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: []
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
    this.abortController = new AbortController()
  }

  componentDidMount() {
    const api = "https://spoon-call.herokuapp.com/ingredients?id="+this.props.id
    fetch(api, {signal: this.abortController.signal})
      .then(promise => {
        return promise.json();
      }).then(data => {
        let ingredients = data.extendedIngredients.map((ingredient) => {
            return <li className="recipe-ingredient-individual" key={ingredient.id}>{ingredient.original}</li>
          });
        this.setState({ingredients: ingredients})
      }).catch(err => {
        if (err.name === 'AbortError') return
        throw err
      })
  }

  componentWillUnmount() {
    this.abortController.abort()
  }

  render() {
    return (
      <div className="recipe-ingredients">
        {this.state.ingredients}
      </div>
    )
  }
}

export default Ingredients
