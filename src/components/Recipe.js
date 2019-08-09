import React from 'react';
import RecipeExpanded from './RecipeExpanded'

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRecipeExpanded: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState(
      this.state.showRecipeExpanded: !this.state.showRecipeExpanded
    );
  }

  render() {
    const props = this.props
    return (
      <div>
      <a href="#" onClick={handleClick}>
        {props.title}
      </a>
        <img alt={props.title}  src={props.image}/>
      </div>

      {if ( this.state.showRecipeExpanded ) {
        return (<div><RecipeExpanded id={props.id}/></div>)
        }
      }
    )
  }
}

export default Recipe
