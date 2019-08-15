import React from 'react';
import RecipeExpanded from './RecipeExpanded'
import Image from 'react-bootstrap/Image'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import styles from '../styles/Recipe.module.css'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

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

//   render() {
//     const props = this.props
//     return (
//       <div>
//         <Jumbotron className={styles['test']} fluid>
//         <div className={styles['overlay']}></div>
//           <Container fluid>
//             <Image className={styles['bg-img']} alt={props.title}  src={props.image} fluid />
//             <h1>
//               <a className={styles['centered']} href="recipe" onClick={this.handleClick}>
//               {props.title}
//               </a>
//             </h1>
//           </Container>
//         </Jumbotron>
//         <div>
//           {this.showRecipeExpanded()}
//         </div>
//       </div>
//     )
//   }
// }

render() {
  const props = this.props
  return (
      <Card className={styles['card-style']}>

        <Card.Header className={styles['header']} style={{padding:'0'}} >
          <Accordion.Toggle as={Card.Header} variant="link" eventKey={this.props.eventIndex}>
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
