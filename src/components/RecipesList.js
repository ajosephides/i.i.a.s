import React from 'react';
import InputForm from './InputForm'
import Recipe from './Recipe'

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
    const ingredients = [this.state['ing1'],this.state['ing2'],this.state['ing3']].join(',')
    const api = "https://spoon-call.herokuapp.com/?ingredients=" + ingredients
    fetch(api)
      .then(promise => {
        return promise.json();
      }).then(data => {
        let recipes = data.map((recipe) => {
          return {id:recipe.id, title:recipe.title, image:recipe.image};
        });
        this.setState({recipes: recipes})
      });
    event.preventDefault();
  }


  render() {
    return (
      <div>
        <div>
          <InputForm ing1={this.state.ing1}
                     ing2={this.state.ing2}
                     ing3={this.state.ing3}
                     onHandleChange={this.onHandleChange}
                     onHandleSubmit={this.onHandleSubmit}
                     />
        </div>
        <div id='ing-list'>
          <IngredientsList ingredients={this.state.ingredients} />
        </div>
        <ul>
          {this.state.recipes.map((recipe) =>{
            return <Recipe key={recipe.id}
                           title={recipe.title}
                           image={recipe.image} />;
          })
          }
        </ul>
      </div>
    );
  }
}

export default RecipesList
