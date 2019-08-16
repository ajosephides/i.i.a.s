import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Ingredients from './Ingredients'
import Instructions from './Instructions'
import '../styles/RecipeExpanded.css';


class RecipeExpanded extends React.Component {

render() {
    return (
      <div id="recipe-expanded">
        <Container>
          <Row>
            <Col sm="12" lg={true}>
              <div id="recipe-expanded-ingredients" style={{ listStyleType: "none" }}>
                <Ingredients id={this.props.id} />
              </div>
            </Col>
            <Col sm="12" lg={true}>
              <ol id="recipe-expanded-instructions" style={{paddingInlineStart: 20}}>
                <Instructions id={this.props.id} />
              </ol>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default RecipeExpanded
