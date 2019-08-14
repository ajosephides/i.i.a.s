import React from 'react';
import Form from 'react-bootstrap/Form'

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
    const formStyle = {
      padding: '1%',
      backgroundColor: 'rgba(59, 59, 59, 0.692)',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    };
    const inputStyle = {
      backgroundColor: 'transparent',
    }
    return (
      <div className="fixed-bottom" >
        <Form inline style={formStyle}  className="justify-content-center">
          <label>
            <input className={inputStyle} type="text" name = "ing" value={this.props.ing} placeholder='ingredients' onChange={this.handleChange} />
            <button id='add-button' onClick={this.handleChangeAdd}>
                Add
            </button>
          </label>
          <br />
          <input type="submit" value="Submit" onClick={this.handleSubmit}/>
        </Form>
      </div>
    );
  }
}

export default InputForm
