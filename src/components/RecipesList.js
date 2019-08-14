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
    // const api = "https://spoon-call.herokuapp.com/?ingredients=" + this.state.ingredients.join(',')
    // fetch(api)
    //   .then(promise => {
    //     return promise.json();
    //   }).then(data => {
    //     let recipes = data.map((recipe) => {
    //       return {id:recipe.id, title:recipe.title, image:recipe.image};
    //     });
    //     this.setState({recipes: recipes, showDataLoading: false})
    //   });
    let recipes = testRecipes.map((recipe) => {
      return {id:recipe.id, title:recipe.title, image:recipe.image};
    });
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
            <ul id="recipe-list" style={{paddingInlineStart: 0}}>
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

var testRecipes = [
    {
        "id": 73420,
        "image": "https://spoonacular.com/recipeImages/73420-312x231.jpg",
        "imageType": "jpg",
        "likes": 0,
        "missedIngredientCount": 3,
        "missedIngredients": [
            {
                "aisle": "Baking",
                "amount": 1.0,
                "id": 18371,
                "image": "https://spoonacular.com/cdn/ingredients_100x100/white-powder.jpg",
                "metaInformation": [],
                "name": "baking powder",
                "original": "1 tsp baking powder",
                "originalName": "baking powder",
                "originalString": "1 tsp baking powder",
                "unit": "tsp",
                "unitLong": "teaspoon",
                "unitShort": "tsp"
            },
            {
                "aisle": "Spices and Seasonings",
                "amount": 1.0,
                "id": 2010,
                "image": "https://spoonacular.com/cdn/ingredients_100x100/cinnamon.jpg",
                "metaInformation": [],
                "name": "cinnamon",
                "original": "1 tsp cinnamon",
                "originalName": "cinnamon",
                "originalString": "1 tsp cinnamon",
                "unit": "tsp",
                "unitLong": "teaspoon",
                "unitShort": "tsp"
            },
            {
                "aisle": "Milk, Eggs, Other Dairy",
                "amount": 1.0,
                "id": 1123,
                "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png",
                "metaInformation": [],
                "name": "egg",
                "original": "1 egg",
                "originalName": "egg",
                "originalString": "1 egg",
                "unit": "",
                "unitLong": "",
                "unitShort": ""
            }
        ],
        "title": "Apple Or Peach Strudel",
        "unusedIngredients": [],
        "usedIngredientCount": 1,
        "usedIngredients": [
            {
                "aisle": "Produce",
                "amount": 6.0,
                "id": 9003,
                "image": "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg",
                "metaInformation": [],
                "name": "apples",
                "original": "6 large baking apples",
                "originalName": "baking apples",
                "originalString": "6 large baking apples",
                "unit": "large",
                "unitLong": "larges",
                "unitShort": "large"
            }
        ]
    },
    {
        "id": 632660,
        "image": "https://spoonacular.com/recipeImages/632660-312x231.jpg",
        "imageType": "jpg",
        "likes": 3,
        "missedIngredientCount": 4,
        "missedIngredients": [
            {
                "aisle": "Milk, Eggs, Other Dairy",
                "amount": 1.5,
                "extendedName": "unsalted butter",
                "id": 1001,
                "image": "https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg",
                "metaInformation": [
                    "unsalted",
                    "cold"
                ],
                "name": "butter",
                "original": "1 1/2 sticks cold unsalted butter cold unsalted butter<",
                "originalName": "cold unsalted butter cold unsalted butter<",
                "originalString": "1 1/2 sticks cold unsalted butter cold unsalted butter<",
                "unit": "sticks",
                "unitLong": "sticks",
                "unitShort": "sticks"
            },
            {
                "aisle": "Produce",
                "amount": 4.0,
                "id": 1079003,
                "image": "https://spoonacular.com/cdn/ingredients_100x100/red-delicious-apples.png",
                "metaInformation": [
                    "red",
                    " such as golden delicious, peeled, cored and cut into 1/4-inch-thick slices "
                ],
                "name": "red apples",
                "original": "4 larges red apples, such as Golden Delicious, peeled, cored and cut into 1/4-inch-thick slices",
                "originalName": "s red apples, such as Golden Delicious, peeled, cored and cut into 1/4-inch-thick slices",
                "originalString": "4 larges red apples, such as Golden Delicious, peeled, cored and cut into 1/4-inch-thick slices",
                "unit": "large",
                "unitLong": "larges",
                "unitShort": "large"
            },
            {
                "aisle": "Spices and Seasonings",
                "amount": 2.0,
                "id": 2010,
                "image": "https://spoonacular.com/cdn/ingredients_100x100/cinnamon.jpg",
                "metaInformation": [],
                "name": "cinnamon",
                "original": "2 teaspoons cinnamon",
                "originalName": "cinnamon",
                "originalString": "2 teaspoons cinnamon",
                "unit": "teaspoons",
                "unitLong": "teaspoons",
                "unitShort": "tsp"
            },
            {
                "aisle": "Nut butters, Jams, and Honey",
                "amount": 2.0,
                "id": 19719,
                "image": "https://spoonacular.com/cdn/ingredients_100x100/apricot-jam.jpg",
                "metaInformation": [
                    "melted"
                ],
                "name": "apricot preserves",
                "original": "2 tablespoons apricot preserves, melted and strained",
                "originalName": "apricot preserves, melted and strained",
                "originalString": "2 tablespoons apricot preserves, melted and strained",
                "unit": "tablespoons",
                "unitLong": "tablespoons",
                "unitShort": "Tbsp"
            }
        ],
        "title": "Apricot Glazed Apple Tart",
        "unusedIngredients": [
            {
                "aisle": "Produce",
                "amount": 1.0,
                "id": 9003,
                "image": "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg",
                "metaInformation": [],
                "name": "apples",
                "original": "apples",
                "originalName": "apples",
                "originalString": "apples",
                "unit": "serving",
                "unitLong": "serving",
                "unitShort": "serving"
            }
        ],
        "usedIngredientCount": 0,
        "usedIngredients": []
    }
]
