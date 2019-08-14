import React from 'react';
import InputForm from './InputForm'
import Recipe from './Recipe'
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
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  };

  onHandleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  };

  onHandleChangeAdd() {
    this.state.ingredients.push(this.state.ing);
    this.setState({ing: ""})
  };

  onHandleSubmit(event) {
    this.setState({showDataLoading: true});
    const api = "https://spoon-call.herokuapp.com/?ingredients=" + this.state.ingredients.join(',')
    // fetch(api)
    //   .then(promise => {
    //     return promise.json();
    //   }).then(data => {
    //     let recipes = data.map((recipe) => {
    //       return {id:recipe.id, title:recipe.title, image:recipe.image};
    //     });
    //     this.setState({recipes: recipes, showDataLoading: false})
    //   });
      const recipes = [
        {
            "id": 73420,
            "image": "https://spoonacular.com/recipeImages/73420-312x231.jpg",
            "title": "Apple Or Peach Strudel"
          },
        {
            "id": 632660,
            "image": "https://spoonacular.com/recipeImages/632660-312x231.jpg",
            "title": "Apricot Glazed Apple Tart"
        }
    ]
    this.setState({recipes: recipes, showDataLoading: false})
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
        <div>
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
export default RecipesList
