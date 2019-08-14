import React from 'react';

class Instructions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instructions: []
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    const api = "https://spoon-call.herokuapp.com/instructions?id="+this.props.id
    fetch(api)
      .then(promise => {
        return promise.json();
      }).then(data => {
      let instructions = data[0].steps.map((step) => {
          return <li key={step.number}>{step.step}</li>
        });
      this.setState({instructions: instructions})
      });
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
