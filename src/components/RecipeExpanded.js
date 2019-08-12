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
    // const id = this.props.id
    // const api = " "
    this.setState({steps: stepData[0].steps.map(function (step) {
        return <li key={step.number}>{step.step}</li>
      })
    })
    this.setState({ingredients: ingredientData.extendedIngredients.map(function (ingredient) {
        return <li key={ingredient.id}>{ingredient.original}</li>
      })
    })
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

var stepData = [
    {
        "name": "",
        "steps": [
            {
                "equipment": [
                    {
                        "id": 404784,
                        "image": "oven.jpg",
                        "name": "oven",
                        "temperature": {
                            "number": 200.0,
                            "unit": "Fahrenheit"
                        }
                    }
                ],
                "ingredients": [],
                "number": 1,
                "step": "Preheat the oven to 200 degrees F."
            },
            {
                "equipment": [
                    {
                        "id": 404661,
                        "image": "whisk.png",
                        "name": "whisk"
                    },
                    {
                        "id": 404783,
                        "image": "bowl.jpg",
                        "name": "bowl"
                    }
                ],
                "ingredients": [
                    {
                        "id": 19334,
                        "image": "light-brown-sugar.jpg",
                        "name": "light brown sugar"
                    },
                    {
                        "id": 19335,
                        "image": "sugar-in-bowl.png",
                        "name": "granulated sugar"
                    },
                    {
                        "id": 18371,
                        "image": "white-powder.jpg",
                        "name": "baking powder"
                    },
                    {
                        "id": 18372,
                        "image": "white-powder.jpg",
                        "name": "baking soda"
                    },
                    {
                        "id": 12142,
                        "image": "pecans.jpg",
                        "name": "pecans"
                    },
                    {
                        "id": 20081,
                        "image": "flour.png",
                        "name": "all purpose flour"
                    },
                    {
                        "id": 2047,
                        "image": "salt.jpg",
                        "name": "salt"
                    }
                ],
                "number": 2,
                "step": "Whisk together the flour, pecans, granulated sugar, light brown sugar, baking powder, baking soda, and salt in a medium bowl."
            },
            {
                "equipment": [
                    {
                        "id": 404661,
                        "image": "whisk.png",
                        "name": "whisk"
                    },
                    {
                        "id": 404783,
                        "image": "bowl.jpg",
                        "name": "bowl"
                    }
                ],
                "ingredients": [
                    {
                        "id": 2050,
                        "image": "vanilla-extract.jpg",
                        "name": "vanilla extract"
                    },
                    {
                        "id": 93622,
                        "image": "vanilla.jpg",
                        "name": "vanilla bean"
                    },
                    {
                        "id": 1230,
                        "image": "buttermilk.jpg",
                        "name": "buttermilk"
                    },
                    {
                        "id": 1123,
                        "image": "egg.png",
                        "name": "egg"
                    }
                ],
                "number": 3,
                "step": "Whisk together the eggs, buttermilk, butter and vanilla extract and vanilla bean in a small bowl."
            },
            {
                "equipment": [],
                "ingredients": [
                    {
                        "id": 1123,
                        "image": "egg.png",
                        "name": "egg"
                    }
                ],
                "number": 4,
                "step": "Add the egg mixture to the dry mixture and gently mix to combine. Do not overmix."
            },
            {
                "equipment": [],
                "ingredients": [],
                "length": {
                    "number": 15,
                    "unit": "minutes"
                },
                "number": 5,
                "step": "Let the batter sit at room temperature for at least 15 minutes and up to 30 minutes before using."
            },
            {
                "equipment": [
                    {
                        "id": 404779,
                        "image": "griddle.jpg",
                        "name": "griddle"
                    },
                    {
                        "id": 404645,
                        "image": "pan.png",
                        "name": "frying pan"
                    }
                ],
                "ingredients": [],
                "length": {
                    "number": 3,
                    "unit": "minutes"
                },
                "number": 6,
                "step": "Heat a cast iron or nonstick griddle pan over medium heat and brush with melted butter. Once the butter begins to sizzle, use 2 tablespoons of the batter for each pancake and cook until the bubbles appear on the surface and the bottom is golden brown, about 2 minutes, flip over and cook until the bottom is golden brown, 1 to 2 minutes longer."
            },
            {
                "equipment": [
                    {
                        "id": 404784,
                        "image": "oven.jpg",
                        "name": "oven",
                        "temperature": {
                            "number": 200.0,
                            "unit": "Fahrenheit"
                        }
                    }
                ],
                "ingredients": [],
                "number": 7,
                "step": "Transfer the pancakes to a platter and keep warm in a 200 degree F oven."
            },
            {
                "equipment": [],
                "ingredients": [
                    {
                        "id": 10014037,
                        "image": "bourbon.png",
                        "name": "bourbon"
                    }
                ],
                "number": 8,
                "step": "Serve 6 pancakes per person, top each with some of the bourbon butter."
            },
            {
                "equipment": [],
                "ingredients": [
                    {
                        "id": 19336,
                        "image": "powdered-sugar.jpg",
                        "name": "powdered sugar"
                    },
                    {
                        "id": 19911,
                        "image": "maple-syrup.png",
                        "name": "maple syrup"
                    }
                ],
                "number": 9,
                "step": "Drizzle with warm maple syrup and dust with confectioners' sugar."
            },
            {
                "equipment": [],
                "ingredients": [
                    {
                        "id": 12142,
                        "image": "pecans.jpg",
                        "name": "pecans"
                    }
                ],
                "number": 10,
                "step": "Garnish with fresh mint sprigs and more toasted pecans, if desired."
            }
        ]
    },
    {
        "name": "Bourbon Molasses Butter",
        "steps": [
            {
                "equipment": [
                    {
                        "id": 404669,
                        "image": "sauce-pan.jpg",
                        "name": "sauce pan"
                    }
                ],
                "ingredients": [
                    {
                        "id": 10014037,
                        "image": "bourbon.png",
                        "name": "bourbon"
                    },
                    {
                        "id": 19335,
                        "image": "sugar-in-bowl.png",
                        "name": "sugar"
                    }
                ],
                "number": 1,
                "step": "Combine the bourbon and sugar in a small saucepan and cook over high heat until reduced to 3 tablespoons, remove and let cool."
            },
            {
                "equipment": [
                    {
                        "id": 404771,
                        "image": "food-processor.png",
                        "name": "food processor"
                    }
                ],
                "ingredients": [
                    {
                        "id": 19304,
                        "image": "molasses.jpg",
                        "name": "molasses"
                    },
                    {
                        "id": 10014037,
                        "image": "bourbon.png",
                        "name": "bourbon"
                    },
                    {
                        "id": 2047,
                        "image": "salt.jpg",
                        "name": "salt"
                    }
                ],
                "number": 2,
                "step": "Put the butter, molasses, salt and cooled bourbon mixture in a food processor and process until smooth."
            },
            {
                "equipment": [
                    {
                        "id": 404730,
                        "image": "plastic-wrap.jpg",
                        "name": "plastic wrap"
                    },
                    {
                        "id": 404783,
                        "image": "bowl.jpg",
                        "name": "bowl"
                    }
                ],
                "ingredients": [],
                "number": 3,
                "step": "Scrape into a bowl, cover with plastic wrap and refrigerate for at least 1 hour to allow the flavors to meld."
            },
            {
                "equipment": [],
                "ingredients": [],
                "length": {
                    "number": 30,
                    "unit": "minutes"
                },
                "number": 4,
                "step": "Remove from the refrigerator about 30 minutes before using to soften."
            }
        ]
    }
]


var ingredientData = {
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
