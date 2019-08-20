import React from 'react';
import Spinner from 'react-bootstrap/Spinner'

class DataLoading extends React.Component {

  render() {
    const props = this.props
    if (!props.showDataLoading) {
      return null;
    }
    else{
      return (
          <Spinner animation="border" role="status" style={{float: 'left', marginTop: '50%', marginLeft: '45%', color: 'grey'}}>
            <span className="sr-only">Please wait while we get the data from our partners.....</span>
          </Spinner>  
      );
    }
  }
}

export default DataLoading
