import React from 'react';
import '../styles/Instructions.css';

class Instructions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instructions: []
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
    this.abortController = new AbortController()
  }

  componentDidMount() {
    const api = `https://api.spoonacular.com/recipes/${this.props.id}/analyzedInstructions?apiKey=e15954d9258e44c2a72e439a8051ffa9`
    fetch(api, {signal: this.abortController.signal})
      .then(promise => {
        return promise.json();
      }).then(data => {
          if (data.length > 0) {
            let instructions = data[0].steps.map((step) => {
                return <li key={step.number}>{step.step}</li>
            });
            this.setState({instructions: instructions})
          }
      })
      .catch(err => {
        if (err.name === 'AbortError') return
        throw err
      })
  }

  componentWillUnmount() {
    this.abortController.abort()
  }

  render() {
    return (
      <div>
        {this.state.instructions}
      </div>
    )
  }
}

export default Instructions
