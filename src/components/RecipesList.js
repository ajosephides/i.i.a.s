import React from 'react';
import InputForm from './InputForm'
import Recipe from './Recipe'

class RecipesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      ing: '',
      ingredients: []
    };
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleChangeAdd = this.onHandleChangeAdd.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  };

  onHandleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  };

  onHandleChangeAdd() {
    this.state.ingredients.push(this.state.ing);
    console.log(this.state.ingredients)
  };

  onHandleSubmit(event) {
    console.log(this.state.ingredients.join(','))
    const api = "https://spoon-call.herokuapp.com/?ingredients=" + this.state.ingredients.join(',')
    fetch(api)
      .then(promise => {
        return promise.json();
      }).then(data => {
        console.log(data)
        let recipes = data.map((recipe) => {
          return {id:recipe.id, title:recipe.title, image:recipe.image};
        });
        this.setState({recipes: recipes})
      });
    event.preventDefault();
  };


  render() {
    return (
      <div>
        <div>
          <InputForm ing={this.state.ing}
                     onHandleChange={this.onHandleChange}
                     onHandleChangeAdd={this.onHandleChangeAdd}
                     onHandleSubmit={this.onHandleSubmit}
                     />
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
};

export default RecipesList
