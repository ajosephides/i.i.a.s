import React from 'react';
import InputForm from './InputForm'
import Recipe from './Recipe'
const Api_Key = process.env.React_App_Api_Key

class RecipesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      ing1: '',
      ing2: '',
      ing3: ''
    };

    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }


  onHandleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  onHandleSubmit(event) {
    const ingredients = [this.state['ing1'],this.state['ing2'],this.state['ing3']].join(',+')
    const api = 'https://api.spoonacular.com/recipes/findByIngredients?ingredients='+ ingredients +'&number=5&' + Api_Key;
    fetch(api)
      .then(promise => {
        return promise.json();
      }).then(data => {
        let recipes = data.map((recipe) => {
          return <Recipe key={recipe.id} recipe={recipe} />;
        });
        this.setState({recipes: recipes})
        console.log(this.state)
      });
    event.preventDefault();
  }


  render() {
    return (
      <div>
      <InputForm ing1={this.state.ing1}
                 ing2={this.state.ing2}
                 ing3={this.state.ing3}
                 onHandleChange={this.onHandleChange}
                 onHandleSubmit={this.onHandleSubmit}
                 />

      <div>{this.state.recipes}</div>

      </div>
    );
  }
}

export default RecipesList
