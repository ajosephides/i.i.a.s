import React from 'react';
import AddCircle from "@material-ui/icons/AddCircle";
import Search from "@material-ui/icons/Search";
import LocalDining from "@material-ui/icons/LocalDining";
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import '../styles/inputForm.css'

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
      <div>
          <InputGroup className="mb-0 fixed-bottom">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1" className='input-group-text' >
                <LocalDining/>
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl className='formControl'
            
              type="text" name="ing" value={this.props.ing} 
              placeholder='Add ingredient....' 
              onChange={this.handleChange} />
            <InputGroup.Append>
                <Button id='add-ingredient' className='button-circle' onClick={this.handleChangeAdd}>
                  <AddCircle/>
                </Button>
            </InputGroup.Append>
            <InputGroup.Append>
                <Button className='button-submit' type="submit" value="Submit" onClick={this.handleSubmit}>
                <Search/>
                </Button>
            </InputGroup.Append>
          </InputGroup>
      </div>
    );
  }
}

export default InputForm
