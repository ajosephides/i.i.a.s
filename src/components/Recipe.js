import React from 'react';
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import RecipeExpanded from './RecipeExpanded'

class Recipe extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     showRecipeExpanded: false
  //   };
  //   // this.handleClick = this.handleClick.bind(this);
  //   // this.showRecipeExpanded = this.showRecipeExpanded.bind(this);
  // }

  // handleClick(event) {
  //   this.setState(prevState => ({
  //       showRecipeExpanded: !prevState.showRecipeExpanded
  //     })
  //   );
  //   event.preventDefault()
  // }
  //
  // showRecipeExpanded() {
  //   if (this.state.showRecipeExpanded) {
  //     return <div><RecipeExpanded id={this.props.id}/></div>
  //   } else {
  //     return null
  //   }
  // }

  render() {
    const props = this.props
    return (
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey={this.props.eventIndex}>
            {props.title}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={this.props.eventIndex}>
          <Card.Body>
            <RecipeExpanded id={this.props.id} />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    )
  }
}

export default Recipe


// <div>
//   <a href="recipe" onClick={this.handleClick}>
//     {props.title}
//   </a>
//     <img alt={props.title}  src={props.image}/>
// </div>
