import React from 'react';

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    this.props.onHandleChange(event)
  }

  handleSubmit(event) {
    this.props.onHandleSubmit(event)
    event.preventDefault()
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Ingredient 1:
          <input id='input1' type="text" name = "ing1" value={this.props.ing1} onChange={this.handleChange} />
        </label>
        <br />
        <label> Ingredient 2: 
          <input type="text" name = "ing2" value={this.props.ing2} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Ingredient 3:
          <input type="text" name = "ing3" value={this.props.ing3} onChange={this.handleChange} />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default InputForm
