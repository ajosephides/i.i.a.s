import React from 'react';

class Recipe extends React.Component {
  render() {
    const props = this.props
    return (
      <div>
        <h1>{props.title}</h1>
        <img alt={props.title}  src={props.image}/>
      </div>
    )
  }
}

export default Recipe
