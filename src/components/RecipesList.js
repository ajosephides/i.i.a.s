import React from 'react';
import InputForm from './InputForm'
import Recipe from './Recipe'
import CurrentIngredient from './CurrentIngredient'
import DataLoading from './DataLoading'

class RecipesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      ing: '',
      ingredients: [],
      showDataLoading: false
    };
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleChangeAdd = this.onHandleChangeAdd.bind(this);
    this.onDeleteIngredient = this.onDeleteIngredient.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  };

  onHandleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  };

  onHandleChangeAdd() {
    const ingredients = this.state.ingredients
    ingredients.push(this.state.ing);
    this.setState({ing: ""})
  };

  onDeleteIngredient(index) {
    const ingredient = this.state.ingredients
    ingredient.splice(index, 1)
    this.setState({ ingredients: ingredient });
  }

  onHandleSubmit(event) {
    this.setState({showDataLoading: true});
    const api = "https://spoon-call.herokuapp.com/?ingredients=" + this.state.ingredients.join(',')
    fetch(api)
      .then(promise => {
        return promise.json();
      }).then(data => {
        let recipes = data.map((recipe) => {
          return {id:recipe.id, title:recipe.title, image:recipe.image};
        });
        this.setState({recipes: recipes, showDataLoading: false, ingredients: []})
      });
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <div>
          <h3 align='center' style={{fontFamily: '', marginTop: '10px'}}>It is always soup</h3>
        </div>
        <div>
          <InputForm ing={this.state.ing}
                     onHandleChange={this.onHandleChange}
                     onHandleChangeAdd={this.onHandleChangeAdd}
                     onHandleSubmit={this.onHandleSubmit} />
        </div>
        <div>
          <ul id='ing-list'>
            {this.state.ingredients.map((ingredient) => {
              return <CurrentIngredient key={this.state.ingredients.indexOf(ingredient)}
                                text={ingredient}
                                index={this.state.ingredients.indexOf(ingredient)}
                                onDeleteIngredient={this.onDeleteIngredient} />
            })}
          </ul>
        </div>
        <div >
        <ul>
          {this.state.recipes.map((recipe) =>{
            return <Recipe key={recipe.id}
                           id={recipe.id}
                           title={recipe.title}
                           image={recipe.image} />;
          })
          }
        </ul>
        </div>
        <div>
          <DataLoading showDataLoading={this.state.showDataLoading} />
        </div>
      </div>
    );
  }
};
export default RecipesList;
