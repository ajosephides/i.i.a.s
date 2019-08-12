import React from 'react';
import RecipeExpanded from './RecipeExpanded'

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRecipeExpanded: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.showRecipeExpanded = this.showRecipeExpanded.bind(this);
  }

  handleClick(event) {
    this.setState(prevState => ({
        showRecipeExpanded: !prevState.showRecipeExpanded
      })
    );
    console.log(this.state.showRecipeExpanded)
    event.preventDefault()
  }

  showRecipeExpanded() {
    if (this.state.showRecipeExpanded) {
      return <div><RecipeExpanded id={this.props.id}/></div>
    } else {
      return null
    }
  }

  render() {
    const props = this.props
    return (
      <div>
        <div>
        <a href="recipe" onClick={this.handleClick}>
          {props.title}
        </a>
          <img alt={props.title}  src={props.image}/>
        </div>

        <div>
          {this.showRecipeExpanded()}
        </div>
      </div>
    )
  }
}

export default Recipe
