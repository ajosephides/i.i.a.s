import React from 'react';
import RecipeExpanded from './RecipeExpanded'
import styles from '../styles/Recipe.module.css'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

class Recipe extends React.Component {
  render() {
    const props = this.props
    return (
        <Card className={styles['card-style']}>

          <Card.Header id="header-click" className={styles['header']} style={{padding:'0'}} >
            <Accordion.Toggle as={Card.Header} style={{padding: '0%'}} variant="link" eventKey={this.props.eventIndex}>
              <Card.Img className={styles['bg-img']} variant="top"  alt={props.title} src={props.image}/>
                <Card.ImgOverlay className={styles['overlay']}>
                  <Card.Title className={styles['heading']}>{props.title}</Card.Title>
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
