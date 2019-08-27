import React from 'react';
import RecipeExpanded from './RecipeExpanded'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import '../styles/Recipe.css'

class Recipe extends React.Component {
  render() {
    const props = this.props
    return (
        <Card className='card-style'>
          <Card.Header id="header-click" className='header' >
            <Accordion.Toggle as={Card.Header} className='header' variant="link" eventKey={this.props.eventIndex}>
              <Card.Img variant="top"  alt={props.title} src={props.image}/>
                <Card.ImgOverlay >
                  <Card.Title className='heading'>{props.title}</Card.Title>
                </Card.ImgOverlay>
            </Accordion.Toggle>
         </Card.Header>

         <Accordion.Collapse eventKey={this.props.eventIndex}>
           <Card.Body>
              <Card.Text>
                <RecipeExpanded id={this.props.id} />
              </Card.Text>
            </Card.Body>
         </Accordion.Collapse>
        </Card>
    )
  }
}

export default Recipe
