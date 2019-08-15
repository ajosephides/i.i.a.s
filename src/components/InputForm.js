import React from 'react';

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeAdd = this.handleChangeAdd.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.onHandleChange(event);
  }

  handleChangeAdd(event) {
    this.props.onHandleChangeAdd(event);
    event.preventDefault();
  }

  handleSubmit(event) {
    this.props.onHandleSubmit(event);
    event.preventDefault();
  }

  render() {
    return (
      <form>
        <label>
          Ingredients:
          <input type="text" name="ing" value={this.props.ing} onChange={this.handleChange} />
          <button id='add-ingredient' onClick={this.handleChangeAdd}>
             Add
          </button>
        </label>
        <input type="submit" value="Submit" onClick={this.handleSubmit}/>
      </form>
    );
  }
}

export default InputForm
