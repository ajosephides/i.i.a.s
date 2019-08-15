import React from 'react';
// import Icon from "@material-ui/core/Icon";
import AddCircle from "@material-ui/icons/AddCircle";
import Search from "@material-ui/icons/Search";
import Local_Dining from "@material-ui/icons/LocalDining";
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import StyleForm from '../style-sheet/StyleForm.css'

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
    const transp = {
      // backgroundColor: 'transparent',
      // border: 'none',
      // color: 'white',
      // fontSize: '120%',
      // width: 'fit-content'
    }

    const input = {
      // backgroundColor: 'lightgray',
      // border: 'none',
      // color: 'white'
    }

    const icons = {
      // width: '89%'
      // backgroundColor: 'lightgray',
      // border: 'none',
      // fontSize: '200%'
    }

    return (
      <div>
        {/* <form style={StyleForm} className="fixed-bottom"> */}
          <label>
          <InputGroup className="mb-0 fixed-bottom" style={{}}>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1" style={{backgroundColor: 'lightgrey', border: 'none', margin: '0%'}}>
                <Local_Dining/>
              </InputGroup.Text>
            </InputGroup.Prepend>
            {/* <InputGroup.Text id="basic-addon1"> */}
            <FormControl style={{backgroundColor: 'lightgrey'}}
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              type="text" name="ing" value={this.props.ing} 
              placeholder='Add ingredient....' 
              onChange={this.handleChange} 
            />
            <InputGroup.Append>
                <Button id='add-ingredient' style={{backgroundColor: 'lightgrey', border: 'none', margin: '0%'}} onClick={this.handleChangeAdd}>
                  <AddCircle/>
                </Button>
            </InputGroup.Append>
            <InputGroup.Append>
                <Button type="submit" value="Submit" style={{backgroundColor: 'lightgrey', border: 'none', margin: '0%'}} onClick={this.handleSubmit}>
                <Search/>
                </Button>
            </InputGroup.Append>
          </InputGroup>



            {/* <input style={input} type="text" name="ing" value={this.props.ing} placeholder='Add ingredient....' onChange={this.handleChange} /> */}
            {/* <button style={transp} id='add-button' onClick={this.handleChangeAdd}>
              <AddCircle open={true} style={icons}/>
            </button>
          </label>
            <button style={transp} type="submit" value="Submit" onClick={this.handleSubmit}>
              <Search open={true} style={icons}/>
            </button> */}
              </label>
        {/* </form> */}
      </div>
    );
  }
}

export default InputForm
