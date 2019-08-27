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
    this.abortController = new AbortController();
  }

  componentDidMount() {
    // const api = "https://spoon-call.herokuapp.com/ingredients?id="+this.props.id
    // fetch(api, {signal: this.abortController.signal})
    //   .then(promise => {
    //     return promise.json();
    //   }).then(data => {
    //     let ingredients = data.extendedIngredients.map((ingredient) => {
    //         return <li className="recipe-ingredient-individual" key={ingredient.id}>{ingredient.original}</li>
    //       });
    //     this.setState({ingredients: ingredients})
    //   }).catch(err => {
    //     if (err.name === 'AbortError') return
    //     throw err
    //   })
    let ingredients = testIngredients.extendedIngredients.map((ingredient) => {
      return <li key={ingredient.id} className="recipe-ingredient-individual" >{ingredient.original}</li>
    });
  this.setState({ingredients: ingredients})
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


var testIngredients = {
  "id": 716429,
  "title": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
  "image": "https://spoonacular.com/recipeImages/716429-556x370.jpg",
  "imageType": "jpg",
  "servings": 2,
  "readyInMinutes": 45,
  "license": "CC BY-SA 3.0",
  "sourceName": "Full Belly Sisters",
  "sourceUrl": "http://fullbellysisters.blogspot.com/2012/06/pasta-with-garlic-scallions-cauliflower.html",
  "spoonacularSourceUrl": "https://spoonacular.com/pasta-with-garlic-scallions-cauliflower-breadcrumbs-716429",
  "aggregateLikes": 209,
  "healthScore": 19.0,
  "spoonacularScore": 83.0,
  "pricePerServing": 163.15,
  "analyzedInstructions": [],
  "cheap": false,
  "creditsText": "Full Belly Sisters",
  "cuisines": [],
  "dairyFree": false,
  "diets": [],
  "gaps": "no",
  "glutenFree": false,
  "instructions": "",
  "ketogenic": false,
  "lowFodmap": false,
  "occasions": [],
  "sustainable": false,
  "vegan": false,
  "vegetarian": false,
  "veryHealthy": false,
  "veryPopular": false,
  "whole30": false,
  "weightWatcherSmartPoints": 17,
  "dishTypes": [
      "lunch",
      "main course",
      "main dish",
      "dinner"
  ],
  "extendedIngredients": [
      {
          "aisle": "Milk, Eggs, Other Dairy",
          "amount": 1.0,
          "consitency": "solid",
          "id": 1001,
          "image": "butter-sliced.jpg",
          "measures": {
              "metric": {
                  "amount": 1.0,
                  "unitLong": "Tbsp",
                  "unitShort": "Tbsp"
              },
              "us": {
                  "amount": 1.0,
                  "unitLong": "Tbsp",
                  "unitShort": "Tbsp"
              }
          },
          "meta": [],
          "metaInformation": [],
          "name": "butter",
          "original": "1 tbsp butter",
          "originalName": "butter",
          "originalString": "1 tbsp butter",
          "unit": "tbsp"
      },
      {
          "aisle": "Produce",
          "amount": 2.0,
          "consitency": "solid",
          "id": 10011135,
          "image": "cauliflower.jpg",
          "measures": {
              "metric": {
                  "amount": 473.176,
                  "unitLong": "milliliters",
                  "unitShort": "ml"
              },
              "us": {
                  "amount": 2.0,
                  "unitLong": "cups",
                  "unitShort": "cups"
              }
          },
          "meta": [
              "frozen",
              "thawed",
              "cut into bite-sized pieces"
          ],
          "metaInformation": [
              "frozen",
              "thawed",
              "cut into bite-sized pieces"
          ],
          "name": "cauliflower florets",
          "original": "about 2 cups frozen cauliflower florets, thawed, cut into bite-sized pieces",
          "originalName": "about frozen cauliflower florets, thawed, cut into bite-sized pieces",
          "originalString": "about 2 cups frozen cauliflower florets, thawed, cut into bite-sized pieces",
          "unit": "cups"
      },
      {
          "aisle": "Cheese",
          "amount": 2.0,
          "consitency": "solid",
          "id": 1041009,
          "image": "cheddar-cheese.png",
          "measures": {
              "metric": {
                  "amount": 2.0,
                  "unitLong": "Tbsps",
                  "unitShort": "Tbsps"
              },
              "us": {
                  "amount": 2.0,
                  "unitLong": "Tbsps",
                  "unitShort": "Tbsps"
              }
          },
          "meta": [
              "grated",
              "(I used romano)"
          ],
          "metaInformation": [
              "grated",
              "(I used romano)"
          ],
          "name": "cheese",
          "original": "2 tbsp grated cheese (I used romano)",
          "originalName": "grated cheese (I used romano)",
          "originalString": "2 tbsp grated cheese (I used romano)",
          "unit": "tbsp"
      },
      {
          "aisle": "Oil, Vinegar, Salad Dressing",
          "amount": 1.0,
          "consitency": "liquid",
          "id": 1034053,
          "image": "olive-oil.jpg",
          "measures": {
              "metric": {
                  "amount": 1.0,
                  "unitLong": "Tbsp",
                  "unitShort": "Tbsp"
              },
              "us": {
                  "amount": 1.0,
                  "unitLong": "Tbsp",
                  "unitShort": "Tbsp"
              }
          },
          "meta": [],
          "metaInformation": [],
          "name": "extra virgin olive oil",
          "original": "1-2 tbsp extra virgin olive oil",
          "originalName": "extra virgin olive oil",
          "originalString": "1-2 tbsp extra virgin olive oil",
          "unit": "tbsp"
      },
      {
          "aisle": "Produce",
          "amount": 5.0,
          "consitency": "solid",
          "id": 11215,
          "image": "garlic.jpg",
          "measures": {
              "metric": {
                  "amount": 5.0,
                  "unitLong": "cloves",
                  "unitShort": "cloves"
              },
              "us": {
                  "amount": 5.0,
                  "unitLong": "cloves",
                  "unitShort": "cloves"
              }
          },
          "meta": [],
          "metaInformation": [],
          "name": "garlic",
          "original": "5-6 cloves garlic",
          "originalName": "garlic",
          "originalString": "5-6 cloves garlic",
          "unit": "cloves"
      },
      {
          "aisle": "Pasta and Rice",
          "amount": 6.0,
          "consitency": "solid",
          "id": 20420,
          "image": "fusilli.jpg",
          "measures": {
              "metric": {
                  "amount": 170.097,
                  "unitLong": "grams",
                  "unitShort": "g"
              },
              "us": {
                  "amount": 6.0,
                  "unitLong": "ounces",
                  "unitShort": "oz"
              }
          },
          "meta": [
              "(I used linguine)"
          ],
          "metaInformation": [
              "(I used linguine)"
          ],
          "name": "pasta",
          "original": "6-8 ounces pasta (I used linguine)",
          "originalName": "pasta (I used linguine)",
          "originalString": "6-8 ounces pasta (I used linguine)",
          "unit": "ounces"
      },
      {
          "aisle": "Spices and Seasonings",
          "amount": 2.0,
          "consitency": "solid",
          "id": 1032009,
          "image": "red-pepper-flakes.jpg",
          "measures": {
              "metric": {
                  "amount": 2.0,
                  "unitLong": "pinches",
                  "unitShort": "pinches"
              },
              "us": {
                  "amount": 2.0,
                  "unitLong": "pinches",
                  "unitShort": "pinches"
              }
          },
          "meta": [
              "red"
          ],
          "metaInformation": [
              "red"
          ],
          "name": "red pepper flakes",
          "original": "couple of pinches red pepper flakes, optional",
          "originalName": "couple of red pepper flakes, optional",
          "originalString": "couple of pinches red pepper flakes, optional",
          "unit": "pinches"
      },
      {
          "aisle": "Spices and Seasonings",
          "amount": 2.0,
          "consitency": "solid",
          "id": 1102047,
          "image": "salt-and-pepper.jpg",
          "measures": {
              "metric": {
                  "amount": 2.0,
                  "unitLong": "servings",
                  "unitShort": "servings"
              },
              "us": {
                  "amount": 2.0,
                  "unitLong": "servings",
                  "unitShort": "servings"
              }
          },
          "meta": [
              "to taste"
          ],
          "metaInformation": [
              "to taste"
          ],
          "name": "salt and pepper",
          "original": "salt and pepper, to taste",
          "originalName": "salt and pepper, to taste",
          "originalString": "salt and pepper, to taste",
          "unit": "servings"
      },
      {
          "aisle": "Produce",
          "amount": 3.0,
          "consitency": "solid",
          "id": 11291,
          "image": "spring-onions.jpg",
          "measures": {
              "metric": {
                  "amount": 3.0,
                  "unitLong": "",
                  "unitShort": ""
              },
              "us": {
                  "amount": 3.0,
                  "unitLong": "",
                  "unitShort": ""
              }
          },
          "meta": [
              "white",
              "green",
              "separated",
              "chopped"
          ],
          "metaInformation": [
              "white",
              "green",
              "separated",
              "chopped"
          ],
          "name": "scallions",
          "original": "3 scallions, chopped, white and green parts separated",
          "originalName": "scallions, chopped, white and green parts separated",
          "originalString": "3 scallions, chopped, white and green parts separated",
          "unit": ""
      },
      {
          "aisle": "Alcoholic Beverages",
          "amount": 2.0,
          "consitency": "liquid",
          "id": 14106,
          "image": "white-wine.jpg",
          "measures": {
              "metric": {
                  "amount": 2.0,
                  "unitLong": "Tbsps",
                  "unitShort": "Tbsps"
              },
              "us": {
                  "amount": 2.0,
                  "unitLong": "Tbsps",
                  "unitShort": "Tbsps"
              }
          },
          "meta": [
              "white"
          ],
          "metaInformation": [
              "white"
          ],
          "name": "white wine",
          "original": "2-3 tbsp white wine",
          "originalName": "white wine",
          "originalString": "2-3 tbsp white wine",
          "unit": "tbsp"
      },
      {
          "aisle": "Pasta and Rice",
          "amount": 0.25,
          "consitency": "solid",
          "id": 99025,
          "image": "breadcrumbs.jpg",
          "measures": {
              "metric": {
                  "amount": 59.147,
                  "unitLong": "milliliters",
                  "unitShort": "ml"
              },
              "us": {
                  "amount": 0.25,
                  "unitLong": "cups",
                  "unitShort": "cups"
              }
          },
          "meta": [
              "whole wheat",
              "(I used panko)"
          ],
          "metaInformation": [
              "whole wheat",
              "(I used panko)"
          ],
          "name": "whole wheat bread crumbs",
          "original": "1/4 cup whole wheat bread crumbs (I used panko)",
          "originalName": "whole wheat bread crumbs (I used panko)",
          "originalString": "1/4 cup whole wheat bread crumbs (I used panko)",
          "unit": "cup"
      }
  ],
  "winePairing": {
      "pairedWines": [],
      "pairingText": "No one wine will suit every pasta dish. Pasta in a tomato-based sauce will usually work well with a medium-bodied red, such as a montepulciano or chianti. Pasta with seafood or pesto will fare better with a light-bodied white, such as a pinot grigio. Cheese-heavy pasta can pair well with red or white - you might try a sangiovese wine for hard cheeses and a chardonnay for soft cheeses. We may be able to make a better recommendation if you ask again with a specific pasta dish.",
      "productMatches": []
  }
}
