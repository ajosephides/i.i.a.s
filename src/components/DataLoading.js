import React from 'react';

class DataLoading extends React.Component {

  render() {
    const props = this.props
    if (!props.showDataLoading) {
      return null;
    }
    else{
      return (
        <div id="waitingData">
          Please wait while we get the data from our partners.....
        </div>
      );
    }
  }
}

export default DataLoading
