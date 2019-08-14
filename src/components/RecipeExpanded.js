import React from 'react'
import Ingredients from './Ingredients'
import Instructions from './Instructions'


class RecipeExpanded extends React.Component {

render() {
    return (
      <div id="recipe-expanded">
        <ol>
          <Instructions id={this.props.id} />
        </ol>
        <ul>
          <Ingredients id={this.props.id} />
        </ul>
      </div>
    )
  }
}

export default RecipeExpanded
